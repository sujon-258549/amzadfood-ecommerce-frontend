import Category from "@/components/home/Caterory";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/hero-section/HeroSection";
import PopularProduct from "@/components/home/PopularProduct";

export default function Home() {


  return (
    <div className="text-center">
      <Category />
      <HeroSection />
      <PopularProduct />
      <FeaturesSection />
    </div>
  );
}
