import ProductItem from "@/components/ProductItem/ProductItem";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Products | Bazarli24",
  description: "O'zbekistondagi birinchi raqamli online market",
};
const Products = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const products = await data.json();
  console.log(products);

  return (
    <div>
      <ProductItem data={products?.products} />
    </div>
  );
};

export default React.memo(Products);
