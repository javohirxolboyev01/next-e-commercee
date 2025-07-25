"use client";

import { IProduct } from "@/types";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/outline";

interface Props {
  data: IProduct[];
}

const ProductItem: FC<Props> = ({ data }) => {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data?.slice(15, 30).map((item: IProduct) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-lg overflow-hidden transition hover:shadow-md min-h-[340px] cursor-pointer flex flex-col justify-between"
            onClick={() => router.push(`/products/${item.id}`)}
          >
            <div className="relative w-full h-[240px] bg-gray-100 overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <button
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100 z-10 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Add to wishlist:", item.id);
                }}
              >
                <HeartIcon className="h-5 w-5 text-red-500" />
              </button>
            </div>

            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-900 line-clamp-1 hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-1">{item.brand}</p>
              <div className="text-sm font-bold text-black mt-1">
                ${item.price}
              </div>
            </div>

            <div className="absolute inset-0 flex items-end justify-end px-2 pb-2 opacity-0 group-hover:opacity-100 transition">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Added to cart:", item.id);
                }}
                className="bg-black rounded-full p-1 shadow hover:bg-gray-800 cursor-pointer"
              >
                <ShoppingCartIcon className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProductItem);
