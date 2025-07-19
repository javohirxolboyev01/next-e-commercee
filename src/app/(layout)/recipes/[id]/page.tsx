import RecipesDetail from "@/components/RecipesDetail/RecipesDetail";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Recipes | Bazarli24",
  description: "O'zbekistondagi birinchi raqamli online market",
};

const RecipesPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe = await res.json();

  return (
    <div>
      <RecipesDetail data={recipe} />
    </div>
  );
};

export default React.memo(RecipesPage);
