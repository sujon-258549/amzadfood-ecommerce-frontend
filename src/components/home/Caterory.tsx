"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../Styles/category.css";
import Link from "next/link";
import Image from "next/image";

// Amzad Food Categories
const categories = [
  {
    id: 1,
    name: "Fresh Meat",
    bengaliName: "তাজা মাংস",
    image: "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
    slug: "fresh-meat",
  },
  {
    id: 2,
    name: "Dry Fruits",
    bengaliName: "ড্রাই ফ্রুটস",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop",
    slug: "dry-fruits",
  },
  {
    id: 3,
    name: "Seafood",
    bengaliName: "সীফুড",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
    slug: "seafood",
  },
  {
    id: 4,
    name: "Vegetables",
    bengaliName: "শাকসবজি",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop",
    slug: "vegetables",
  },
  {
    id: 5,
    name: "Fruits",
    bengaliName: "ফল",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=400&fit=crop",
    slug: "fruits",
  },
  {
    id: 6,
    name: "Spices",
    bengaliName: "মসলা",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
    slug: "spices",
  },
  {
    id: 7,
    name: "Rice & Grains",
    bengaliName: "চাল ও শস্য",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
    slug: "rice-grains",
  },
  {
    id: 8,
    name: "Dairy Products",
    bengaliName: "দুগ্ধজাত পণ্য",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop",
    slug: "dairy",
  },
  {
    id: 9,
    name: "Honey & Nuts",
    bengaliName: "মধু ও বাদাম",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    slug: "honey-nuts",
  },
  {
    id: 10,
    name: "Organic Food",
    bengaliName: "অর্গানিক খাবার",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop",
    slug: "organic",
  },
  {
    id: 11,
    name: "Frozen Food",
    bengaliName: "হিমায়িত খাবার",
    image: "https://images.unsplash.com/photo-1609501676725-7186f3a1f24f?w=400&h=400&fit=crop",
    slug: "frozen",
  },
  {
    id: 12,
    name: "Beverages",
    bengaliName: "পানীয়",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=400&fit=crop",
    slug: "beverages",
  },
  {
    id: 13,
    name: "Snacks",
    bengaliName: "স্ন্যাকস",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=400&fit=crop",
    slug: "snacks",
  },
  {
    id: 14,
    name: "Bakery",
    bengaliName: "বেকারি",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop",
    slug: "bakery",
  },
  {
    id: 15,
    name: "Cooking Oil",
    bengaliName: "রান্নার তেল",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
    slug: "cooking-oil",
  },
  {
    id: 16,
    name: "Pulses",
    bengaliName: "ডাল",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
    slug: "pulses",
  },
];

const Category = () => {
  return (
    <div className="mt-6 category bg-white py-6">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Navigation,Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          spaceBetween={12}
          freeMode={true}
          className="relative"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id} className="!w-[100px]">
              <Link href={`/category/${category.slug}`}>
                <div className="cursor-pointer">
                  {/* Flipkart-style Category - Fixed width, hot hover animation */}
                  <div className="flex flex-col items-center justify-center group">
                    {/* Image Container - Fixed width, full width image, hot hover effects */}
                    <div className="relative w-full aspect-square mb-2 bg-white rounded-lg overflow-hidden border border-gray-100 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:-translate-y-1 transition-all duration-300 ease-out">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover rounded-[5px] w-full h-full group-hover:scale-110 transition-transform duration-300 ease-out"
                        sizes="100px"
                      />
                    </div>

                    {/* Category Name - Only Bengali name */}
                    <h3 className="text-center font-medium text-gray-700 text-xs line-clamp-2 leading-tight group-hover:text-primary transition-colors duration-300">
                      {category.bengaliName}
                    </h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;