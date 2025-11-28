"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { DividerDiamond } from "../devider/Devider";

const testimonials = [
  {
    id: 1,
    name: "Fleece Marig",
    role: "Customer",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Designer",
    rating: 5,
    text: "Incredible attention to detail and super fast delivery. Highly recommend!",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Michael Ross",
    role: "Entrepreneur",
    rating: 5,
    text: "Professional team, amazing results. Will definitely come back!",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Emma Watson",
    role: "Blogger",
    rating: 5,
    text: "Exceeded all my expectations. Absolutely loved it!",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "David Kim",
    role: "Developer",
    rating: 5,
    text: "Clean, fast, and perfect execution. Couldn't ask for more.",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

const ReviewSection = () => {
  const [activeId, setActiveId] = useState(1);
  const [windowWidth, setWindowWidth] = useState(1024);
  const active = testimonials.find((c) => c.id === activeId) ?? testimonials[0];

  useEffect(() => {
    // Set initial width
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 100);
    }

    // Handle resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () =>
        setActiveId((prev) => (prev === testimonials.length ? 1 : prev + 1)),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  // Calculate responsive radius
  const getRadius = () => {
    if (windowWidth < 640) return 90;
    if (windowWidth < 768) return 110;
    if (windowWidth < 1024) return 120;
    return 140;
  };

  return (
    <section className="p-6 md:py-12   overflow-hidden">
      <div className="md:pb-0 pb-10 md:pt-0 pt-5">
        <DividerDiamond text="Reviews" />
      </div>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Orbit Section - Responsive with overflow control */}
          <div className="relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[480px] flex items-center justify-center order-2 lg:order-1 overflow-visible">
            {/* Decorative Rings - Responsive */}
            <div className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border border-green-200/60 rounded-full" />
            <div className="absolute w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 border border-green-200/40 rounded-full" />

            {/* Rotating Avatars - CSS-based responsive */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 85, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              {testimonials.map((person, index) => {
                const angle = (index * 360) / testimonials.length;
                const radius = getRadius();
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.button
                    key={person.id}
                    onClick={() => setActiveId(person.id)}
                    className="absolute top-1/2 left-1/2 z-20"
                    style={{ x, y, translateX: "-50%", translateY: "-50%" }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className={`rounded-full border-2 border-white shadow-lg transition-all ${
                        activeId === person.id
                          ? "ring-2 ring-primary ring-offset-2 scale-110"
                          : "opacity-70"
                      }`}
                    >
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover"
                      />
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Center Featured Avatar - Responsive */}
            <motion.div
              key={activeId}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="relative z-10"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white shadow-2xl border-2 border-primary flex items-center justify-center">
                <Image
                  src={active.image}
                  alt={active.name}
                  width={120}
                  height={120}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Testimonial Card - Responsive */}
          <motion.div
            key={activeId}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="bg-white rounded-[5px] p-6 sm:p-8 md:p-10 lg:p-12 border border-green-50 relative order-1 lg:order-2"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              {/* Profile Image - Responsive */}
              <div className="relative flex-shrink-0">
                <Image
                  src={active.image}
                  alt={active.name}
                  width={80}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover shadow-md border-2 border-white"
                />
                {/* 99 Score Badge - Responsive Positioning */}
                <div className="absolute -bottom-1 -right-1 sm:bottom-0 sm:right-0 md:-bottom-2 md:-right-2">
                  <div className="bg-primary text-white font-semibold text-xs sm:text-sm md:text-base w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                    99
                  </div>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                {/* Rating Stars - Responsive */}
                <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${
                        i < active.rating
                          ? "text-orange-400 fill-orange-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text - Responsive */}
                <p className="text-gray-700 text-sm sm:text-base md:text-lg text-start leading-relaxed mb-4 sm:mb-5 md:mb-6">
                  &ldquo;{active.text}&rdquo;
                </p>

                {/* Name & Title - Responsive */}
                <div>
                  <h3 className="font-bold text-base sm:text-lg md:text-xl text-start text-gray-900 mb-1">
                    {active.name}
                  </h3>
                  <p className="text-gray-500 text-start text-xs sm:text-sm md:text-base">
                    {active.role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
