"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Star,
  ShoppingCart,
  Plus,
  Minus,
  CheckCircle2,
  Home,
  ChevronRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ProductCard from "@/components/cards/ProductCard";

// Static Product Database
const products: Record<string, any> = {
  "1": {
    id: "1",
    name: "প্রিমিয়াম হানি নাটস / Premium Honey Nuts",
    bengaliName: "প্রিমিয়াম হানি নাটস",
    englishName: "Premium Honey Nuts",
    price: 1390,
    originalPrice: 1500,
    rating: 5.0,
    reviews: 0,
    weight: "১ কেজি",
    category: "ড্রাই ফুডস",
    images: [
      "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800",
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800",
    ],
    description:
      "পুষ্টির ভান্ডার হানিনাট, যা আমাদের শারীরিক ও মানসিক এনার্জি বৃদ্ধি করে। আলহামদুলিল্লাহ, হানি নাটস মধু, বাদাম, খেজুর, তিনফল, এপ্রিকট, বিভিন্ন ফুডস ও সিডস এর সু-স্বাদু একটি মিশ্রন যা আমাদের শরীরে পুষ্টির চাহিদা পূরন করে দ্রুত ক্ষুদা নিবারন করে। সকালে বা বিকালের হালকা নাস্তায় হানি নাটস রাখুন। হানি নাটস আমাদের শরীরের জন্য অত্যন্ত কার্যকরি একটি খাবার। যারা নিয়মিত হানি নাটস গ্রহন করে তারা এর উপকারিতায় মগ্ধ হয়েছে। যাদের শরীরে নানাবিধ অসুবিধা তারা নিয়মিত গ্রহন করুন আর এর বিস্ময়কর উপকারিতা লক্ষ করুন। হাজারো বছর ধরে এসকল খাবার গ্রহন করে মানুষ সুস্থ্য এবং সবল রয়েছে। ডাক্তাররা সুস্থ্য থাকতে নিয়মিত বাদাম, বিভিন্ন সিডস এবং মধু খেতে পরামর্শ দিয়ে থাকেন। আমরা দেশ সেরা প্রিমিয়াম হানি নাটস এর গ্যারান্টি দিচ্ছি। ইনশাআল্লাহ।",
    benefits: [
      "শারীরিক দূর্বলতা দূর করে",
      "বীর্য ঘন করে",
      "মানষিক শক্তি বৃদ্ধি করে",
      "পুষ্টির চাহিদা পূরন করে",
      "প্রোটিন এর চাহিদা পূরন করে",
      "ক্যালসিয়াম এর অভাব দূর করে",
      "বাথ ব্যথা দূর করে",
      "হজম শক্তি বৃদ্ধি করে",
      "গ্যাস্ট্রিক সমাধান করে",
      "শত রোগের উপকারিতা, ইনশাআল্লাহ",
      "দীর্ঘদিনের হাড় ব্যাথা, চাবানি, কামড়ানি দূর করে",
    ],
    ingredients: [
      "BSTI খাঁটি মিশ্র ফুলের মধু",
      "ফ্রেস তিনফল ৪ পিস",
      "মবরুম খেজুর ৪ পিস",
      "প্রিমিয়াম এপ্রিকট ৪ পিস",
      "জাম্বু কাজু বাদাম",
      "জাম্বু কাঠ বাদাম",
      "জাম্বু পেস্তা বাদাম",
      "ফ্রেস বড় আখরোট",
      "থাই বাদাম",
      "কুমড়ার বীজ",
      "গোলেন্ড কিসমিস",
    ],
    highlights: [
      "দীর্ঘদিনের শারীরিক দুর্বলতা দূর করুন",
      "হারানো শক্তি ফিরিয়ে আনুন",
      "সুঠাম এবং সুস্বাস্থ্যের অধিকারী হন",
      "শরীরে পুষ্টির ঘাটতি পূরন করুন",
      "সুপার প্রিমিয়াম হানি নাটস গ্রহন করুন, নতুন জীবন গড়ুন",
    ],
    reviewData: [],
    categories: [
      "Discount Offer",
      "Uncategorized",
      "আম",
      "খেজুর",
      "খেজুর গুড়",
      "গুড়",
      "ঘি",
      "ডেজার্ট আইটেম",
      "ড্রাই ফুডস",
      "তেল, ঘি, মসলা",
      "নিত্য প্রয়োজনীয়",
      "পপুলার",
      "ভেষজ আইটেম",
      "মধু",
      "রেগুলার",
      "সিজনাল",
      "সিডস",
      "সেমাই",
    ],
  },
  "2": {
    id: "2",
    name: "মাল্টি ফ্লোরাল খাঁটি মধু / Multi Floral Honey",
    bengaliName: "মাল্টি ফ্লোরাল খাঁটি মধু",
    englishName: "Multi Floral Honey",
    price: 1050,
    originalPrice: 1200,
    rating: 4.8,
    reviews: 312,
    weight: "১ কেজি",
    category: "মধু",
    images: [
      "https://amzadfood.com/wp-content/uploads/2024/04/%E0%A6%86%E0%A6%96%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%BE%E0%A6%A8%E0%A6%BE-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC-3-kg-400x400.webp",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800",
    ],
    description:
      "এই মাল্টি ফ্লোরাল মধু সুন্দরবন, রাজশাহী, পঞ্চগড় ও পার্বত্য চট্টগ্রামের বন্য ফুল থেকে সংগৃহীত।",
    benefits: [
      "ইমিউনিটি বাড়ায়",
      "ঠান্ডা-কাশি প্রতিরোধ করে",
      "হজমশক্তি বাড়ায়",
    ],
    ingredients: [],
    highlights: [],
    reviewData: [
      {
        name: "রহিম উদ্দিন",
        rating: 5,
        comment: "খুবই ভালো মধু। স্বাদ অসাধারণ।",
      },
    ],
    categories: ["মধু", "পপুলার"],
  },
};

// Related Products
const relatedProducts = [
  { id: 1, name: "সরিষার তেল / Mustard Oil 2 Ltr", price: 620, oldPrice: 640 },
  {
    id: 2,
    name: "আখের জুস পাওডার / Akher Juice Powder",
    price: 990,
    oldPrice: 1200,
  },
  { id: 3, name: "স্লিম কী মাল্টি সিডস কম্বো", price: 990, oldPrice: 1050 },
  {
    id: 4,
    name: "আখের লাল চিনি / Akher Lal Chini",
    price: 1100,
    oldPrice: 1390,
  },
  {
    id: 5,
    name: "মধুময় ত্বীন খেজুর / Honey Tin Khejur",
    price: 700,
    oldPrice: 1350,
  },
  { id: 6, name: "আখের দানা গুড় / Akher Dana Gur", price: 850, oldPrice: 1250 },
];

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const product = products[params.productId];
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const savings = product.originalPrice - product.price;
  const discountPercent = Math.round((savings / product.originalPrice) * 100);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", product.name, "Quantity:", quantity);
  };

  return (
    <div className="px-4 py-6 sm:py-12">
      <div className="container">
        {/* Breadcrumb - Exact match */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span> / </span>
          <span>{product.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img: string, i: number) => (
                  <div
                    key={i}
                    className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                      selectedImage === i
                        ? "border-primary"
                        : "border-gray-200 hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedImage(i)}
                  >
                    <Image
                      src={img}
                      alt={`View ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Details - Exact match to website */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                {product.bengaliName} / {product.englishName}
              </h1>
            </div>

            {/* Price - Exact format from website */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-2xl text-gray-500 line-through">
                  ৳{product.originalPrice.toLocaleString()}
                </span>
                <span className="text-2xl text-gray-600">
                  Original price was: ৳{product.originalPrice.toLocaleString()}.
                </span>
                <span className="text-3xl font-bold text-primary">
                  ৳{product.price.toLocaleString()}
                </span>
                <span className="text-2xl text-gray-600">
                  Current price is: ৳{product.price.toLocaleString()}.
                </span>
              </div>
            </div>

            {/* Highlights - Bullet points */}
            {product.highlights && product.highlights.length > 0 && (
              <div className="space-y-2">
                {product.highlights.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-primary font-bold text-lg mt-1">
                      *
                    </span>
                    <span className="text-gray-800 text-base">{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Discount Badge */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="font-bold text-orange-900 text-lg">
                🔥 {savings} টাকা ডিসকাউন্ট !
              </p>
              <p className="text-orange-800 mt-1">
                👉 পরিমান – {product.weight}
              </p>
            </div>

            {/* Product Name with Quantity */}
            <div className="space-y-3">
              <p className="font-semibold text-gray-700 text-lg">
                {product.name} quantity
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-none border-0 h-12 w-12"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-20 h-12 text-center font-bold text-lg border-x border-gray-300 focus:outline-none"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-none border-0 h-12 w-12"
                    onClick={() => handleQuantityChange(1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* CTA Button - Exact text */}
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white text-lg h-14 rounded-lg"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              অর্ডার করুন Add to cart
            </Button>

            {/* Browse Categories */}
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-600 mb-2">Browse</p>
              <div className="flex flex-wrap gap-2">
                {product.categories?.slice(0, 8).map((category: string) => (
                  <Link
                    key={category}
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section - Exact match */}
        {/* //data-[state=active]:border-primary */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full m-0 p-0 max-w-[450px] grid-cols-3 overflow-hidden bg-transparent">
              {/* Description - Active state */}
              <TabsTrigger
                value="description"
                className="
      relative rounded-none text-sm font-medium
      data-[state=active]:bg-white data-[state=active]:text-gray-900
      data-[state=active]:border-t-2 data-[state=active]:!border-t-[#019532]
      data-[state=active]:border-b-4 data-[state=active]:!border-b-white
      data-[state=active]:border-l data-[state=active]:border-r
      data-[state=active]:border-gray-300
      data-[state=inactive]:bg-[#F5F5F5] data-[state=inactive]:text-gray-600
      data-[state=inactive]:border-l data-[state=inactive]:border-r data-[state=inactive]:border-t-2
      data-[state=inactive]:border-[#ddd]
    "
              >
                Description
              </TabsTrigger>

              {/* Additional Information */}
              <TabsTrigger
                value="additional"
                className="
      rounded-none text-sm font-medium
      data-[state=active]:bg-white data-[state=active]:text-gray-900
      data-[state=active]:border-t-2 data-[state=active]:!border-t-[#019532]
      data-[state=active]:border-b-4 data-[state=active]:!border-b-white
      data-[state=active]:border-l data-[state=active]:border-r
      data-[state=active]:border-gray-300
      data-[state=inactive]:bg-[#F5F5F5] data-[state=inactive]:text-gray-600
      data-[state=inactive]:border-l data-[state=inactive]:border-r data-[state=inactive]:border-t-2
      data-[state=inactive]:border-[#ddd]
    "
              >
                Additional Info
              </TabsTrigger>

              {/* Reviews */}
              <TabsTrigger
                value="reviews"
                className="
      rounded-none text-sm font-medium
      data-[state=active]:bg-white data-[state=active]:text-gray-900
      data-[state=active]:border-t-2 data-[state=active]:!border-t-[#019532]
      data-[state=active]:border-b-4 data-[state=active]:!border-b-white
      data-[state=active]:border-l data-[state=active]:border-r
      data-[state=active]:border-gray-300
      data-[state=active]:!pb-[10px]
      data-[state=inactive]:bg-[#F5F5F5] data-[state=inactive]:text-gray-600
      data-[state=inactive]:border-l data-[state=inactive]:border-r data-[state=inactive]:border-t-2
      data-[state=inactive]:border-[#ddd]
    "
              >
                Reviews
              </TabsTrigger>
            </TabsList>

            <div className="border border-gray-200 -mt-[9px] rounded-lg p-6 md:p-10">
              <TabsContent value="description" className="mt-6">
                <div>
                  <div className="prose max-w-none">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      পুষ্টির ভান্ডার হানিনাট, যা আমাদের শারীরিক ও মানসিক
                      এনার্জি বৃদ্ধি করে।
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base mb-6">
                      {product.description}
                    </p>

                    {/* Benefits Section */}
                    {product.benefits && product.benefits.length > 0 && (
                      <div className="mt-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                          ✅ উপকারিতা :
                        </h4>
                        <ul className="space-y-2 list-none">
                          {product.benefits.map(
                            (benefit: string, index: number) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <span className="text-primary font-bold mt-1">
                                  *
                                </span>
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Ingredients Section */}
                    {product.ingredients && product.ingredients.length > 0 && (
                      <div className="mt-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                          ✅ প্রিমিয়াম উপাদান সমূহ :
                        </h4>
                        <ol className="list-decimal list-inside space-y-2 ml-4">
                          {product.ingredients.map(
                            (ingredient: string, index: number) => (
                              <li key={index} className="text-gray-700">
                                {ingredient}
                              </li>
                            )
                          )}
                        </ol>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="additional" className="mt-6">
                <div>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 font-semibold text-gray-900 w-1/3">
                          Weight
                        </td>
                        <td className="py-3 text-gray-700">{product.weight}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-semibold text-gray-900">
                          Category
                        </td>
                        <td className="py-3 text-gray-700">
                          {product.category}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div>
                  {product.reviewData && product.reviewData.length > 0 ? (
                    <div className="space-y-8">
                      {product.reviewData.map((review: any, index: number) => (
                        <div
                          key={index}
                          className="border-b pb-8 last:border-0 last:pb-0"
                        >
                          <div className="flex gap-5">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="text-primary font-bold text-lg">
                                {review.name[0]}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-2">
                                <p className="font-bold text-lg">
                                  {review.name}
                                </p>
                                <div className="flex text-yellow-500">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-5 h-5 ${
                                        i < review.rating ? "fill-current" : ""
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-gray-700 mt-3 text-base leading-relaxed">
                                {review.comment}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-600 text-lg mb-4">
                        There are no reviews yet.
                      </p>
                      <p className="text-gray-500 mb-6">
                        Be the first to review "{product.name}" Cancel reply
                      </p>
                      <div className="max-w-md mx-auto text-left space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your rating *
                          </label>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-6 h-6 text-gray-300" />
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your review *
                          </label>
                          <textarea
                            className="w-full border border-gray-300 rounded-lg p-3"
                            rows={4}
                            placeholder="Write your review..."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg p-3"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            className="w-full border border-gray-300 rounded-lg p-3"
                          />
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          Submit Review
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
