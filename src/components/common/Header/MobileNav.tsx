"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Store, X } from "lucide-react";
import ShoppingCardDrawer from "@/components/drower/ShoppingCardDrawer";
import { useState, useEffect, useRef } from "react";
import SearchBer from "@/components/SearchBer.tsx/SearchBer";

const MobileNav = () => {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search when clicking outside








  return (
    <>
      {/* Search Overlay - Full Screen */}
     

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
