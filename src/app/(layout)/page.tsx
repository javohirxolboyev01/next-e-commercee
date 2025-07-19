import Hero from "@/components/Hero/Hero";
import HomeItem from "@/components/HomeItem/HomeItem";
// import ProductItem from "@/components/ProductItem/ProductItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home  |  Bazarli24",
  description: "HomePage dagi products",
};

export default async function Home() {
  const data = await fetch(`https://dummyjson.com/products`);
  const products = await data.json();
  console.log(products);

  return (
    <div>
      <Hero />
      <HomeItem data={products.products} />
      {/* <ProductItem data={products?.products} /> */}
    </div>
  );
}
