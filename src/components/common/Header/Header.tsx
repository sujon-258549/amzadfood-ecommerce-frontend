"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineHeart } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import SearchBer from "@/components/SearchBer.tsx/SearchBer";
import { UserDropdown } from "@/components/SearchBer.tsx/dropdown/UserDropdown";
import { MenuDropdown } from "@/components/SearchBer.tsx/dropdown/MenuDropdown";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const scrollContainer = document.querySelector<HTMLDivElement>(
      "#main-scroll-container"
    );

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScrollY = scrollContainer
          ? scrollContainer.scrollTop
          : window.scrollY;

        // Update background blur state
        setIsScrolled(currentScrollY > 10);

        // Determine scroll direction with threshold to prevent flickering
        const scrollThreshold = 5;
        if (currentScrollY < 10) {
          // At the top, always show header
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY.current + scrollThreshold) {
          // Scrolling down - hide header
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current - scrollThreshold) {
          // Scrolling up - show header
          setIsVisible(true);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    // Initial check
    handleScroll();

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, {
        passive: true,
      });
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 font-poppins transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        backgroundColor: isScrolled ? "#ffffffae" : "",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(8px)",
        WebkitBackdropFilter: isScrolled ? "blur(12px)" : "blur(8px)",
        boxShadow: isScrolled
          ? "0 8px 16px -4px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.05)"
          : "0 4px 6px -1px rgba(0,0,0,0.1)",
        transition:
          "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className="container ">
        <header className=" flex  justify-between items-center py-3 gap-4">
          {/* Left Side - Logo/Icon */}
          <Link href="/" className="flex-shrink-0 group">
            <img
              className="h-10 w-32"
              src="https://amzadfood.com/wp-content/uploads/2024/04/Final-Logo-Website-1.png"
            />
          </Link>

          {/* Middle - Search Bar with Dropdown */}
          <div className="flex-1 max-w-2xl">
            <div className="hidden lg:block">
              <SearchBer />
            </div>
          </div>

          {/* Right Side - Wishlist, Login, Cart */}
          <div className="flex items-center gap-4 md:gap-4 flex-shrink-0 ">
            {/* Wishlist */}
            <div className="hidden md:block ">
              <div className=" flex items-center gap-3 md:gap-6">
                <button
                  className="text-black hover:bg-gray-100 hover:scale-110 transition-all duration-200 relative group"
                  aria-label="Wishlist"
                >
                  <HiOutlineHeart className="text-2xl transition-colors" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-xs text-white font-semibold shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                    0
                  </span>
                </button>

                {/* Cart */}
                <button
                  className="text-black hover:bg-gray-100 hover:scale-110 transition-all duration-200 relative group"
                  aria-label="Cart"
                >
                  <IoCartOutline className="text-2xl transition-colors" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-xs text-white font-semibold shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                    0
                  </span>
                </button>

                {/* Login */}
                <UserDropdown/>
              </div>
            </div>
            <MenuDropdown />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
