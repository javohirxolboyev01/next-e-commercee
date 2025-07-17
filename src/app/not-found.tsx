"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black flex-col space-y-6">
      <h1 className="text-7xl font-bold tracking-tight">404</h1>
      <p className="text-xl text-gray-400 text-center">
        The page you’re looking for can’t be found.
      </p>
      <div className="space-x-4">
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 bg-black text-white font-semibold hover:bg-gray-700 transition rounded"
        >
          GO HOME
        </button>
        <button
          onClick={() => router.back()}
          className="px-6 py-2 border border-black text-black hover:bg-white hover:text-black transition rounded"
        >
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default React.memo(NotFound);
