"use client";

import { GiPlantRoots } from "react-icons/gi";
import { MdLocalShipping } from "react-icons/md";
import { RiShieldCheckFill } from "react-icons/ri";

const features = [
  {
    icon: GiPlantRoots,
    title: "শতভাগ ন্যাচারাল",
    subtitle: "প্রাকৃতিক উপাদান ব্যবহারে প্রতিশ্রুতিবদ্ধ।",
  },
  {
    icon: MdLocalShipping,
    title: "ফাস্ট ডেলিভারি",
    subtitle: "২ থেকে ৩ দিনের মধ্যে আপনার পণ্য পৌঁছে যাবে।",
  },
  {
    icon: RiShieldCheckFill,
    title: "নিরাপদ পেমেন্ট",
    subtitle: "আপনার প্রতিটি লেনদেন ১০০% সুরক্ষিত।",
  },
];

const FeaturesSection = () => {
  return (
    <section className=" pt-5  md:pt-10 pb-3 md:pb-5">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, subtitle }) => (
            <div
              key={title}
              className="flex items-center gap-5 bg-orange-50 px-4 py-4 sm:px-6 md:px-8"
            >
              <div className="flex items-center justify-center rounded-full border-2 border-green-700 bg-white aspect-square w-[clamp(48px,11vw,64px)]">
                <Icon className="h-[62%] w-[62%] text-green-700" />
              </div>
              <div>
                <h3 className="font-bengali text-start text-[16px] font-bold text-orange-500 md:text-xl">
                  {title}
                </h3>
                <p className="font-bengali text-sm text-start text-gray-700 ">
                  {subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
