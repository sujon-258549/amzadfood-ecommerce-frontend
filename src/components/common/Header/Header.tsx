// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import SearchBer from "@/components/SearchBer.tsx/SearchBer";
// import { UserDropdown } from "@/components/SearchBer.tsx/dropdown/UserDropdown";
// import { MenuDropdown } from "@/components/SearchBer.tsx/dropdown/MenuDropdown";
// import ShoppingCardDrawer from "@/components/shoppingCard/ShoppingCardDrawer";
// import WishListCartDrawer from "@/components/wishListCard/WishListCartDrawer";

// export default function Header() {
//   const [hideTopbar, setHideTopbar] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       // Show topbar only when near the top (first 100px)
//       setHideTopbar(window.scrollY > 100);
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll(); // initial check

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       {/* TOPBAR – Beautiful, hides smoothly on scroll */}
//       <div
//         className={`fixed inset-x-0 top-0 z-50 bg-primary text-white text-sm font-semibold shadow-lg transition-all duration-200 ease-out ${
//           hideTopbar
//             ? "-translate-y-full opacity-0"
//             : "translate-y-0 opacity-100"
//         }`}
//       >
//         <div className="py-3 text-center">
//           <span className="hidden sm:inline">
//             Free Delivery on orders above ৳999
//           </span>
//           <span className="mx-3">•</span>
//           <span>
//             Call:{" "}
//             <a href="tel:09638000888" className="underline">
//               09638-000888
//             </a>
//           </span>
//           <span className="mx-3 hidden md:inline">•</span>
//           <span className="hidden md:inline">
//             100% Fresh & Halal Guaranteed
//           </span>
//         </div>
//       </div>

//       {/* MAIN HEADER – Always sticky, moves up when topbar hides */}
//       <header
//         className={`fixed inset-x-0 z-40 h-20 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-md transition-all duration-200 ease-out ${
//           hideTopbar ? "top-0" : "top-12"
//         }`}
//       >
//         <div className="container mx-auto px-4 h-full">
//           <div className="flex items-center justify-between h-full">
//             {/* Logo */}
//             <Link href="/" className="flex-shrink-0">
//               <img
//                 src="https://amzadfood.com/wp-content/uploads/2024/04/Final-Logo-Website-1.png"
//                 alt="Amzad Food"
//                 className="h-11 w-auto transition-transform hover:scale-105"
//               />
//             </Link>

//             {/* Search Bar */}
//             <div className="hidden lg:block flex-1 max-w-2xl mx-10">
//               <SearchBer />
//             </div>

//             {/* Right Icons */}
//             <div className="flex items-center gap-5">
//               <div className="hidden md:flex items-center gap-6">
//                 {/* Wishlist */}
//                 {/* <button className="relative p-2.5 rounded-full hover:bg-gray-100 transition group">
//                   <HiOutlineHeart className="w-6 h-6 text-gray-700" />
//                   <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex-center font-bold shadow-lg">
//                     3
//                   </span>
//                 </button> */}

//                 {/* Cart */}
//                 <WishListCartDrawer />
//                 <ShoppingCardDrawer />

//                 <UserDropdown />
//               </div>

//               <MenuDropdown />
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Smooth content spacing – no jump ever */}
//       <div
//         className={`transition-all duration-500 ${
//           hideTopbar ? "pt-20" : "pt-32"
//         }`}
//       />
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SearchBer from "@/components/SearchBer.tsx/SearchBer";
import { UserDropdown } from "@/components/SearchBer.tsx/dropdown/UserDropdown";
import { MenuDropdown } from "@/components/SearchBer.tsx/dropdown/MenuDropdown";
import ShoppingCardDrawer from "@/components/shoppingCard/ShoppingCardDrawer";
import WishListCartDrawer from "@/components/wishListCard/WishListCartDrawer";

export default function Header() {
  const [hideTopbar, setHideTopbar] = useState(false);

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
        className={`fixed inset-x-0 z-40 h-20 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-md transition-all duration-200 ease-out ${
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

            <div className="hidden lg:block flex-1 max-w-2xl mx-10">
              <SearchBer />
            </div>

            <div className="flex items-center gap-5">
              <div className="hidden md:flex items-center gap-6">
                <WishListCartDrawer />
                <ShoppingCardDrawer />
              </div>
              <UserDropdown />
              <MenuDropdown />
            </div>
          </div>
        </div>
      </header>

      {/* এই div টা দিয়ে কোনো লাফালাফি হবে না – সবচেয়ে গুরুত্বপূর্ণ */}
      {/* <div className={hideTopbar ? "h-20 : "h-32"} /> */}
      <div className={hideTopbar ? "h-20" : "h-32"} />
    </>
  );
}
