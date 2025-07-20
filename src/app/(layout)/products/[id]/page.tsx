import ProductDetail from "@/components/ProductDedail/ProductDetail";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Product ${id} | Bazarli24`,
    description: "O'zbekistondagi birinchi raqamli online market",
  };
}

const ProductDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  console.log(id);

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();
  console.log(product);

  return <ProductDetail data={product} />;
};

export default ProductDetailPage;
