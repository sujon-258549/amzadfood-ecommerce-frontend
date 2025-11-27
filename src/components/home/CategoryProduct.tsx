// // components/CategoryProduct.tsx
// import Image from "next/image";
// import { ChevronRight, ShoppingCart } from "lucide-react";

// const CategoryProduct = () => {
//   const products = [
//     {
//       id: 1,
//       name: "Lay's Classic Salted Chips",
//       price: 60,
//       oldPrice: 85,
//       save: 25,
//     },
//     { id: 2, name: "Pringles Original", price: 320, oldPrice: 420, save: 100 },
//     { id: 3, name: "KurKure Masala Munch", price: 20, oldPrice: 30, save: 10 },
//     {
//       id: 4,
//       name: "Bombay Sweets Chanachur",
//       price: 95,
//       oldPrice: 130,
//       save: 35,
//     },
//     { id: 5, name: "Potato Crackers", price: 45, oldPrice: 70, save: 25 },
//     {
//       id: 6,
//       name: "Meridian Nachos Cheese",
//       price: 110,
//       oldPrice: 150,
//       save: 40,
//     },
//     {
//       id: 7,
//       name: "Sun Chips Multigrain",
//       price: 180,
//       oldPrice: 250,
//       save: 70,
//     },
//     { id: 8, name: "Mr. Twist Potato", price: 35, oldPrice: 50, save: 15 },
//     { id: 9, name: "Cheese Balls", price: 55, oldPrice: 80, save: 25 },
//     {
//       id: 10,
//       name: "FUJIYA Caramel Popcorn",
//       price: 120,
//       oldPrice: 160,
//       save: 40,
//     },
//     {
//       id: 11,
//       name: "Doritos Nacho Cheese",
//       price: 140,
//       oldPrice: 190,
//       save: 50,
//     },
//     {
//       id: 12,
//       name: "All Time Potato Chips",
//       price: 40,
//       oldPrice: 60,
//       save: 20,
//     },
//     { id: 13, name: "Bikaji Bhujia", price: 130, oldPrice: 180, save: 50 },
//     {
//       id: 14,
//       name: "Haldiram's Aloo Bhujia",
//       price: 150,
//       oldPrice: 200,
//       save: 50,
//     },
//     { id: 15, name: "Cheetos Crunchy", price: 70, oldPrice: 100, save: 30 },
//     { id: 16, name: "Taka Tak Spicy", price: 25, oldPrice: 40, save: 15 },
//     {
//       id: 17,
//       name: "Ruffles Cheddar & Sour Cream",
//       price: 190,
//       oldPrice: 260,
//       save: 70,
//     },
//     {
//       id: 18,
//       name: "Pop Secret Butter Popcorn",
//       price: 210,
//       oldPrice: 280,
//       save: 70,
//     },
//     { id: 19, name: "Jhal Muri Mix", price: 50, oldPrice: 75, save: 25 },
//     {
//       id: 20,
//       name: "Bengal Spice Mixture",
//       price: 80,
//       oldPrice: 110,
//       save: 30,
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* Sticky Container - This controls when sticky stops */}
//         <div className="sticky top-0 z-10 bg-gray-50 pb-10 -mt-16 pt-16">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
//             {/* LEFT: Sticky Category Card */}
//             <div className="lg:sticky lg:top-0 h-fit">
//               <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-sm mx-auto">
//                 {/* Yellow Header */}
//                 <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-center py-4">
//                   <h3 className="text-2xl font-bold text-white">
//                     Deals of the Week
//                   </h3>
//                 </div>

//                 {/* MOST POPULAR Badge */}
//                 <div className="absolute top-16 left-8 z-10">
//                   <span className="bg-pink-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
//                     MOST POPULAR
//                   </span>
//                 </div>

//                 {/* Main Content */}
//                 <div className="pt-12 pb-8 px-8 text-center">
//                   {/* Product Images */}
//                   <div className="relative h-64 mb-8">
//                     <Image
//                       src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=600&fit=crop"
//                       alt="Lay's Chips"
//                       fill
//                       className="object-contain drop-shadow-2xl"
//                       priority
//                     />
//                   </div>

//                   {/* Price */}
//                   <div className="mb-6">
//                     <p className="text-5xl font-black text-green-600">$6.20</p>
//                     <p className="text-2xl text-gray-500 line-through">$6.98</p>
//                   </div>

//                   {/* Product Name */}
//                   <h4 className="text-lg font-semibold text-gray-800 mb-8">
//                     Lay s Kettle Cooked Potato Chips
//                   </h4>

//                   {/* Countdown Timer */}

//                   {/* Progress Bar */}
//                   <div className="mb-6 text-left">
//                     <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
//                       <div
//                         className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-1000"
//                         style={{ width: "71%" }}
//                       />
//                     </div>
//                     <div className="flex justify-between mt-3 text-sm text-gray-600">
//                       <span>Sold : 50 items</span>
//                       <span>Available : 20 items</span>
//                     </div>
//                   </div>

//                   {/* Add to Cart Button */}
//                   <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 text-xl transition shadow-lg">
//                     <ShoppingCart className="w-7 h-7" />
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT: Product Grid */}
//             <div className="lg:col-span-3">
//               {/* Mobile Title */}
//               <div className="lg:hidden text-center mb-8">
//                 <h3 className="text-4xl font-bold text-orange-600">
//                   Snacks & Chips
//                 </h3>
//                 <p className="text-xl text-gray-600">245 Products Available</p>
//               </div>

//               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
//                 {products.map((product) => (
//                   <div
//                     key={product.id}
//                     className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
//                   >
//                     <div className="relative h-56">
//                       <Image
//                         src={`https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=600&fit=crop&seed=${product.id}`}
//                         alt={product.name}
//                         fill
//                         className="object-cover group-hover:scale-110 transition-transform duration-300"
//                       />
//                       <div className="absolute top-3 left-3 bg-red-600 text-white font-bold px-3 py-1.5 rounded-full text-sm">
//                         Save ৳{product.save}
//                       </div>
//                     </div>

//                     <div className="p-5">
//                       <h4 className="font-medium text-gray-800 line-clamp-2 text-sm">
//                         {product.name}
//                       </h4>
//                       <div className="mt-3 flex items-center gap-2">
//                         <span className="text-2xl font-bold text-orange-600">
//                           ৳{product.price}
//                         </span>
//                         <span className="text-sm line-through text-gray-500">
//                           ৳{product.oldPrice}
//                         </span>
//                       </div>
//                       <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl text-sm transition">
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Clear space after sticky ends */}
//         <div className="h-32 lg:h-20" />
//       </div>
//     </section>
//   );
// };

// export default CategoryProduct;

// components/CategoryProduct.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

const CategoryProduct = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 2, m: 18, s: 39 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else if (m > 0) {
          m--;
          s = 59;
        } else if (h > 0) {
          h--;
          m = 59;
          s = 59;
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: "Lay's Classic Salted Chips",
      price: 60,
      oldPrice: 85,
      save: 25,
    },
    { id: 2, name: "Pringles Original", price: 320, oldPrice: 420, save: 100 },
    { id: 3, name: "KurKure Masala Munch", price: 20, oldPrice: 30, save: 10 },
    {
      id: 4,
      name: "Bombay Sweets Chanachur",
      price: 95,
      oldPrice: 130,
      save: 35,
    },
    { id: 5, name: "Potato Crackers", price: 45, oldPrice: 70, save: 25 },
    {
      id: 6,
      name: "Meridian Nachos Cheese",
      price: 110,
      oldPrice: 150,
      save: 40,
    },
    {
      id: 7,
      name: "Sun Chips Multigrain",
      price: 180,
      oldPrice: 250,
      save: 70,
    },
    { id: 8, name: "Mr. Twist Potato", price: 35, oldPrice: 50, save: 15 },
    { id: 9, name: "Cheese Balls", price: 55, oldPrice: 80, save: 25 },
    {
      id: 10,
      name: "FUJIYA Caramel Popcorn",
      price: 120,
      oldPrice: 160,
      save: 40,
    },
    {
      id: 11,
      name: "Doritos Nacho Cheese",
      price: 140,
      oldPrice: 190,
      save: 50,
    },
    {
      id: 12,
      name: "All Time Potato Chips",
      price: 40,
      oldPrice: 60,
      save: 20,
    },
    { id: 13, name: "Bikaji Bhujia", price: 130, oldPrice: 180, save: 50 },
    {
      id: 14,
      name: "Haldiram's Aloo Bhujia",
      price: 150,
      oldPrice: 200,
      save: 50,
    },
    { id: 15, name: "Cheetos Crunchy", price: 70, oldPrice: 100, save: 30 },
    { id: 16, name: "Taka Tak Spicy", price: 25, oldPrice: 40, save: 15 },
    {
      id: 17,
      name: "Ruffles Cheddar & Sour Cream",
      price: 190,
      oldPrice: 260,
      save: 70,
    },
    {
      id: 18,
      name: "Pop Secret Butter Popcorn",
      price: 210,
      oldPrice: 280,
      save: 70,
    },
    { id: 19, name: "Jhal Muri Mix", price: 50, oldPrice: 75, save: 25 },
    {
      id: 20,
      name: "Bengal Spice Mixture",
      price: 80,
      oldPrice: 110,
      save: 30,
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT CARD: 33% - Sticky + Beautiful Colors */}
          <div className="lg:sticky lg:top-6 h-fit">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300">
              {/* Primary Header */}
              <div className="bg-gradient-to-r from-primary to-primary/90 text-white text-center py-4">
                <h3 className="text-lg font-bold tracking-wide">
                  ড্রাই ফ্রুটস
                </h3>
                <p className="text-xs opacity-90 mt-1">Dry Fruits & Nuts</p>
              </div>

              {/* Image Section */}
              <div className="relative h-64 bg-gradient-to-b from-primary/5 to-transparent -mt-8 px-6">
                <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="https://images.news18.com/static-bengali/uploads/2024/03/Dry-Fruits-Health-Benefits-2024-03-c3f9266ceadc019e64953835e5565086.jpg"
                    alt="ড্রাই ফ্রুটস"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* Premium Overlay Badge */}
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                    Premium Quality
                  </div>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="px-6 pb-6 pt-4 bg-white">
                {/* Total Products */}
                <div className="flex items-center justify-between mb-5">
                  <div className="text-left">
                    <p className="text-sm text-gray-600">মোট পণ্য</p>
                    <p className="text-3xl font-bold text-primary">৫০+</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Total Products</p>
                    <p className="text-lg font-semibold text-gray-800">
                      50+ Items
                    </p>
                  </div>
                </div>

                {/* Smart Bottom Button */}
                <Button
                  variant="outline"
                  className="w-full h-14 rounded-xl border-2 border-primary bg-primary/5 hover:bg-primary hover:text-white text-primary font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <span className="flex items-center justify-center gap-3">
                    <span>সব পণ্য দেখুন</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <span className="text-xs block mt-1 opacity-80">
                    View All Products
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT: 66% - Product Grid */}
          <div className="lg:col-span-2">
            {/* Mobile Header */}
            <div className="lg:hidden text-center mb-10 bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-4xl font-bold text-orange-600">
                Snacks & Chips
              </h3>
              <p className="text-xl text-gray-700 mt-2 font-medium">
                245 Products Available
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-[5px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/30"
                >
                  {/* Offer Badge - Unique Circular Design */}
                  <div className="absolute top-4 left-4 z-10">
                    {/* <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 rounded-full blur-xl opacity-70 scale-150 animate-pulse"></div>
                      <div className="relative bg-white p-1 rounded-full shadow-2xl">
                        <div className="bg-gradient-to-br from-red-500 to-pink-600 text-white font-black text-xs px-4 py-2 rounded-full flex items-center gap-1 shadow-lg">
                          <span className="text-lg">Save</span>
                          <span className="text-sm">৳{product.save}</span>
                        </div>
                      </div>
                    </div> */}
                  </div>

                  {/* Wishlist - Floating Heart */}
                  <button className="absolute top-4 right-4 z-10 w-11 h-11 bg-white/95 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all hover:bg-red-50">
                    <Heart className="w-5 h-5 text-gray-600  group-hover:text-red-500 transition-all" />
                  </button>

                  {/* Image */}
                  <div className="relative h-52 bg-gradient-to-b from-gray-50 to-white">
                    <Image
                      src={`https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=600&fit=crop&seed=${product.id}`}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-4">
                    {/* Title */}
                    <h3 className="font-semibold text-gray-800 line-clamp-2 text-sm leading-tight group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    {/* Price + Discount % */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-primary">
                          ৳{product.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ৳{product.oldPrice}
                        </span>
                      </div>
                      <div className="bg-emerald-50 text-emerald-600 font-bold text-xs px-3 py-1.5 rounded-full">
                        {Math.round(
                          ((product.oldPrice - product.price) /
                            product.oldPrice) *
                            100
                        )}
                        % OFF
                      </div>
                    </div>

                    {/* Modern shadcn Button - Unique & Standout */}
                    <Button
                      className="w-full h-10 rounded-[5px] bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group/button"
                      size="lg"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2 group-hover/button:translate-x-1 transition-transform" />
                      <span className="tracking-wide text-sm">Add to Cart</span>
                     
                    </Button>
                  </div>

                  {/* Bottom Glow Effect on Hover */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-32" />
      </div>
    </section>
  );
};

export default CategoryProduct;
