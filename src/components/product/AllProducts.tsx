"use client";

import ProductCard from "../cards/ProductCard";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ChevronDown, Filter, X } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image?: string;
  save?: number;
  category: string;
  inStock: boolean;
}

// Fake JSON Data
const FAKE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "প্রিমিয়াম হানি নাটস / Premium Honey Nuts",
    price: 1390,
    oldPrice: 1500,
    save: 110,
    category: "পপুলার",
    image: "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%B9%E0%A6%BE%E0%A6%A8%E0%A6%BF-%E0%A6%A8%E0%A6%BE%E0%A6%9F-1kg-247x247.webp",
    inStock: true,
  },
  {
    id: 2,
    name: "রোস্টেড হানি নাটস / Roasted Honey Nuts",
    price: 1200,
    oldPrice: 1350,
    save: 150,
    category: "পপুলার",
    image: "https://amzadfood.com/wp-content/uploads/2024/04/Rosted-Honey-Nut-2-400x400.webp",
    inStock: true,
  },
  {
    id: 3,
    name: "খেজুর / Dates",
    price: 800,
    oldPrice: 950,
    save: 150,
    category: "পপুলার",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: 4,
    name: "খেজুর গুড় / Date Palm Jaggery",
    price: 450,
    oldPrice: 550,
    save: 100,
    category: "নিত্য প্রয়োজনীয়",
    image: "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
    inStock: true,
  },
  {
    id: 5,
    name: "প্রাকৃতিক মধু / Natural Honey",
    price: 650,
    oldPrice: 750,
    save: 100,
    category: "পপুলার",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: 6,
    name: "বাসমতি চাল / Basmati Rice",
    price: 120,
    oldPrice: 140,
    save: 20,
    category: "নিত্য প্রয়োজনীয়",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: 7,
    name: "তাজা দুধ / Fresh Milk",
    price: 80,
    oldPrice: 95,
    save: 15,
    category: "নিত্য প্রয়োজনীয়",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: 8,
    name: "তাজা ডিম / Fresh Eggs",
    price: 150,
    oldPrice: 180,
    save: 30,
    category: "নিত্য প্রয়োজনীয়",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: 9,
    name: "তেল / Cooking Oil",
    price: 280,
    oldPrice: 320,
    save: 40,
    category: "নিত্য প্রয়োজনীয়",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
    inStock: true,
  },
 
  {
    id: 12,
    name: "সিঙ্গারা / Samosa",
    price: 250,
    oldPrice: 300,
    save: 50,
    category: "মজা",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: 13,
    name: "স্প্রিং রোল / Spring Roll",
    price: 320,
    oldPrice: 380,
    save: 60,
    category: "মজা",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: 14,
    name: "পারাঠা / Paratha",
    price: 180,
    oldPrice: 220,
    save: 40,
    category: "মজা",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: 15,
    name: "সেমাই / Vermicelli",
    price: 120,
    oldPrice: 150,
    save: 30,
    category: "মজা",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=400&fit=crop",
    inStock: true,
  },


  {
    id: 21,
    name: "আম / Mango",
    price: 150,
    oldPrice: 180,
    save: 30,
    category: "সিজনাল",
    image: "https://amzadfood.com/wp-content/uploads/2024/05/1-400x400.jpg",
    inStock: true,
  },

  {
    id: 26,
    name: "বাদাম / Almonds",
    price: 1200,
    oldPrice: 1400,
    save: 200,
    category: "ড্রাই ফ্রুটস",
    image: "https://amzadfood.com/wp-content/uploads/2024/06/%E0%A6%95%E0%A6%BE%E0%A6%A0-%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%BE%E0%A6%AE-G.webp",
    inStock: true,
  },
  {
    id: 27,
    name: "কাজু / Cashews",
    price: 1500,
    oldPrice: 1800,
    save: 300,
    category: "ড্রাই ফ্রুটস",
    image: "https://amzadfood.com/wp-content/uploads/2024/06/%E0%A6%95%E0%A6%BE%E0%A6%9C%E0%A7%81-%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%BE%E0%A6%AE-G-400x400.webp",
    inStock: true,
  },
  {
    id: 28,
    name: "কিশমিশ / Raisins",
    price: 650,
    oldPrice: 750,
    save: 100,
    category: "ড্রাই ফ্রুটস",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop",
    inStock: true,
  },
  {
    id: 29,
    name: "আখরোট / Walnuts",
    price: 1100,
    oldPrice: 1300,
    save: 200,
    category: "ড্রাই ফ্রুটস",
    image: "https://amzadfood.com/wp-content/uploads/2025/09/Rosted-Nutri-Nut-Jar-with-Box-500-GRM-400x400.webp",
    inStock: true,
  },

];

const SORT_OPTIONS = [
  { value: "default", label: "ডিফল্ট" },
  { value: "price-low", label: "দাম: কম থেকে বেশি" },
  { value: "price-high", label: "দাম: বেশি থেকে কম" },
  { value: "name-asc", label: "নাম: A-Z" },
  { value: "name-desc", label: "নাম: Z-A" },
];

const AllProducts = () => {
  // Get unique categories from products
  const availableCategories = Array.from(
    new Set(FAKE_PRODUCTS.map((p) => p.category))
  );
  const allCategories = ["সব", ...availableCategories];

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar - Filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 sticky top-4">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <Button variant="outline" className="w-full justify-between">
                <span className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  ফিল্টার
                </span>
                <ChevronDown className="w-4 h-4 transition-transform" />
              </Button>
            </div>

            {/* Filter Content */}
            <div className="lg:block space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
                  ক্যাটাগরি
                </h3>
                <div className="space-y-2">
                  {allCategories.map((category, index) => (
                    <button
                      key={category}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        index === 0
                          ? "bg-primary text-white"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
                  দামের পরিসীমা
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">
                      সর্বনিম্ন
                    </label>
                    <Input
                      type="number"
                      placeholder="৳ ০"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">
                      সর্বোচ্চ
                    </label>
                    <Input
                      type="number"
                      placeholder="৳ ১০০০০"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              <Button variant="outline" className="w-full">
                <X className="w-4 h-4 mr-2" />
                ফিল্টার সরান
              </Button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header with Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                সব পণ্য
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                {FAKE_PRODUCTS.length} টি পণ্য পাওয়া গেছে
              </p>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-700 whitespace-nowrap">
                সাজান:
              </label>
              <select
                defaultValue="default"
                className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {FAKE_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
