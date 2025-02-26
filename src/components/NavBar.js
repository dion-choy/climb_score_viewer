import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">My App</h1>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
          <Link href="/services" className="text-white hover:underline">
            Services
          </Link>
          <Link href="/products" className="text-white hover:underline">
            Products
          </Link>
          <Link href="/sign-up" className="text-white hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
