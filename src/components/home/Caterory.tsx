"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../Styles/category.css";

// Mock category data
const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=150",
  },
  {
    id: 2,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=150",
  },
  {
    id: 3,
    name: "Home & Garden",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150",
  },
  {
    id: 4,
    name: "Sports",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150",
  },
  {
    id: 5,
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150",
  },
  {
    id: 6,
    name: "Toys",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=150",
  },
  {
    id: 7,
    name: "Books",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150",
  },
  {
    id: 8,
    name: "Food",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=150",
  },
  {
    id: 9,
    name: "Health",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=150",
  },
  {
    id: 10,
    name: "Automotive",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=150",
  },
  {
    id: 11,
    name: "Art & Crafts",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=150",
  },
  {
    id: 12,
    name: "Music",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=150",
  },
  {
    id: 13,
    name: "Pets",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=150",
  },
  {
    id: 14,
    name: "Travel",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=150",
  },
  {
    id: 15,
    name: "Jewelry",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=150",
  },
  {
    id: 16,
    name: "Fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=150",
  },
  {
    id: 17,
    name: "Baby",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
  },
  {
    id: 18,
    name: "Office",
    image: "https://images.unsplash.com/photo-1587334894137-85bde0b9b7e6?w=150",
  },
  {
    id: 19,
    name: "Gaming",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=150",
  },
  {
    id: 20,
    name: "Outdoor",
    image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?w=150",
  },
];

const Category = () => {
  return (
    <div className="mt-6 category">
      <div className="container mx-auto">
        <div className="px-2">
          <Swiper
            modules={[Navigation]}
            slidesPerView={2}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              380: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 6,
              },
              1024: {
                slidesPerView: 8,
              },
              1280: {
                slidesPerView: 9,
              },
            }}
            className="relative"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <div className="cursor-pointer py-2">
                  {/* Unique Category Card - No shadow, no border */}
                  <div className="relative group">
                    {/* Image Container with Gradient Background */}
                    <div className="relative mb-3">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-1">
                        <div className="w-full h-full rounded-full bg-white overflow-hidden">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Category Name - Clean Typography */}
                    <h3 className="text-center font-semibold text-gray-800 text-xs line-clamp-1 leading-tight transition-colors duration-200 group-hover:text-primary">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Category;