"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import SearchBer from "@/components/SearchBer.tsx/SearchBer";
import { UserDropdown } from "@/components/dropdown/UserDropdown";
import { MenuDropdown } from "@/components/dropdown/MenuDropdown";
import ShoppingCardDrawer from "@/components/shoppingCard/ShoppingCardDrawer";

export default function Header() {
  const [hideTopbar, setHideTopbar] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setHideTopbar(window.scrollY > 80);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Focus search input immediately when opened
  const handleSearchOpen = () => {
    setIsSearchOpen(true);
    // Use requestAnimationFrame to ensure DOM is ready, then focus
    requestAnimationFrame(() => {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 0);
    });
  };

  // Also focus when isSearchOpen changes to true
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      // Multiple attempts to ensure focus
      const timeout1 = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 0);
      
      const timeout2 = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
      
      const timeout3 = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
      };
    }
  }, [isSearchOpen]);

  // Close search on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isSearchOpen]);

  // Prevent body scroll when search is open on mobile
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSearchOpen]);

  return (
    <>
      {/* TOPBAR – Fast & Smooth Hide */}
      <div
        className={`fixed inset-x-0 top-0 z-50 bg-primary text-white text-sm font-semibold text-center transition-transform duration-200 ease-out ${
          hideTopbar ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="h-[40px] flex items-center justify-center container mx-auto px-4">
          <span className="hidden sm:inline">
            Free Delivery on orders above ৳999
          </span>
          <span className="mx-3">•</span>
          <span>
            Call:{" "}
            <a href="tel:09638000888" className="underline">
              09638-000888
            </a>
          </span>
          <span className="mx-3 hidden md:inline">•</span>
          <span className="hidden md:inline">100% Fresh & Halal</span>
        </div>
      </div>

      {/* MAIN HEADER – No Jump, Perfect Sticky */}
      <header
        className={`fixed inset-x-0 z-40 h-20 bg-white/95 backdrop-blur-xl border-b border-gray-100 border-b border-gray-300 transition-all duration-200 ease-out ${
          hideTopbar ? "top-0" : "top-10"
        }`}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <Link href="/" className="flex-shrink-0">
              <img
                src="/logo/logo.png"
                alt="Amzad Food"
                className="h-11 w-auto transition-transform hover:scale-105"
              />
            </Link>

            {/* Desktop Search Bar */}
            <div className="hidden md:block flex-1 max-w-2xl mx-10">
              <SearchBer />
            </div>

            <div className="flex items-center gap-5">
              {/* Mobile Search Button */}
              <div className="block md:hidden">
                <button
                  onClick={handleSearchOpen}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Open search"
                >
                  <Search
                    className={`w-6 h-6 transition-colors ${
                      isSearchOpen ? "text-primary" : "text-gray-600"
                    }`}
                    strokeWidth={isSearchOpen ? 2.5 : 2}
                  />
                </button>
              </div>

              <div className="hidden md:flex items-center gap-6">
                <ShoppingCardDrawer />
              </div>
              <UserDropdown />
              <MenuDropdown />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-[60] md:hidden animate-in fade-in duration-200">
          <div className="h-full flex flex-col">
            {/* Search Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 bg-white">
              <div className="flex-1">
                <SearchBer 
                  ref={searchInputRef}
                  onClose={() => setIsSearchOpen(false)}
                />
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
            <div className="flex-1 overflow-y-auto">
              {/* SearchBer dropdown will appear here */}
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content jump */}
      <div className={hideTopbar ? "h-20" : "h-32"} />
    </>
  );
}