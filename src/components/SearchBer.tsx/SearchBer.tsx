"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState, forwardRef, useImperativeHandle } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Search } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
  category?: string;
}

interface SearchBerProps {
  onSearchChange?: (value: string) => void;
  onClose?: () => void;
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Fresh Chicken Breast",
    price: 650,
    image: "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
    category: "Meat",
  },
  {
    id: 2,
    name: "Beef Ribeye Steak",
    price: 1200,
    image: "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
    category: "Meat",
  },
  {
    id: 3,
    name: "Organic Salmon Fillet",
    price: 850,
    image: "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
    category: "Seafood",
  },
  {
    id: 4,
    name: "Premium Dry Fruits Mix",
    price: 1200,
    image: "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
    category: "Dry Fruits",
  },
  {
    id: 5,
    name: "Honey Nuts",
    price: 450,
    image: "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
    category: "Nuts",
  },
];

const SearchBer = forwardRef<HTMLInputElement, SearchBerProps>(
  ({ onSearchChange, onClose }, ref) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Expose input ref to parent
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, []);

    // Filter products
    const filteredProducts = useMemo(() => {
      if (!searchQuery.trim()) return [];
      const query = searchQuery.toLowerCase().trim();
      return MOCK_PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(query)
      ).slice(0, 12);
    }, [searchQuery]);

    const hasResults = filteredProducts.length > 0;
    const showDropdown = isOpen && (searchQuery.trim() || hasResults);

    // Handlers
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
      onSearchChange?.(e.target.value);
    };

    const handleFocus = () => setIsOpen(true);

    const handleBlur = (e: React.FocusEvent) => {
      setTimeout(() => {
        if (!searchRef.current?.contains(document.activeElement)) {
          setIsOpen(false);
        }
      }, 200);
    };

    const handleProductClick = () => {
      setSearchQuery("");
      setIsOpen(false);
      onClose?.();
    };

    // Close on click outside
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
        {/* Search Input */}
        <InputGroup className="border  border-gray-300 rounded-[5px] hover:border-primary/60 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all shadow-sm">
          <InputGroupInput
            ref={inputRef}
            placeholder="Enter your product name"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="text-base placeholder:text-gray-400 pr-10"
            aria-label="Search products"
          />
          <InputGroupAddon className="pointer-events-none">
            <Search className="w-5 h-5 text-gray-500" />
          </InputGroupAddon>
        </InputGroup>

        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute left-0 right-0 top-full mt-0 bg-white border-x border-b border-gray-200 rounded-b-[5px] !pb-5 pt-[20px] shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-h-[70vh] overflow-y-auto">
              <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
                {/* Results Header */}
                {hasResults && (
                  <div className="mb-3 pb-2 border-b border-gray-200">
                    <p className="text-xs sm:text-sm font-bold text-gray-700">
                      পণ্য পাওয়া গেছে ({filteredProducts.length})
                    </p>
                  </div>
                )}

                {/* Products Grid */}
                {hasResults ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
                    {filteredProducts.map((product, index) => (
                      <Link
                      
                        key={product.id}
                        href={`/products/${product.id}`}
                        onClick={handleProductClick}
                        className="group flex flex-col gap-2 p-2 rounded-lg hover:bg-gradient-to-br hover:from-emerald-50 hover:to-blue-50 transition-all duration-300 mb-4 border border-transparent hover:border-emerald-200 hover:shadow-md"
                        style={{ animationDelay: `${index * 50}ms`, boxShadow: "1px 1px 10px  rgba(0, 0, 0, 0.2)"}}
                      >
                        <div className="relative  aspect-square bg-gray-100 rounded-md overflow-hidden">
                          <Image
                            src={product.image || "/placeholder-food.jpg"}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          {product.category && (
                            <span className="absolute top-1 right-1 bg-emerald-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-medium">
                              {product.category}
                            </span>
                          )}
                        </div>

                        <div>
                          <h3 className="font-semibold text-gray-800 group-hover:text-emerald-700 line-clamp-2 text-xs">
                            {product.name}
                          </h3>
                          <p className="text-sm font-bold text-emerald-600 mt-0.5">
                            ৳{product.price.toLocaleString()}
                          </p>
                          <p className="text-[10px] text-gray-500 mt-0.5">
                            তাজা ও প্রিমিয়াম কোয়ালিটি
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-10 h-10 text-gray-400" />
                    </div>
                    <p className="text-lg font-semibold text-gray-700">
                      কোনো পণ্য পাওয়া যায়নি
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      অন্য কীওয়ার্ড দিয়ে চেষ্টা করুন
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

SearchBer.displayName = "SearchBer";

export default SearchBer;