import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  save?: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <div
        key={product.id}
        className="group border-[1.4px] border-primary relative bg-white rounded-[5px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/30"
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
                ((product.oldPrice - product.price) / product.oldPrice) * 100
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
    </div>
  );
};

export default ProductCard;
