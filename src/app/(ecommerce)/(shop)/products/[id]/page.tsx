import ProductDetails from "@/components/product/ProductDetails";

interface PageProps {
  params: Promise<{ id: string }>;
}

const ProductDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;
  
  return (
    <div>
      <ProductDetails params={{ productId: id }} />
    </div>
  );
};

export default ProductDetailsPage;
