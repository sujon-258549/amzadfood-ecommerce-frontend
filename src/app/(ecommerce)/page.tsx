import CategoryProduct from "@/components/home/CategoryProduct";
import Category from "@/components/home/Caterory";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import ReviewSection from "@/components/home/ReviewSection";

export default function Home() {
  return (
    <div className="text-center ">
      <Category />
      <HeroSection />
      <FeaturesSection />
      <CategoryProduct/>
      <ReviewSection />
    </div>
  );
}
