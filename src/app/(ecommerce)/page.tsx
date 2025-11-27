import CategoryProduct from "@/components/home/CategoryProduct";
import Category from "@/components/home/Caterory";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <div className="text-center ">
      <Category />
      <HeroSection />
      <CategoryProduct/>
    </div>
  );
}
