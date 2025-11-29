"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Search, User, X, Phone, Users, Mail } from "lucide-react";
import { 
  FaTiktok, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin, 
  FaYoutube 
} from "react-icons/fa";
import SearchBer from "@/components/SearchBer.tsx/SearchBer";
import ShoppingCardDrawer from "@/components/drower/ShoppingCardDrawer";
import MenuOrCategoryDrower from "@/components/drower/MenuOrCategoryDrower";
import LoginModal from "@/components/modal/LoginModal";

export default function Header() {
  const [hideTopbar, setHideTopbar] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
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
        className={`fixed inset-x-0 top-0 z-50 bg-[#101828] text-white text-sm font-medium transition-transform duration-200 ease-out ${
          hideTopbar ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="h-[40px] flex items-center justify-between container mx-auto px-4">
          {/* Left Side - Phone */}
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href="tel:09613824071" className="hover:text-white/80 transition-colors">
              09613824071
            </a>
          </div>

          {/* Right Side - Join Group + Social Icons */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Join our group for more offer</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="TikTok"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>
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

            <div className="flex items-center md:gap-5 gap-2">
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
              <button 
                className="cursor-pointer" 
                onClick={() => setIsLoginModalOpen(true)}
              >
                <User />
              </button>
              <LoginModal open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen} />
              {/* <UserDropdown /> */}
              <MenuOrCategoryDrower />
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
