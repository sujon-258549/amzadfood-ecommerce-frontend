// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { Heart, ShoppingCart } from "lucide-react";
// import ProductCard from "../cards/ProductCard";
// import CategoryCard from "../cards/CategoryCard";
// import { DividerDiamond } from "../devider/Devider";

// const CategoryProduct = () => {
//   const [timeLeft, setTimeLeft] = useState({ h: 2, m: 18, s: 39 });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         let { h, m, s } = prev;
//         if (s > 0) s--;
//         else if (m > 0) {
//           m--;
//           s = 59;
//         } else if (h > 0) {
//           h--;
//           m = 59;
//           s = 59;
//         }
//         return { h, m, s };
//       });
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const products = [
//     {
//       id: 1,
//       name: "প্রিমিয়াম হানি নাটস / Premium Honey Nuts",
//       price: 1390,
//       oldPrice: 1500,
//       save: 110,
//       image:
//         "https://amzadfood.com/wp-content/uploads/2024/04/Rosted-Honey-Nut-2-400x400.webp",
//     },
//     {
//       id: 2,
//       name: "ডেলি স্পাইস কম্বো প্যাক / Deli Spice Combo Pack",
//       price: 800,
//       oldPrice: 950,
//       save: 150,
//       image:
//         "https://amzadfood.com/wp-content/uploads/2025/05/1-kg-Combo-Pack-Website-A-400x400.webp",
//     },
//     {
//       id: 3,
//       name: "ড্রাই ফ্রুটস / Dry Fruits",
//       price: 1200,
//       oldPrice: 1400,
//       save: 200,
//       image:
//         "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
//     },
//     {
//       id: 4,
//       name: "সীফুড / Seafood",
//       price: 650,
//       oldPrice: 750,
//       save: 100,
//       image:
//         "https://amzadfood.com/wp-content/uploads/2025/03/%E0%A6%9A%E0%A6%BF%E0%A6%AF%E0%A6%BE%E0%A6%BC-%E0%A6%B8%E0%A6%BF%E0%A6%A1%E0%A6%B8-%E0%A6%B9%E0%A6%BE%E0%A6%A8%E0%A6%BF-%E0%A6%95%E0%A6%AE%E0%A7%8D%E0%A6%AC%E0%A7%8B-400x400.webp",
//     },
//     {
//       id: 6,
//       name: "মসলা / Spices",
//       price: 350,
//       oldPrice: 420,
//       save: 70,
//       image:
//         "https://amzadfood.com/wp-content/uploads/2025/05/1-kg-Combo-Pack-Website-A-400x400.webp",
//     },
//   ];

//   return (
//     <section className="mt-8 md:mt-16 ">
//       <div className="container mx-auto px-4">
//         <div className="mb-5 md:mb-10">
//           <DividerDiamond text="Popular" />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* LEFT CARD: 33% - Sticky + Beautiful Colors */}
//           <div className="lg:sticky lg:top-6 h-fit">
//             <CategoryCard />
//           </div>

//           {/* RIGHT: 66% - Product Grid */}
//           <div className="md:col-span-2">
//             {/* Mobile Header */}

//             <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
//               {products.map((product) => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CategoryProduct;

"use client";

import ProductCard from "../cards/ProductCard";
import CategoryCard from "../cards/CategoryCard";
import { DividerDiamond } from "../devider/Devider";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image?: string;
  save?: number;
}

interface CategoryInfo {
  bengaliName: string;
  englishName: string;
  image: string;
  totalProducts: string;
  categoryLink: string;
}

interface CategoryProductProps {
  dividerText: string;
  categoryInfo: CategoryInfo;
  products: Product[];
  showCategoryCard?: boolean;
}

const CategoryProduct = ({
  dividerText,
  categoryInfo,
  products,
  showCategoryCard = true,
}: CategoryProductProps) => {
  return (
    <section className="mt-8 md:mt-16">
      <div className="container mx-auto px-4">
        {/* Text Divider */}
        <div className="mb-5 md:mb-10 -mt-2 md:-mt-5">
          <DividerDiamond text={dividerText} />
        </div>

        {/* Category and Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LEFT: Category Card (33% width) */}
          {showCategoryCard && (
            <div className="lg:sticky lg:top-6 h-fit">
              <CategoryCard
                bengaliName={categoryInfo.bengaliName}
                englishName={categoryInfo.englishName}
                image={categoryInfo.image}
                totalProducts={categoryInfo.totalProducts}
                categoryLink={categoryInfo.categoryLink}
              />
            </div>
          )}

          {/* RIGHT: Product Grid (66% width if category card shown, 100% if not) */}
          <div className={showCategoryCard ? "md:col-span-2" : "md:col-span-3"}>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryProduct;
