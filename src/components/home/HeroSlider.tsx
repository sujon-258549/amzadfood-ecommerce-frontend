"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

export default function FoodBannerCarousel() {
  return (
    <div className="w-full h-[200px] md:h-[300px] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        className="h-full w-full"
      >
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600&h=600&fit=crop"
            alt="Pizza"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1562967914-608f82629710?w=1600&h=600&fit=crop"
            alt="Fried Chicken"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1600&h=600&fit=crop"
            alt="Healthy Bowl"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      
      
      </Swiper>
    </div>
  );
}