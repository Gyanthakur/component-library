"use client";
import { useState } from "react";
import Racing from "./Racing"; // Import the Racing component

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 transition-colors duration-500 font-sans">

      {/* Hero Section */}
      <section className="relative max-w-5xl mx-auto px-4 mt-12 mb-16">
        <div className="backdrop-blur-md  dark:bg-gray-900/40 rounded-3xl shadow-2xl py-14 px-10 flex flex-col items-center gap-6 border border-gray-100 dark:border-gray-700 transition-all">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            React UI Playground
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center max-w-3xl">
            Beautiful, modern & responsive component demo – interact with components and explore smooth animations.
          </p>
          <button className="mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            Explore Now
          </button>
        </div>
      </section>

      {/* Racing Game Section */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-indigo-200 via-purple-300 to-pink-400 dark:from-indigo-900 dark:via-purple-800 dark:to-black rounded-3xl shadow-2xl p-8 backdrop-blur-xl border border-white/20 dark:border-gray-700 transition-all">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
            🏁 Racing Game
          </h2>
          <Racing />
        </div>
      </section>

      {/* Placeholder Section */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-all">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            More Components Coming Soon...
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Stay tuned for more interactive UI components, demos, and fun features.
          </p>
        </div>
      </section>
    </div>
  );
}
