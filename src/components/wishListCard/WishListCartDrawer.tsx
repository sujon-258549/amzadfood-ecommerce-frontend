"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Heart, X, ShoppingCart, Trash2 } from "lucide-react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

const WishListCartDrawer = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Fresh Chicken Breast",
      price: 650,
      image:
        "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
      inStock: true,
    },
    {
      id: 2,
      name: "Beef Ribeye Steak",
      price: 1200,
      image:
        "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
      inStock: true,
    },
    {
      id: 2,
      name: "Beef Ribeye Steak",
      price: 1200,
      image:
        "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
      inStock: true,
    },
    {
      id: 2,
      name: "Beef Ribeye Steak",
      price: 1200,
      image:
        "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
      inStock: true,
    },
    {
      id: 2,
      name: "Beef Ribeye Steak",
      price: 1200,
      image:
        "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
      inStock: true,
    },
    {
      id: 2,
      name: "Beef Ribeye Steak",
      price: 1200,
      image:
        "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
      inStock: true,
    },
    {
      id: 2,
      name: "Beef Ribeye Steak",
      price: 1200,
      image:
        "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
      inStock: true,
    },
    {
      id: 3,
      name: "Organic Salmon Fillet",
      price: 850,
      image:
        "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
      inStock: false,
    },
    {
      id: 4,
      name: "Premium Lamb Chops",
      price: 1500,
      image:
        "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
      inStock: true,
    },
  ];

  return (
    <TooltipProvider>
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <button className="relative p-2.5 cursor-pointer rounded-full hover:bg-gray-100 transition-all duration-200 group">
            <FaHeart className="w-6 h-6 text-gray-700 group-hover:text-red-500 transition-colors" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg">
              {wishlistItems.length}
            </span>
          </button>
        </DrawerTrigger>

        <DrawerContent className="h-full rounded-none border-l sm:max-w-sm">
          <DrawerHeader className="border-b bg-gradient-to-r from-red-50 to-pink-50 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                <DrawerTitle className="text-lg font-bold text-gray-800">
                  My Wishlist ({wishlistItems.length})
                </DrawerTitle>
              </div>
              <DrawerClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>

          <div className="flex-1 overflow-y-auto p-3 sm:p-4">
            {wishlistItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                <Heart className="mx-auto h-16 w-16 text-gray-300 mb-3" />
                <p className="text-base font-medium mb-1">
                  Your wishlist is empty
                </p>
                <p className="text-xs text-gray-400">
                  Start adding items you love!
                </p>
                <Link href="/products">
                  <Button className="mt-4 bg-primary hover:bg-primary/90 text-sm">
                    Browse Products
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-2">
                {wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="group flex items-center gap-2 bg-white border border-gray-200 p-2 rounded-lg hover:shadow-sm transition-all duration-200"
                  >
                    {/* Product Image - Small */}
                    <div className="relative w-12 h-12 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden border border-gray-200">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <ShoppingCart className="w-5 h-5" />
                        </div>
                      )}
                      {!item.inStock && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="text-[8px] text-white font-semibold bg-red-500 px-1 py-0.5 rounded">
                            Out
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Title and Price - Compact */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-xs text-gray-800 truncate">
                        {item.name}
                      </h4>
                      <p className="text-sm font-bold text-primary">
                        ৳{item.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Buttons - Inline with Tooltips */}
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-[5px] border-primary text-white bg-primary hover:bg-primary/90 hover:text-white"
                            disabled={!item.inStock}
                          >
                            <ShoppingCart className="h-3.5 w-3.5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="text-xs">
                          {item.inStock ? "Add to Cart" : "Out of Stock"}
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-[5px] border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="text-xs">
                          Remove from Wishlist
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Compact */}
          {wishlistItems.length > 0 && (
            <div className="border-t bg-gradient-to-r from-gray-50 to-white p-3 sm:p-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Total Items</span>
                <span className="font-semibold">{wishlistItems.length}</span>
              </div>
              <Button className="w-full h-10 rounded-[5px] bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group/button">
                <ShoppingCart className="w-4 h-4 mr-2 group-hover/button:translate-x-1 transition-transform" />
                <span className="tracking-wide">Add All to Cart</span>
              </Button>
              <Link href="/wishlist">
                <Button
                  variant="outline"
                  className="w-full h-9 border-primary text-primary hover:bg-primary hover:text-white text-sm rounded-[5px]"
                >
                  View Full Wishlist
                </Button>
              </Link>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </TooltipProvider>
  );
};

export default WishListCartDrawer;