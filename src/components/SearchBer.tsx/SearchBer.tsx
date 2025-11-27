import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "../ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Search } from "lucide-react";
interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
}

const SearchBer = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mockProducts: Product[] = [
    { id: 1, name: "Burger Deluxe", price: 12.99 },
    { id: 2, name: "Pizza Margherita", price: 15.99 },
    { id: 3, name: "Chicken Wings", price: 9.99 },
    { id: 4, name: "Caesar Salad", price: 8.99 },
    { id: 5, name: "French Fries", price: 4.99 },
    { id: 6, name: "Pasta Carbonara", price: 13.99 },
    { id: 7, name: "Grilled Chicken", price: 11.99 },
    { id: 8, name: "Fish & Chips", price: 14.99 },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const searchRef = useRef<HTMLDivElement>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return mockProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [mockProducts, searchQuery]);

  const showSearchDropdown = useMemo(() => {
    return (
      isSearchFocused &&
      (filteredProducts.length > 0 || searchQuery.trim().length > 0)
    );
  }, [isSearchFocused, filteredProducts.length, searchQuery]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setIsSearchFocused(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div ref={searchRef} className=" relative">
      <div className="relative group">
        {/* <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl !text-black transition-colors duration-200 group-focus-within:!text-primary" />
        <Input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => {
            setTimeout(() => setIsSearchFocused(false), 200);
          }}
          className="pl-10 pr-4 py-2.5 w-full bg-white/95 backdrop-blur-sm text-foreground border border-gray-400 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50 focus-visible:bg-white hover:bg-white hover:shadow-md"
          style={{ borderRadius: "5px" }}
        /> */}
        <InputGroup className="border border-gray-500 rounded-[5px]">
          <InputGroupInput
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => {
              setTimeout(() => setIsSearchFocused(false), 200);
            }}
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* Search Dropdown */}
      {showSearchDropdown && filteredProducts.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/98 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 max-h-96 overflow-y-auto z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-2">
            {filteredProducts.map((product, index) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                onClick={() => {
                  setSearchQuery("");
                  setIsSearchFocused(false);
                }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-200 cursor-pointer group border border-transparent hover:border-primary/10"
                style={{ animationDelay: `${index * 20}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-lg">🍔</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                    {product.name}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* No Results Message */}
      {showSearchDropdown &&
        searchQuery.trim() &&
        filteredProducts.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white/98 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <p className="text-muted-foreground text-center">
              No products found
            </p>
          </div>
        )}
    </div>
  );
};

export default SearchBer;
