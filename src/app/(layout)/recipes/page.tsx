import RecipesItem from "@/components/RecipesItem/RecipesItem";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Recipes | Bazarli24",
  description: "O'zbekistondagi birinchi raqamli online market",
};
const Recipes = async () => {
  const res = await fetch("https://dummyjson.com/recipes");
  const recipes = await res.json();
  console.log(recipes);

  return (
    <div>
     <RecipesItem data = {recipes?.recipes}/>
    </div>
  );
};

export default React.memo(Recipes);
