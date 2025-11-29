import type { Metadata } from "next";
import ProductDetails from "@/components/product/ProductDetails";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = {
  title: `Amzad Food - Product Details`,
  description: `Product Details for `,
};

const ProductDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;

  return (
    <div>
      <ProductDetails params={{ productId: id }} />
    </div>
  );
};

export default ProductDetailsPage;
