"use client";
import { ICart, IProduct } from "@/types";
import React from "react";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

interface Props {
  data: ICart[];
}

const CartItem = ({ data }: Props) => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8 space-y-10">
      {data.map((cart) => (
        <div key={cart.id} className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cart.products.map((product: IProduct) => (
              <div
                key={product.id}
                className="bg-white rounded-lg border hover:shadow-md transition-all p-3 flex flex-col"
              >
                <div className="relative">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-36 object-contain rounded-md"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    <HeartIcon className="h-4 w-4 text-gray-400 hover:text-red-500 cursor-pointer" />
                    <ShoppingCartIcon className="h-4 w-4 text-gray-400 hover:text-blue-500 cursor-pointer" />
                  </div>
                </div>
                <div className="mt-2 space-y-1">
                  <h3 className="text-xs font-medium text-gray-900 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {product.quantity} × ${product.price}
                  </p>
                  <div className="text-sm font-semibold text-gray-800">
                    ${product.total}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(CartItem);
