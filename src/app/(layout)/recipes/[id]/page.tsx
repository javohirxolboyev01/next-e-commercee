import RecipesDetail from "@/components/RecipesDetail/RecipesDetail";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Recipe ${id} | Bazarli24`,
    description: "O'zbekistondagi birinchi raqamli online market",
  };
}

const RecipesPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe = await res.json();

  return (
    <div>
      <RecipesDetail data={recipe} />
    </div>
  );
};

export default React.memo(RecipesPage);
