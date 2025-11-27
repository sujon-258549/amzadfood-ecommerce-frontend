// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images from your /public folder (local images)
    // → This is enabled by default, no extra config needed

    // Allow ALL external/remote images from ANY domain
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow every domain
        port: "",
        pathname: "**", // Allow every path
      },
      {
        protocol: "http",
        hostname: "**", // Also allow http (for local dev, some CDNs)
        port: "",
        pathname: "**",
      },
    ],

    // Optional: Allow SVG from external sources (if you ever need it)
    // dangerouslyAllowSVG: true,
  },

  // Recommended settings
  reactStrictMode: true,
};

export default nextConfig;
