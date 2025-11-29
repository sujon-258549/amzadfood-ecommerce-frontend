"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../ui/tooltip";
import { useState } from "react";
import CheckoutModal from "../modal/CheckoutModal";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image?: string;
  save?: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart logic here
    console.log("Added to cart:", product.id);
    // TODO: Implement actual add to cart functionality
  };

  const handleViewDetails = () => {
    // Navigate to product details page
    window.location.href = `/products/${product.id}`;
  };

  const handleOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Order logic here
    console.log("Order placed:", product.id);
    // TODO: Implement actual order functionality
  };

  return (
    <TooltipProvider>
      <div className="group relative bg-white rounded-[3px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/30 w-full">
        {/* Product Image - Clickable to view details */}
        <Link href={`/products/${product.id}`} className="block">
          <div className="relative w-full bg-white cursor-pointer h-[200px] max-[500px]:h-[140px]">
            <Image
              src={
                product.image ||
                `https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=600&fit=crop&seed=${product.id}`
              }
              alt={product.name}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            />
            {/* Top Left Logo */}
            <div className="absolute top-2 left-2 z-10">
              <Image
                src="/logo/small-logo.png"
                alt="Logo"
                width={25}
                height={25}
                className="object-contain"
              />
            </div>
          </div>
        </Link>

        {/* Action Bar - Grey bar with separate buttons (below image) */}
        <div className="bg-gray-100 h-11 sm:h-12 flex items-center justify-between px-3 sm:px-4 border-t border-gray-200">
          {/* Eye Icon Button - Quick View / View Details (Left) */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={`/products/${product.id}`} className="flex-shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 sm:h-10 sm:w-10 rounded-full hover:bg-gray-200 text-gray-600 hover:text-primary transition-all duration-200 touch-manipulation"
                  aria-label="View details"
                >
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top" className="text-xs">
              View Details
            </TooltipContent>
          </Tooltip>

          {/* Partition/Divider */}
          <div className="h-5 sm:h-6 w-px bg-gray-300 flex-shrink-0"></div>

          {/* Shopping Cart Icon Button - Add to Cart (Right) - No navigation */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleAddToCart}
                variant="ghost"
                size="icon"
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-full cursor-pointer hover:bg-primary hover:text-white text-gray-600 transition-all duration-200 touch-manipulation flex-shrink-0"
                aria-label="Add to cart"
              >
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top" className="text-xs">
              Add to Cart
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Product Info - Clickable to view details */}
        <Link href={`/products/${product.id}`} className="block">
          <div className="p-3 sm:p-4 space-y-2 sm:space-y-3 cursor-pointer">
            {/* Product Title */}
            <h3 className="font-medium text-gray-900 line-clamp-2 text-xs sm:text-sm leading-tight group-hover:text-primary transition-colors min-h-[2.5rem] sm:min-h-[2.75rem]">
              {product.name}
            </h3>

            {/* Price Section */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-lg sm:text-xl font-bold text-primary">
                ৳{product.price.toLocaleString()}
              </span>
              <span className="text-xs sm:text-sm text-gray-500 line-through">
                ৳{product.oldPrice.toLocaleString()}
              </span>
            </div>
          </div>
        </Link>

        {/* Order Button */}
        <div className="px-3 sm:px-4 pb-3 sm:pb-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => setOpen(true)}
                className="w-full cursor-pointer bg-primary hover:bg-primary/90 text-white font-medium py-2 text-xs sm:text-sm rounded-[3px] transition-all duration-200"
              >
                Order Now
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top" className="text-xs">
              Place Order
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <CheckoutModal
        open={open}
        onOpenChange={setOpen}
        orderItems={[
          {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image,
          },
        ]}
      />
    </TooltipProvider>
  );
};

export default ProductCard;
