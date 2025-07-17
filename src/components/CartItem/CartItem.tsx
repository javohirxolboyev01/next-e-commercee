"use client";

import { ICart, IProduct } from "@/types";
import React from "react";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

interface Props {
  data: ICart[];
}

const CartItem = ({ data }: Props) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      {data.map((cart) => (
        <div key={cart.id} className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {cart.products.map((product: IProduct) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 flex flex-col justify-between"
              >
                <div className="relative group">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-40 object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <HeartIcon className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer" />
                    <ShoppingCartIcon className="h-5 w-5 text-gray-400 hover:text-blue-500 cursor-pointer" />
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {product.quantity} × ${product.price}
                  </p>
                  <p className="text-base font-semibold text-gray-800">
                    ${product.total}
                  </p>
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