import CategoryProduct from "@/components/home/CategoryProduct";
import Category from "@/components/home/Caterory";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/hero-section/HeroSection";

export default function Home() {
  // Categories with Products
  const categories = [
    {
      dividerText: "পপুলার",
      categoryInfo: {
        bengaliName: "পপুলার",
        englishName: "Popular",
        image:
          "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=600&fit=crop",
        totalProducts: "৫০+",
        categoryLink: "/category/popular",
      },
      products: [
        {
          id: 1,
          name: "প্রিমিয়াম হানি নাটস / Premium Honey Nuts",
          price: 1390,
          oldPrice: 1500,
          save: 110,
          image:
            "https://amzadfood.com/wp-content/uploads/2024/04/Rosted-Honey-Nut-2-400x400.webp",
        },
        {
          id: 2,
          name: "রোস্টেড হানি নাটস / Roasted Honey Nuts",
          price: 1200,
          oldPrice: 1350,
          save: 150,
          image:
            "https://amzadfood.com/wp-content/uploads/2024/04/Rosted-Honey-Nut-2-400x400.webp",
        },
        {
          id: 3,
          name: "খেজুর / Dates",
          price: 800,
          oldPrice: 950,
          save: 150,
          image:
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop",
        },
        {
          id: 4,
          name: "খেজুর গুড় / Date Palm Jaggery",
          price: 450,
          oldPrice: 550,
          save: 100,
          image:
            "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
        },
        {
          id: 5,
          name: "প্রাকৃতিক মধু / Natural Honey",
          price: 650,
          oldPrice: 750,
          save: 100,
          image:
            "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop",
        },
      ],
    },
    {
      dividerText: "নিত্য প্রয়োজনীয়",
      categoryInfo: {
        bengaliName: "নিত্য প্রয়োজনীয়",
        englishName: "Daily Necessities",
        image:
          "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=600&fit=crop",
        totalProducts: "৪০+",
        categoryLink: "/category/daily-necessities",
      },
      products: [
        {
          id: 6,
          name: "বাসমতি চাল / Basmati Rice",
          price: 120,
          oldPrice: 140,
          save: 20,
          image:
            "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
        },
        {
          id: 7,
          name: "তাজা দুধ / Fresh Milk",
          price: 80,
          oldPrice: 95,
          save: 15,
          image:
            "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop",
        },
        {
          id: 8,
          name: "তাজা ডিম / Fresh Eggs",
          price: 150,
          oldPrice: 180,
          save: 30,
          image:
            "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop",
        },
        {
          id: 9,
          name: "তেল / Cooking Oil",
          price: 280,
          oldPrice: 320,
          save: 40,
          image:
            "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
        },
        {
          id: 10,
          name: "লবণ / Salt",
          price: 45,
          oldPrice: 55,
          save: 10,
          image:
            "https://images.unsplash.com/photo-1608039829570-4c58d4c0c8a0?w=400&h=400&fit=crop",
        },
      ],
    },
    {
      dividerText: "মজা",
      categoryInfo: {
        bengaliName: "মজা",
        englishName: "Fun & Tasty",
        image:
          "https://amzadfood.com/wp-content/uploads/2025/07/2-1-400x400.webp",
        totalProducts: "৩০+",
        categoryLink: "/category/fun-tasty",
      },
      products: [
        {
          id: 11,
          name: "চিকেন নাগেট / Chicken Nuggets",
          price: 450,
          oldPrice: 550,
          save: 100,
          image:
            "https://images.unsplash.com/photo-1606914509749-1234d42272c1?w=400&h=400&fit=crop",
        },
        {
          id: 12,
          name: "সিঙ্গারা / Samosa",
          price: 250,
          oldPrice: 300,
          save: 50,
          image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop",
        },
        {
          id: 13,
          name: "স্প্রিং রোল / Spring Roll",
          price: 320,
          oldPrice: 380,
          save: 60,
          image:
            "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop",
        },
        {
          id: 14,
          name: "পারাঠা / Paratha",
          price: 180,
          oldPrice: 220,
          save: 40,
          image:
            "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop",
        },
        {
          id: 15,
          name: "সেমাই / Vermicelli",
          price: 120,
          oldPrice: 150,
          save: 30,
          image:
            "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=400&fit=crop",
        },
      ],
    },
    {
      dividerText: "রেগুলার",
      categoryInfo: {
        bengaliName: "রেগুলার",
        englishName: "Regular",
        image:
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=600&fit=crop",
        totalProducts: "৩৫+",
        categoryLink: "/category/regular",
      },
      products: [
        {
          id: 16,
          name: "তাজা টমেটো / Fresh Tomato",
          price: 80,
          oldPrice: 100,
          save: 20,
          image:
            "https://images.unsplash.com/photo-1546090849-824a16df9f4a?w=400&h=400&fit=crop",
        },
        {
          id: 17,
          name: "পটল / Pointed Gourd",
          price: 120,
          oldPrice: 150,
          save: 30,
          image:
            "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop",
        },
        {
          id: 18,
          name: "বেগুন / Eggplant",
          price: 90,
          oldPrice: 110,
          save: 20,
          image:
            "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop",
        },
        {
          id: 19,
          name: "কলা / Banana",
          price: 80,
          oldPrice: 100,
          save: 20,
          image:
            "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
        },
        {
          id: 20,
          name: "আলু / Potato",
          price: 60,
          oldPrice: 75,
          save: 15,
          image:
            "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=400&h=400&fit=crop",
        },
      ],
    },
    {
      dividerText: "সিজনাল",
      categoryInfo: {
        bengaliName: "সিজনাল",
        englishName: "Seasonal",
        image:
          "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&h=600&fit=crop",
        totalProducts: "২৫+",
        categoryLink: "/category/seasonal",
      },
      products: [
        {
          id: 21,
          name: "আম / Mango",
          price: 150,
          oldPrice: 180,
          save: 30,
          image:
            "https://images.unsplash.com/photo-1605027990121-1c8e0b1e5b1a?w=400&h=400&fit=crop",
        },
        {
          id: 22,
          name: "লিচু / Lychee",
          price: 200,
          oldPrice: 250,
          save: 50,
          image:
            "https://images.unsplash.com/photo-1594736797933-d0cbc0c0e0a0?w=400&h=400&fit=crop",
        },
        {
          id: 23,
          name: "জাম / Blackberry",
          price: 180,
          oldPrice: 220,
          save: 40,
          image:
            "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&h=400&fit=crop",
        },
        {
          id: 24,
          name: "কাঁঠাল / Jackfruit",
          price: 120,
          oldPrice: 150,
          save: 30,
          image:
            "https://images.unsplash.com/photo-1605027990121-1c8e0b1e5b1a?w=400&h=400&fit=crop",
        },
        {
          id: 25,
          name: "আনারস / Pineapple",
          price: 100,
          oldPrice: 130,
          save: 30,
          image:
            "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&h=400&fit=crop",
        },
      ],
    },
    {
      dividerText: "ড্রাই ফ্রুটস",
      categoryInfo: {
        bengaliName: "ড্রাই ফ্রুটস",
        englishName: "Dry Fruits",
        image:
          "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=600&fit=crop",
        totalProducts: "৪৫+",
        categoryLink: "/category/dry-fruits",
      },
      products: [
        {
          id: 26,
          name: "বাদাম / Almonds",
          price: 1200,
          oldPrice: 1400,
          save: 200,
          image:
            "https://images.unsplash.com/photo-1611859266516-9a0b9c69573b?w=400&h=400&fit=crop",
        },
        {
          id: 27,
          name: "কাজু / Cashews",
          price: 1500,
          oldPrice: 1800,
          save: 300,
          image:
            "https://images.unsplash.com/photo-1611859266516-9a0b9c69573b?w=400&h=400&fit=crop",
        },
        {
          id: 28,
          name: "কিশমিশ / Raisins",
          price: 650,
          oldPrice: 750,
          save: 100,
          image:
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop",
        },
        {
          id: 29,
          name: "আখরোট / Walnuts",
          price: 1100,
          oldPrice: 1300,
          save: 200,
          image:
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop",
        },
        {
          id: 30,
          name: "পেস্তা / Pistachios",
          price: 1800,
          oldPrice: 2100,
          save: 300,
          image:
            "https://images.unsplash.com/photo-1611859266516-9a0b9c69573b?w=400&h=400&fit=crop",
        },
      ],
    },
  ];

  return (
    <div className="text-center">
      <Category />
      <HeroSection />
      <FeaturesSection />
      {categories.map((category, index) => (
        <CategoryProduct
          key={index}
          dividerText={category.dividerText}
          categoryInfo={category.categoryInfo}
          products={category.products}
          showCategoryCard={true}
        />
      ))}
    </div>
  );
}
