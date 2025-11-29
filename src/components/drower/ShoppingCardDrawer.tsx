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
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";

const ShoppingCardDrawer = () => {
  const cartItems = [
    {
      id: 1,
      name: "Fresh Chicken Breast",
      price: 650,
      quantity: 2,
      image:
        "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
    },
    {
      id: 2,
      name: "Beef Ribeye Steak",
      price: 1200,
      quantity: 1,
      image:
        "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
    },
    {
      id: 3,
      name: "Organic Salmon Fillet",
      price: 850,
      quantity: 3,
      image:
        "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <TooltipProvider>
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <button className="relative p-2.5 cursor-pointer rounded-full hover:bg-gray-100 transition-all duration-200 group">
            <IoCartOutline className="w-6 h-6 text-gray-700 group-hover:text-primary transition-colors" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-primary to-primary/80 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg">
              {totalItems}
            </span>
          </button>
        </DrawerTrigger>

        <DrawerContent className="h-full rounded-none border-l sm:max-w-sm">
          <DrawerHeader className="border-b bg-gradient-to-r from-primary/10 to-primary/5 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4 text-primary" />
                <DrawerTitle className="text-lg font-bold text-gray-800">
                  My Cart ({cartItems.length})
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
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                <ShoppingCart className="mx-auto h-16 w-16 text-gray-300 mb-3" />
                <p className="text-base font-medium mb-1">Your cart is empty</p>
                <p className="text-xs text-gray-400">
                  Start adding items to your cart!
                </p>
                <Link href="/products">
                  <Button className="mt-4 bg-primary hover:bg-primary/90 text-sm">
                    Browse Products
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-2">
                {cartItems.map((item) => (
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
                    </div>

                    {/* Title, Price and Quantity - Compact */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-xs text-gray-800 truncate">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <p className="text-sm font-bold text-primary">
                          ৳{item.price.toLocaleString()}
                        </p>
                        <span className="text-xs text-gray-500">
                          × {item.quantity}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-gray-600 mt-0.5">
                        ৳{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity Controls and Remove - Inline with Tooltips */}
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <div className="flex items-center gap-1 border border-gray-300 rounded-[5px]">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 rounded-[5px] hover:bg-gray-100"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="text-xs">
                            Decrease Quantity
                          </TooltipContent>
                        </Tooltip>
                        <span className="text-xs font-semibold min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 rounded-[5px] hover:bg-gray-100"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="text-xs">
                            Increase Quantity
                          </TooltipContent>
                        </Tooltip>
                      </div>
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
                          Remove from Cart
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Modern Design */}
          {cartItems.length > 0 && (
            <div className="border-t bg-gradient-to-r from-gray-50 to-white p-3 sm:p-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                <span>Total Items</span>
                <span className="font-semibold">{totalItems}</span>
              </div>
              <div className="flex items-center justify-between text-sm font-semibold text-gray-800 mb-2">
                <span>Subtotal</span>
                <span className="text-lg font-bold text-primary">
                  ৳{total.toLocaleString()}
                </span>
              </div>
              <Button className="w-full h-10 rounded-[5px] bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group/button">
                <ShoppingCart className="w-4 h-4 mr-2 group-hover/button:translate-x-1 transition-transform" />
                <span className="tracking-wide">Proceed to Checkout</span>
              </Button>
              <Link href="/cart">
                <Button
                  variant="outline"
                  className="w-full h-9 border-primary text-primary hover:bg-primary hover:text-white text-sm rounded-[5px]"
                >
                  View Full Cart
                </Button>
              </Link>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </TooltipProvider>
  );
};

export default ShoppingCardDrawer;