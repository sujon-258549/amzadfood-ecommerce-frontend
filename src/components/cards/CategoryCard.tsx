"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { ArrowRight, Package } from "lucide-react";

interface CategoryCardProps {
  bengaliName: string;
  englishName: string;
  image: string;
  totalProducts: string;
  categoryLink: string;
}

const CategoryCard = ({
  bengaliName,
  englishName,
  image,
  totalProducts,
  categoryLink,
}: CategoryCardProps) => {
  return (
    <div className="bg-white  overflow-hidden border border-gray-200 rounded-lg transition-all duration-300 hover:border-primary/50">
      {/* Primary Header */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white text-center py-3 sm:py-4">
        <h3 className="text-base sm:text-lg font-bold tracking-wide">{bengaliName}</h3>
        <p className="text-xs sm:text-sm opacity-90 mt-1">{englishName}</p>
      </div>

      {/* Image Section */}
      <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-b from-primary/5 to-transparent -mt-6 sm:-mt-8 px-4 sm:px-6">
        <div className="relative h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border-2 sm:border-4 border-primary group">
          <Image
            src={image}
            alt={bengaliName}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
          {/* Premium Overlay Badge */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-emerald-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold shadow-lg">
            Premium Quality
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4 bg-white">
        {/* Total Products */}
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="text-left">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">মোট পণ্য</p>
            <p className="text-lg sm:text-xl font-bold text-primary">{totalProducts}</p>
          </div>
          <div className="text-right">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Products</p>
            <p className="text-base sm:text-lg font-semibold text-gray-800">{totalProducts}</p>
          </div>
        </div>

        {/* View All Button */}
        <Link href={categoryLink} className="block">
          <Button
            variant="outline"
            className="w-full h-11 sm:h-12 rounded-lg border-2 border-primary bg-primary/5 hover:bg-primary hover:text-white text-primary font-semibold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            <span className="flex items-center justify-center gap-2 sm:gap-3">
              <Package className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>সব পণ্য দেখুন</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;