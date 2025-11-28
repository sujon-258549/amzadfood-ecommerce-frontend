"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import ProductCard from "../cards/ProductCard";
import CategoryCard from "../cards/CategoryCard";

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
  ];

  return (
    <section className="mt-8 md:mt-16 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LEFT CARD: 33% - Sticky + Beautiful Colors */}
          <div className="lg:sticky lg:top-6 h-fit">
            <CategoryCard />
          </div>

          {/* RIGHT: 66% - Product Grid */}
          <div className="md:col-span-2">
            {/* Mobile Header */}
           

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
