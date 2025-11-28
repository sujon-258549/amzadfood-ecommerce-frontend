"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Store, X } from "lucide-react";
import ShoppingCardDrawer from "@/components/shoppingCard/ShoppingCardDrawer";
import WishListCartDrawer from "@/components/wishListCard/WishListCartDrawer";
import { useState, useEffect, useRef } from "react";
import SearchBer from "@/components/SearchBer.tsx/SearchBer";

const MobileNav = () => {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      // Add event listener when search is open
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when search is open
      document.body.style.overflow = "hidden";
    } else {
      // Remove event listener when search is closed
      document.removeEventListener("mousedown", handleClickOutside);
      // Restore body scroll
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isSearchOpen]);

  // Reset search query when search is closed
  useEffect(() => {
    if (!isSearchOpen) {
      // Use setTimeout to defer the state update
      const timeoutId = setTimeout(() => {
        setSearchQuery("");
      }, 0);

      return () => clearTimeout(timeoutId);
    }
  }, [isSearchOpen]);

  // Close search on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isSearchOpen]);

  // Check if search has value (hide placeholder if it does)
  const hasSearchValue = searchQuery.trim().length > 0;

  return (
    <>
      {/* Search Overlay - Full Screen */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-[60] lg:hidden animate-in fade-in duration-200">
          <div ref={searchContainerRef} className="h-full flex flex-col">
            {/* Search Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 bg-white">
              <div className="flex-1">
                <SearchBer onSearchChange={setSearchQuery} />
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close search"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Search Content Area */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {/* Show placeholder only when search is empty */}
              {!hasSearchValue && (
                <div className="text-center text-gray-500 mt-8">
                  <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p className="text-sm">Start typing to search for products</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 z-50 lg:hidden">
        <div className="flex justify-around items-center h-16 px-1">
          {/* Home */}
          <Link
            href="/"
            className="flex-1 flex flex-col items-center gap-0.5 py-1 min-w-0"
          >
            <div className="relative">
              <Home
                className={`w-6 h-6 transition-colors ${
                  pathname === "/" ? "text-primary" : "text-gray-600"
                }`}
                strokeWidth={pathname === "/" ? 2.5 : 2}
              />
              {pathname === "/" && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
              )}
            </div>
            <span
              className={`text-[10px] font-medium truncate w-full text-center ${
                pathname === "/" ? "text-primary" : "text-gray-600"
              }`}
            >
              Home
            </span>
          </Link>

          {/* Search */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex-1 cursor-pointer flex flex-col items-center gap-0.5 py-1 min-w-0"
          >
            <Search
              className={`w-6 h-6 transition-colors ${
                isSearchOpen ? "text-primary" : "text-gray-600"
              }`}
              strokeWidth={isSearchOpen ? 2.5 : 2}
            />
            <span
              className={`text-[10px] cursor-pointer font-medium truncate w-full text-center ${
                isSearchOpen ? "text-primary" : "text-gray-600"
              }`}
            >
              Search
            </span>
          </button>

          {/* Wishlist */}
          <div className="flex-1 flex flex-col items-center min-w-0">
            <WishListCartDrawer />
            <span className="text-[10px] font-medium text-gray-600 mt-0.5 truncate w-full text-center">
              Wishlist
            </span>
          </div>

          {/* Cart */}
          <div className="flex-1 cursor-pointer flex flex-col items-center min-w-0">
            <ShoppingCardDrawer />
            <span className="text-[10px] font-medium text-gray-600 mt-0.5 truncate w-full text-center">
              Cart
            </span>
          </div>

          {/* Shop */}
          <Link
            href="/shop"
            className="flex-1 flex flex-col items-center gap-0.5 py-1 min-w-0"
          >
            <div className="relative">
              <Store
                className={`w-6 h-6 transition-colors ${
                  pathname?.startsWith("/shop")
                    ? "text-primary"
                    : "text-gray-600"
                }`}
                strokeWidth={pathname?.startsWith("/shop") ? 2.5 : 2}
              />
              {pathname?.startsWith("/shop") && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
              )}
            </div>
            <span
              className={`text-[10px] font-medium truncate w-full text-center ${
                pathname?.startsWith("/shop") ? "text-primary" : "text-gray-600"
              }`}
            >
              Shop
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
