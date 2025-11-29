"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

// Data
const topBanner = { image: "/banner/b3.png", link: "/category/fresh-meat" };

const productBannerImages = [
  { id: 1, image: "/banner/b2.png", link: "/category/frozen" },
  { id: 2, image: "https://t4.ftcdn.net/jpg/02/94/31/17/360_F_294311778_E2GAzN0sX0tTBMbny6kf7xULQiipLrgP.jpg", link: "/category/fresh-meat" },
  { id: 3, image: "https://cdn.pixelbin.io/v2/central_imaging/original/Aplusimaging/Batch_1_Rework_3_5_23/594194043/Module_3.jpeg", link: "/category/dry-fruits" },
];

const appBannerImages = [
  { id: 1, image: "/banner/b4.png", link: "/offers" },
  // Add more later if needed
];

const mobileHeroImages = productBannerImages;

const HeroSection = () => {
  return (
    <section className="bg-white py-4 md:py-6">
      <div className="container">
        {/* ==================== MOBILE ONLY ==================== */}
        <div className="block md:hidden">
          <div className="relative h-[190px] overflow-hidden shadow-lg">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              loop={true}
              speed={800}
              className="h-full"
            >
              {mobileHeroImages.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link href={item.link}>
                    <Image
                      src={item.image}
                      alt="Hero Banner"
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* ==================== TABLET & DESKTOP - SAME LAYOUT ==================== */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          {/* LEFT SIDE - 2 columns */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {/* Top Static Banner */}
            <Link href={topBanner.link} className="block">
              <div className="relative h-[230px] lg:h-[270px]  overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <Image
                  src={topBanner.image}
                  alt="Main Banner"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>
            </Link>

            {/* Bottom Product Slider */}
            <div className="relative h-[230px] lg:h-[270px] overflow-hidden shadow-lg">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true, dynamicBullets: true }}
                loop={true}
                speed={800}
                className="h-full"
              >
                {productBannerImages.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Link href={item.link}>
                      <Image
                        src={item.image}
                        alt="Category Banner"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        priority={item.id <= 2}
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* RIGHT SIDE - 1 column - object-inherit as you requested */}
          <div className="md:col-span-1">
            <div className="relative h-[480px] lg:h-[557px] overflow-hidden shadow-lg">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true, dynamicBullets: true }}
                loop={true}
                speed={800}
                className="h-full"
              >
                {appBannerImages.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Link href={item.link}>
                      <Image
                        src={item.image}
                        alt="App / Offer Banner"
                        fill
                        className="object-inherit object-center"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        priority
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Green Pagination Bullets */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #019532 !important;
          opacity: 0.5;
          width: 9px;
          height: 5px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 26px;
          border-radius: 8px;
          background: #019532 !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;