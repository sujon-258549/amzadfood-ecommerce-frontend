import DownloadAppCard from "./DownloadAppCard";
import HeroSlider from "./HeroSlider";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="md:my-8 my-4 flex flex-col lg:flex-row gap-2 items-start">
        {/* Hero Slider - Full width on mobile, 3/4 on large screens */}
        <div className="w-full lg:w-3/4">
          <HeroSlider />
        </div>

        {/* Download App Card - Hidden on small screens, visible on lg+ */}
        <div className="hidden lg:block w-full lg:w-1/4">
          <DownloadAppCard />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
