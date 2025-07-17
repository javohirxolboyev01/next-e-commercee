import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black px-4">
      <div className="w-full max-w-sm sm:max-w-md border border-gray-200 p-6 rounded-md shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-center tracking-tight">
          Sign In to 
          <Link
            href="/"
            className="text-2xl px-2 font-bold text-black hover:text-gray-800 transition"
          >
            Bazarli<span className="text-red-500 animate-pulse">24</span>
          </Link>
        </h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-black"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 rounded-md text-base font-medium hover:bg-gray-900 transition"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm mt-5 text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-black underline hover:text-gray-800"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default React.memo(SignIn);
