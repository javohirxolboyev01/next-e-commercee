"use client";

import React, { useState } from "react";
import { IProduct } from "@/types";
import { HeartIcon } from "@heroicons/react/24/outline";

interface Props {
  data: IProduct;
}

const ProductDetail: React.FC<Props> = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState<string>(data.images[0]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <div className="bg-gray-100 rounded-xl overflow-hidden w-full h-[400px] flex items-center justify-center mb-6">
          <img
            src={selectedImage}
            alt="Selected"
            className="h-full w-full object-contain block transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex space-x-4 overflow-x-auto">
          {[...data.images].map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 bg-white object-contain rounded-lg cursor-pointer border-2 ${
                selectedImage === img
                  ? "border-black"
                  : "border-gray-200 hover:border-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {data.title}
        </h1>
        <p className="text-sm text-gray-500">{data.brand}</p>

        <div className="text-2xl font-semibold text-black">${data.price}</div>

        <p className="text-gray-700 leading-relaxed">{data.description}</p>

        <div className="flex items-center gap-4 pt-4">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            + Add to Cart
          </button>
          <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            <HeartIcon className="h-6 w-6 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
