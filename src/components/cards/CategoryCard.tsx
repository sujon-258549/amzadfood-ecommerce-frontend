import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const CategoryCard = () => {
  return (
    <div>
      {" "}
      <div className="bg-white  shadow-2xl overflow-hidden border-2 rounded-[5px] border-primary transition-all duration-300">
        {/* Primary Header */}
        <div className="bg-gradient-to-r from-primary to-primary/90 text-white text-center py-4">
          <h3 className="text-lg font-bold tracking-wide">ড্রাই ফ্রুটস</h3>
          <p className="text-xs opacity-90 mt-1">Dry Fruits & Nuts</p>
        </div>

        {/* Image Section */}
        <div className="relative h-64 bg-gradient-to-b from-primary/5 to-transparent -mt-8 px-6">
          <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-primary">
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
              <p className="text-xl font-bold text-primary">৫০+</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Total Products</p>
              <p className="text-lg font-semibold text-gray-800">50+ Items</p>
            </div>
          </div>

          {/* Smart Bottom Button */}
          <Button
            variant="outline"
            className="w-full h-10 rounded-[5px] border-2 border-primary bg-primary/5 hover:bg-primary hover:text-white text-primary font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span className="flex items-center justify-center gap-3">
              <span className="text-[14px]">সব পণ্য দেখুন</span>
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
  );
};

export default CategoryCard;
