// components/UniqueDividers.tsx
"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
};

// 1. Minimal Glow
export const DividerGlow = ({ text }: Props) => (
  <div className="relative flex items-center justify-center py-20">
    <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent" />
    <span className="relative px-8 bg-black text-green-400 font-semibold text-sm md:text-base tracking-wider">
      {text}
    </span>
  </div>
);

// 2. Elegant Diamond
export const DividerDiamond = ({ 
  text = 'Testimonials', 
  primaryColor = 'indigo-600' 
}) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Horizontal line */}
      <div className="absolute inset-x-0 h-px bg-gray-300" />

      {/* Center content */}
      <div className="relative flex items-center gap-6 bg-white px-8">
        {/* Left Diamond */}
        <div 
          className={`w-3 h-3 md:w-4 md:h-4 rotate-45 bg-primary shadow-md`}
          style={{ backgroundColor: primaryColor.includes('-') ? '' : primaryColor }}
        />

        {/* Text */}
        <span className="text-black font-medium tracking-widest text-sm md:text-base uppercase">
          {text}
        </span>

        {/* Right Diamond */}
        <div 
          className={`w-3 h-3 md:w-4 md:h-4 rotate-45 bg-primary shadow-md`}
          style={{ backgroundColor: primaryColor.includes('-') ? '' : primaryColor }}
        />
      </div>
    </div>
  );
};

// 3. Neon Floating Text
export const DividerNeon = ({ text }: Props) => (
  <div className="relative flex items-center justify-center py-28">
    <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm" />
    <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
    <motion.span
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative px-10 py-3 bg-black/50 backdrop-blur-xl text-cyan-300 font-bold text-lg tracking-wider shadow-2xl shadow-cyan-500/50 border border-cyan-500/30 rounded-full"
    >
      {text}
    </motion.span>
  </div>
);

// 4. Luxury Gold Line
export const DividerGold = ({ text }: Props) => (
  <div className="relative flex items-center justify-center py-24">
    <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-600/60 to-transparent" />
    <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
    <span className="relative px-12 py-2 bg-gradient-to-r from-yellow-600 to-amber-500 text-black font-bold text-sm uppercase tracking-widest rounded-full shadow-lg">
      {text}
    </span>
  </div>
);

// 5. Holographic Crystal
export const DividerHolo = ({ text }: Props) => (
  <div className="relative flex items-center justify-center py-32 overflow-hidden">
    <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    <motion.span
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="relative px-10 py-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-bold text-xl md:text-2xl tracking-wider [background-size:200%_auto]"
      style={{ textShadow: "0 0 30px rgba(255,255,255,0.5)" }}
    >
      {text}
    </motion.span>
  </div>
);