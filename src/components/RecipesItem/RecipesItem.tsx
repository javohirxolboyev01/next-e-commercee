"use client";

import { IRecipe } from "@/types";
import React, { FC } from "react";
import {
  ClockIcon,
  FireIcon,
  GlobeAltIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

interface Props {
  data: IRecipe[];
}

const RecipesItem: FC<Props> = ({ data }) => {
  const router = useRouter();

  return (
    <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-10">
          <div className="w-full max-w-[150px] h-[1px] bg-gray-300" />
          <h1 className="px-4 text-3xl font-bold text-gray-900 text-center whitespace-nowrap">
            Retseptlar Menyusi
          </h1>
          <div className="w-full max-w-[150px] h-[1px] bg-gray-300" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
            >
              <div
                className="w-full h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 relative cursor-pointer"
                onClick={() => router.push(`/recipes/${item.id}`)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h2
                  className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 cursor-pointer hover:text-blue-600 transition"
                  onClick={() => router.push(`/recipes/${item.id}`)}
                >
                  {item.name}
                </h2>

                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <GlobeAltIcon className="w-4 h-4 mr-2 text-gray-500" />
                  {item.cuisine}
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <ClockIcon className="w-4 h-4 mr-2 text-gray-500" />
                  {item.prepTimeMinutes + item.cookTimeMinutes} daqiqa
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <FireIcon className="w-4 h-4 mr-2 text-gray-500" />
                  {item.difficulty}
                </div>

                <div className="mt-auto pt-3 border-t border-gray-200 flex justify-between text-sm font-medium text-gray-800">
                  <div className="flex items-center">
                    <StarIcon className="w-5 h-5 text-yellow-500 mr-1" />
                    {item.rating}
                  </div>
                  <div className="flex items-center">
                    <UserGroupIcon className="w-5 h-5 text-gray-500 mr-1" />
                    {item.servings} kishi
                  </div>
                </div>

                <button
                  onClick={() => router.push(`/recipes/${item.id}`)}
                  className="mt-4 bg-black text-white text-sm font-semibold py-2 rounded-full shadow hover:opacity-90 transition duration-200"
                >
                  Retseptni ko‘rish
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(RecipesItem);
