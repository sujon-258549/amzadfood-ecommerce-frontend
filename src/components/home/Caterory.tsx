"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../Styles/category.css";
import Link from "next/link";
import Image from "next/image";

// Amzad Food Categories
interface Category {
  id: number;
  name: string;
  bengaliName: string;
  image: string;
  slug: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Mango",
    bengaliName: "আম",
    image: "/category/mango.png",
    slug: "mango",
  },
  {
    id: 3,
    name: "Date Jaggery",
    bengaliName: "খেজুর গুড়",
    image: "/category/kajurgur.png",
    slug: "date-jaggery",
  },

  {
    id: 5,
    name: "Ghee",
    bengaliName: "ঘি",
    image: "/category/ghey.png",
    slug: "ghee",
  },
  {
    id: 6,
    name: "Dessert Item",
    bengaliName: "ডেজার্ট আইটেম",
    image: "/category/moja.png",
    slug: "dessert-item",
  },
  {
    id: 7,
    name: "Dry Foods",
    bengaliName: "ড্রাই ফুডস",
    image: "/category/nutsSeeds.png",
    slug: "dry-foods",
  },
  {
    id: 8,
    name: "Oil Ghee Spices",
    bengaliName: "তেল, ঘি, মসলা",
    image: "/category/mosla2.png",
    slug: "oil-ghee-spices",
  },
  {
    id: 9,
    name: "Daily Necessities",
    bengaliName: "নিত্য প্রয়োজনীয়",
    image: "/category/solt2.png",
    slug: "daily-necessities",
  },
  {
    id: 10,
    name: "Popular",
    bengaliName: "পপুলার",
    image: "/category/mango.png",
    slug: "popular",
  },
  {
    id: 11,
    name: "Herbal Item",
    bengaliName: "ভেষজ আইটেম",
    image: "/category/seed.png",
    slug: "herbal-item",
  },
  {
    id: 12,
    name: "Honey",
    bengaliName: "মধু",
    image: "/category/haney2.png",
    slug: "honey",
  },
  {
    id: 13,
    name: "Regular",
    bengaliName: "রেগুলার",
    image: "/category/rice2.png",
    slug: "regular",
  },
  {
    id: 14,
    name: "Seasonal",
    bengaliName: "সিজনাল",
    image: "/category/mango.png",
    slug: "seasonal",
  },
  {
    id: 15,
    name: "Seeds",
    bengaliName: "সিডস",
    image: "/category/seed.png",
    slug: "seeds",
  },
  {
    id: 16,
    name: "Vermicelli",
    bengaliName: "সেমাই",
    image: "/category/semai.png",
    slug: "vermicelli",
  },
];

const Category = () => {
  return (
    <div className="category -mt-2 bg-white py-6">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          spaceBetween={16}
          freeMode={true}
          className="relative"
          breakpoints={{
            640: {
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 24,
            },
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id} className="!w-[110px] md:!w-[120px]">
              <div className="flex flex-col items-center justify-center">
                <Link 
                  href={`/category/${category.slug}`}
                  className="flex flex-col items-center justify-center cursor-pointer w-full"
                >
                  <div className="relative w-full aspect-square mb-3 bg-white rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex justify-center items-center p-2">
                      <Image
                        src={category.image}
                        alt={category.bengaliName}
                        width={80}
                        height={80}
                        className="object-contain max-w-[80px] max-h-[80px] w-auto h-auto"
                        sizes="(max-width: 640px) 60px, (max-width: 1024px) 80px, 80px"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-center font-medium text-gray-700 text-xs md:text-sm line-clamp-2 leading-tight min-h-[1rem] flex items-center justify-center">
                    {category.bengaliName}
                  </h3>
                </Link>
                
               
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;