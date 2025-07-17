import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        <div>
          <h2 className="text-2xl font-bold text-black mb-2">
            Bazarli<span className="text-red-500 animate-pulse">24</span>
          </h2>
          <p className="text-sm text-gray-500">
            Your one-stop shop for quality products, fast delivery, and great
            deals — 24/7.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-sm font-semibold text-black mb-1">Quick Links</h3>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/products" className="hover:underline">
            Products
          </Link>
          <Link href="/carts" className="hover:underline">
            Carts
          </Link>
          <Link href="/recipes" className="hover:underline">
            Recipes
          </Link>
          <Link href="/users" className="hover:underline">
            Users
          </Link>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-black mb-1">Contact</h3>
            <p className="text-sm">Email: support@bazarli24.com</p>
            <p className="text-sm">Phone: +998 90 123 45 67</p>
          </div>
          <p className="text-xs text-gray-400 mt-6">
            &copy; {new Date().getFullYear()} Bazarli24. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
