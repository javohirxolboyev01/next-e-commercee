import ProductDetail from "@/components/ProductDedail/ProductDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Bazarli24",
  description: "O'zbekistondagi birinchi raqamli online market",
};

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  console.log(id);

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();
  console.log(product);

  return <ProductDetail data={product} />;
};

export default ProductDetailPage;
