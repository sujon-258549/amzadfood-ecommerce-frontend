"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "./PopularProduct.css";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../cards/ProductCard";

interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    image?: string;
    save?: number;
    quantity?: string;
    category?: string;
    inStock?: boolean;
}

// Fake product data
const POPULAR_PRODUCTS: Product[] = [

    {
        id: 1,
        name: "প্রিমিয়াম হানি নাটস / Premium Honey Nuts",
        price: 1390,
        oldPrice: 1500,
        save: 110,
        image: "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%B9%E0%A6%BE%E0%A6%A8%E0%A6%BF-%E0%A6%A8%E0%A6%BE%E0%A6%9F-1kg-247x247.webp",
    },
    {
        id: 2,
        name: "রোস্টেড হানি নাটস / Roasted Honey Nuts",
        price: 1200,
        oldPrice: 1350,
        save: 150,
        image: "https://amzadfood.com/wp-content/uploads/2024/04/Rosted-Honey-Nut-2-400x400.webp",
        inStock: true,
    },
    {
        id: 3,
        name: "খেজুর / Dates",
        price: 800,
        oldPrice: 950,
        save: 150,
        category: "পপুলার",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop",
        inStock: true,
    },
    {
        id: 4,
        name: "খেজুর গুড় / Date Palm Jaggery",
        price: 450,
        oldPrice: 550,
        save: 100,
        category: "নিত্য প্রয়োজনীয়",
        image: "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
        inStock: true,
    },
    {
        id: 5,
        name: "প্রাকৃতিক মধু / Natural Honey",
        price: 650,
        oldPrice: 750,
        save: 100,
        category: "পপুলার",
        image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop",
        inStock: true,
    },
    {
        id: 6,
        name: "বাসমতি চাল / Basmati Rice",
        price: 120,
        oldPrice: 140,
        save: 20,
        category: "নিত্য প্রয়োজনীয়",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
        inStock: true,
    },
    {
        id: 7,
        name: "তাজা দুধ / Fresh Milk",
        price: 80,
        oldPrice: 95,
        save: 15,
        category: "নিত্য প্রয়োজনীয়",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop",
        inStock: true,
    },
    {
        id: 8,
        name: "তাজা ডিম / Fresh Eggs",
        price: 150,
        oldPrice: 180,
        save: 30,
        category: "নিত্য প্রয়োজনীয়",
        image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop",
        inStock: true,
    },
    {
        id: 9,
        name: "তেল / Cooking Oil",
        price: 280,
        oldPrice: 320,
        save: 40,
        category: "নিত্য প্রয়োজনীয়",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
        inStock: true,
    },

    {
        id: 10,
        name: "সিঙ্গারা / Samosa",
        price: 250,
        oldPrice: 300,
        save: 50,
        category: "মজা",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop",
        inStock: true,
    },
    {
        id: 13,
        name: "স্প্রিং রোল / Spring Roll",
        price: 320,
        oldPrice: 380,
        save: 60,
        category: "মজা",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop",
        inStock: true,
    },
    {
        id: 14,
        name: "পারাঠা / Paratha",
        price: 180,
        oldPrice: 220,
        save: 40,
        category: "মজা",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop",
        inStock: true,
    },
    {
        id: 15,
        name: "সেমাই / Vermicelli",
        price: 120,
        oldPrice: 150,
        save: 30,
        category: "মজা",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=400&fit=crop",
        inStock: true,
    },


    {
        id: 21,
        name: "আম / Mango",
        price: 150,
        oldPrice: 180,
        save: 30,
        category: "সিজনাল",
        image: "https://amzadfood.com/wp-content/uploads/2024/05/1-400x400.jpg",
        inStock: true,
    },

    {
        id: 26,
        name: "বাদাম / Almonds",
        price: 1200,
        oldPrice: 1400,
        save: 200,
        category: "ড্রাই ফ্রুটস",
        image: "https://amzadfood.com/wp-content/uploads/2024/06/%E0%A6%95%E0%A6%BE%E0%A6%A0-%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%BE%E0%A6%AE-G.webp",
        inStock: true,
    },
    {
        id: 27,
        name: "কাজু / Cashews",
        price: 1500,
        oldPrice: 1800,
        save: 300,
        category: "ড্রাই ফ্রুটস",
        image: "https://amzadfood.com/wp-content/uploads/2024/06/%E0%A6%95%E0%A6%BE%E0%A6%9C%E0%A7%81-%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%BE%E0%A6%AE-G-400x400.webp",
        inStock: true,
    },
    {
        id: 28,
        name: "কিশমিশ / Raisins",
        price: 650,
        oldPrice: 750,
        save: 100,
        category: "ড্রাই ফ্রুটস",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop",
        inStock: true,
    },
    {
        id: 29,
        name: "আখরোট / Walnuts",
        price: 1100,
        oldPrice: 1300,
        save: 200,
        category: "ড্রাই ফ্রুটস",
        image: "https://amzadfood.com/wp-content/uploads/2025/09/Rosted-Nutri-Nut-Jar-with-Box-500-GRM-400x400.webp",
        inStock: true,
    },

];


const PopularProduct = () => {
    return (
        <section className="py-8 md:py-12">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* LEFT SIDE - Offer Image Card */}
                    <div className="lg:col-span-1">
                        <Link href="/offers" className="block h-full">
                            <div className="relative w-full h-full min-h-[600px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <Image
                                    src="/banner/b4.png"
                                    alt="Special Offer"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* RIGHT SIDE - Product Slider (2 rows: 4 columns x 2 rows, slide one card) */}
                    <div className="lg:col-span-2">
                        <Swiper
                            slidesPerView={4}
                            grid={{
                                rows: 2,
                                fill: 'row',
                            }}
                            spaceBetween={16}
                            slidesPerGroup={1}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Grid, Pagination]}
                            className="popular-product-swiper"
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 1,
                                    grid: {
                                        rows: 2,
                                        fill: 'row',
                                    },
                                    spaceBetween: 12,
                                },
                                640: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 1,
                                    grid: {
                                        rows: 2,
                                        fill: 'row',
                                    },
                                    spaceBetween: 12,
                                },
                                768: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 1,
                                    grid: {
                                        rows: 2,
                                        fill: 'row',
                                    },
                                    spaceBetween: 16,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 1,
                                    grid: {
                                        rows: 2,
                                        fill: 'row',
                                    },
                                    spaceBetween: 16,
                                },
                            }}
                        >
                            {POPULAR_PRODUCTS.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div className="h-full">
                                        <ProductCard product={product} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularProduct;
