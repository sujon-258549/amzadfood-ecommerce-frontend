

"use client";

import ProductCard from "../cards/ProductCard";
import CategoryCard from "../cards/CategoryCard";
import { DividerDiamond } from "../devider/Devider";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image?: string;
  save?: number;
}

interface CategoryInfo {
  bengaliName: string;
  englishName: string;
  image: string;
  totalProducts: string;
  categoryLink: string;
}

interface CategoryProductProps {
  dividerText: string;
  categoryInfo: CategoryInfo;
  products: Product[];
  showCategoryCard?: boolean;
  index?: number;
}

const CategoryProduct = ({
  dividerText,
  categoryInfo,
  products,
  showCategoryCard = true,
  index,
}: CategoryProductProps) => {
  const isEven = index !== undefined && index % 2 === 0;

  return (
    <section className={` `}>
      <div className={``}>
        {/* Text Divider */}
        <div className={`${isEven ? 'mb-8 md:mb-12' : 'mt-6 md:mt-12'}`}>
          <div className="container">
            <DividerDiamond text={dividerText} />
          </div>
        </div>

        {/* Category and Products Grid */}
        <div className={`${isEven ? 'bg-white' : ''}`}>
          <div className="container">
            <div className="grid grid-cols-1 py-8 md:py-12 md:grid-cols-3 gap-8">
              {/* LEFT: Category Card (33% width) */}
              {showCategoryCard && (
                <div className="lg:sticky lg:top-20 h-fit">
                  <CategoryCard
                    bengaliName={categoryInfo.bengaliName}
                    englishName={categoryInfo.englishName}
                    image={categoryInfo.image}
                    totalProducts={categoryInfo.totalProducts}
                    categoryLink={categoryInfo.categoryLink}
                  />
                </div>
              )}

              {/* RIGHT: Product Grid (66% width if category card shown, 100% if not) */}
              <div className={showCategoryCard ? "md:col-span-2" : "md:col-span-3"}>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryProduct;
