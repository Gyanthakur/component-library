// components/Navbar.jsx
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-4 mb-2">
      <div className=" ">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-indigo-600">
              MyLibrary
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-indigo-600">
              Home
            </Link>
            <Link href="/about" className="hover:text-indigo-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-indigo-600">
              Contact
            </Link>
            <Link href="/components" className="hover:text-indigo-600">
              Components
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-2 bg-white shadow">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/components"
            className="block px-3 py-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Components
          </Link>
        </div>
      )}
    </nav>
  );
}
