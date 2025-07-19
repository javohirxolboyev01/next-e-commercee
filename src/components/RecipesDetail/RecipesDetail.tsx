"use client";

import { IRecipe } from "@/types";
import React, { FC } from "react";

interface Props {
  data: IRecipe;
}

const RecipesDetail: FC<Props> = ({ data }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="w-full h-[400px] bg-gray-100 rounded-xl overflow-hidden">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
        <p className="text-sm text-gray-500">Difficulty: {data.difficulty}</p>
        <p className="text-sm text-gray-500">Servings: {data.servings}</p>
        <p className="text-sm text-gray-500">
          Prep: {data.prepTimeMinutes} min · Cook: {data.cookTimeMinutes} min
        </p>
        <p className="text-lg font-semibold text-black">
          Rating: {data.rating.toFixed(1)} ⭐
        </p>

        <div className="mt-6">
          <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RecipesDetail);
