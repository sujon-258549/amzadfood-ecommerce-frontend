"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Heart,
  X,
  ShoppingCart,
  Trash2,
  Menu,
  ChevronRight,
  Home,
  Package,
  FolderTree,
  Info,
  Phone,
  User,
  Fish,
  Carrot,
  Apple,
  Flame,
  Wheat,
  Milk,
  Nut,
  Leaf,
  Snowflake,
  Coffee,
  Popcorn,
  Cookie,
  Droplet,
  Bean,
} from "lucide-react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

const MenuOrCategoryDrower = () => {
  const [open, setOpen] = useState(false);

  // Menu Items
  const menuItems = [
    { id: 1, name: "Home", href: "/", icon: Home },
    { id: 2, name: "Products", href: "/products", icon: Package },
    { id: 4, name: "About Us", href: "/about", icon: Info },
    { id: 5, name: "Contact", href: "/contact", icon: Phone },
    { id: 6, name: "My Account", href: "/account", icon: User },
  ];

  // Amzad Food Categories
  const categories = [
    {
      id: 1,
      name: "Fresh Meat",
      bengaliName: "তাজা মাংস",
      href: "/category/fresh-meat",
      icon: Package,
    },
    {
      id: 2,
      name: "Dry Fruits",
      bengaliName: "ড্রাই ফ্রুটস",
      href: "/category/dry-fruits",
      icon: Nut,
    },
    {
      id: 3,
      name: "Seafood",
      bengaliName: "সীফুড",
      href: "/category/seafood",
      icon: Fish,
    },
    {
      id: 4,
      name: "Vegetables",
      bengaliName: "শাকসবজি",
      href: "/category/vegetables",
      icon: Carrot,
    },
    {
      id: 5,
      name: "Fruits",
      bengaliName: "ফল",
      href: "/category/fruits",
      icon: Apple,
    },
    {
      id: 6,
      name: "Spices",
      bengaliName: "মসলা",
      href: "/category/spices",
      icon: Flame,
    },
    {
      id: 7,
      name: "Rice & Grains",
      bengaliName: "চাল ও শস্য",
      href: "/category/rice-grains",
      icon: Wheat,
    },
    {
      id: 8,
      name: "Dairy Products",
      bengaliName: "দুগ্ধজাত পণ্য",
      href: "/category/dairy",
      icon: Milk,
    },
    {
      id: 9,
      name: "Honey & Nuts",
      bengaliName: "মধু ও বাদাম",
      href: "/category/honey-nuts",
      icon: Nut,
    },
    {
      id: 10,
      name: "Organic Food",
      bengaliName: "অর্গানিক খাবার",
      href: "/category/organic",
      icon: Leaf,
    },
    {
      id: 11,
      name: "Frozen Food",
      bengaliName: "হিমায়িত খাবার",
      href: "/category/frozen",
      icon: Snowflake,
    },
    {
      id: 12,
      name: "Beverages",
      bengaliName: "পানীয়",
      href: "/category/beverages",
      icon: Coffee,
    },
    {
      id: 13,
      name: "Snacks",
      bengaliName: "স্ন্যাকস",
      href: "/category/snacks",
      icon: Popcorn,
    },
    {
      id: 14,
      name: "Bakery",
      bengaliName: "বেকারি",
      href: "/category/bakery",
      icon: Cookie,
    },
    {
      id: 15,
      name: "Cooking Oil",
      bengaliName: "রান্নার তেল",
      href: "/category/cooking-oil",
      icon: Droplet,
    },
    {
      id: 16,
      name: "Pulses",
      bengaliName: "ডাল",
      href: "/category/pulses",
      icon: Bean,
    },
  ];


  return (
    <TooltipProvider>
      <Drawer direction="left" open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <button className="relative p-2.5 cursor-pointer rounded-full hover:bg-gray-100 transition-all duration-200 group">
            <Menu className="w-6 h-6 text-gray-700 group-hover:text-red-500 transition-colors" />
          
          </button>
        </DrawerTrigger>

        <DrawerContent className="h-full rounded-none border-r sm:max-w-sm">
          <DrawerHeader className="border-b bg-white py-3">
            <div className="flex items-center justify-between">
              <DrawerTitle className="text-lg font-bold text-gray-800">
                Menu & Categories
              </DrawerTitle>
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

          {/* Tabs */}
          <div className="border-b bg-white">
            <Tabs defaultValue="menu" className="w-full">
              <TabsList className="w-full grid grid-cols-2 rounded-none h-10 bg-gray-100 p-1 gap-1">
                <TabsTrigger
                  value="menu"
                  className="rounded-lg h-full font-medium text-sm transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200 data-[state=inactive]:hover:text-gray-900"
                >
                  Menu
                </TabsTrigger>
                <TabsTrigger
                  value="category"
                  className="rounded-lg h-full font-medium text-sm transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200 data-[state=inactive]:hover:text-gray-900"
                >
                  Category
                </TabsTrigger>
              </TabsList>

              {/* Menu Tab Content */}
              <TabsContent value="menu" className="m-0 p-0 flex flex-col h-full">
                <div className="flex-1 overflow-y-auto p-3 sm:p-4 max-h-[calc(100vh-180px)]">
                  <div className="space-y-1">
                    {menuItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <DrawerClose asChild key={item.id}>
                          <Link
                            href={item.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors group"
                          >
                            <div className="flex items-center gap-3">
                              <IconComponent className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
                              <span className="text-sm sm:text-base font-medium text-gray-800">
                                {item.name}
                              </span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                          </Link>
                        </DrawerClose>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>

              {/* Category Tab Content */}
              <TabsContent value="category" className="m-0 p-0 flex flex-col h-full">
                <div className="flex-1 overflow-y-auto p-3 sm:p-4 max-h-[calc(100vh-180px)]">
                  <div className="space-y-1">
                    {categories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <DrawerClose asChild key={category.id}>
                          <Link
                            href={category.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors group"
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <IconComponent className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors flex-shrink-0" />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm sm:text-base font-medium text-gray-800 truncate">
                                  {category.name}
                                </p>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
                          </Link>
                        </DrawerClose>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

     

        </DrawerContent>
      </Drawer>
    </TooltipProvider>
  );
};

export default MenuOrCategoryDrower;