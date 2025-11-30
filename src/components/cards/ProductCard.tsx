"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../ui/tooltip";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image?: string;
  save?: number;
  quantity?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Added to cart:", product.id);
    // TODO: Implement actual add to cart functionality
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/products/${product.id}`);
  };

  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <div className="rounded-[5px] font-sans shadow-md cursor-pointer h-[300px] flex flex-col">
        <div className="relative aspect-square w-full">
          <Image
            src={product.image || "https://via.placeholder.com/300x300.png?text=Product"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-full rounded-t-[5px] object-contain"
          />
          {/* Right Bottom Buttons */}
          <TooltipProvider>
            <div className="absolute right-2 bottom-2 flex flex-col gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={handleViewDetails}
                    className="w-8 h-8 border border-primary cursor-pointer bg-white/90 hover:bg-white rounded-full shadow-md"
                  >
                    <Eye className="w-4 h-4 text-primary text-gray-700" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>View Details</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="default"
                    size="icon-sm"
                    onClick={handleAddToCart}
                    className="w-8 h-8 cursor-pointer bg-primary hover:bg-primary/90 rounded-full shadow-md"
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Add to Cart</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>

        <div className="p-4 pt-3 flex-1 flex flex-col">
          <div className="flex gap-2 text-[14px] md:text-[16px] font-bold text-gray-900">
            <div>
              ৳{product.price.toLocaleString()}
            </div>
            <div>
             - ৳{(product.price + 100).toLocaleString()}
            </div>
          </div>

          <h3 className="mt-1 text-sm text-gray-900 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
          {/* {product.quantity && (
            <p className="mt-1 text-xs text-gray-500">{product.quantity}</p>
          )} */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;