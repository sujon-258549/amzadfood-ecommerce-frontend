"use client";

import Image from "next/image";

const features = [
  {
    image: "/feature/1.png",
    alt: "শতভাগ ন্যাচারাল",
  },
  {
    image: "/feature/2.png",
    alt: "ফাস্ট ডেলিভারি",
  },
  {
    image: "/feature/3.png",
    alt: "নিরাপদ পেমেন্ট",
  },
];

const FeaturesSection = () => {
  return (
    <section className=" pt-5  md:pt-10 pb-3 md:pb-16">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-3">
          {features.map(({ image, alt }, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <Image
                src={image}
                alt={alt}
                width={200}
                height={200}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
