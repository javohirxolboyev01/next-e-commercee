import CartItem from "@/components/CartItem/CartItem";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Carts | Bazarli24",
  description: "O'zbekistondagi birinchi raqamli online market",
};

const Carts = async () => {
  const res = await fetch("https://dummyjson.com/carts");
  const cartsItem = await res.json();

  return (
    <div>
      <CartItem data={cartsItem.carts} />
    </div>
  );
};

export default React.memo(Carts);
