"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineHeart } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import SearchBer from "../SearchBer.tsx/SearchBer";

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
        backgroundColor: isScrolled ? "rgba(16,16,16,0.95)" : "",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(8px)",
        WebkitBackdropFilter: isScrolled ? "blur(12px)" : "blur(8px)",
        boxShadow: isScrolled
          ? "0 8px 16px -4px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.05)"
          : "0 4px 6px -1px rgba(0,0,0,0.1)",
        transition:
          "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className="container">
        <header className=" flex justify-between items-center py-3 gap-4">
          {/* Left Side - Logo/Icon */}
          <Link href="/" className="flex-shrink-0 group">
            <img
              className="h-10 w-32"
              src="https://amzadfood.com/wp-content/uploads/2024/04/Final-Logo-Website-1.png"
            />
          </Link>

          {/* Middle - Search Bar with Dropdown */}
          <div className="flex-1 max-w-2xl">
            <SearchBer />
          </div>

          {/* Right Side - Wishlist, Login, Cart */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-200 relative group"
              aria-label="Wishlist"
            >
              <HiOutlineHeart className="text-xl group-hover:text-red-400 transition-colors" />
            </Button>

            {/* Login */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-200 group"
              aria-label="Login"
            >
              <FiUser className="text-xl group-hover:text-primary transition-colors" />
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-200 relative group"
              aria-label="Cart"
            >
              <IoCartOutline className="text-xl group-hover:text-primary transition-colors" />
              <span className="absolute top-1 right-1 w-5 h-5 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-xs text-white font-semibold shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                0
              </span>
            </Button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
