"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between flex-wrap gap-y-2">
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-2xl font-bold text-black hover:text-gray-800 transition"
          >
            Bazarli<span className="text-red-500 animate-pulse">24</span>
          </Link>

          <nav className="hidden md:flex space-x-4">
            <Link
              href="/"
              className={`hover:text-black ${
                pathname === "/" ? "text-black font-semibold" : "text-gray-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`hover:text-black ${
                pathname === "/products"
                  ? "text-black font-semibold"
                  : "text-gray-600"
              }`}
            >
              Products
            </Link>
       
            <Link
              href="/recipes"
              className={`hover:text-black ${
                pathname === "/recipes"
                  ? "text-black font-semibold"
                  : "text-gray-600"
              }`}
            >
              Recipes
            </Link>
            <Link
              href="/users"
              className={`hover:text-black ${
                pathname === "/users"
                  ? "text-black font-semibold"
                  : "text-gray-600"
              }`}
            >
              Users
            </Link>
          </nav>
        </div>

        <div className="hidden md:block flex-1 mx-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-md px-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="flex items-center space-x-4 ml-auto">
          <Link href="/wishlist" className="relative hover:text-black">
            <HeartIcon className="h-6 w-6 text-gray-600 hover:text-black" />
          </Link>
          <Link href="/cart" className="relative hover:text-black">
            <ShoppingCartIcon className="h-6 w-6 text-gray-600 hover:text-black" />
          </Link>
          <Link href="/signin">
            <button className="text-gray-600 hover:text-black text-sm">
              Sign In
            </button>
          </Link>
          <Link href="/signup">
            <button className="hidden md:inline-block px-4 py-1.5 rounded-md bg-black text-white hover:bg-gray-800 text-sm">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
