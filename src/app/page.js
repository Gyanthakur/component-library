"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; 
import PrimaryButton from './components/buttons/PrimaryButton';
import SimpleCard from './components/cards/SimpleCard';
import FeatureCard from './components/cards/FeatureCard';
import PricingCard from './components/cards/PricingCard';
import DataCard from './components/cards/DataCard'; 

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const features = [
    {
      icon: "🚀",
      title: "Optimized for React",
      description:
        "Lightweight and fast components, designed specifically for React applications.",
    },
    {
      icon: "🎨",
      title: "Custom Themes",
      description:
        "Supports effortless customization with light, dark, and custom themes.",
    },
    {
      icon: "⚙️",
      title: "Flexible APIs",
      description:
        "Simple, intuitive props enabling full control over your components.",
    },
    {
      icon: "📚",
      title: "Well Documented",
      description:
        "Comprehensive, clear documentation to ease your development experience.",
    },
  ];

  const usageSteps = [
    {
      step: 1,
      title: "Add the Package",
      description: "Install with npm or yarn for easy integration.",
      code: "npm install my-components-library",
    },
    {
      step: 2,
      title: "Import Components",
      description:
        "Import only what you need from the library to keep bundles small.",
      code: "import { Button, Card } from 'my-components-library';",
    },
    {
      step: 3,
      title: "Use Components",
      description: "Apply components directly with easy-to-use props.",
      code: "<Button variant='primary'>Click Me</Button>",
    },
  ];

  return (
    <div className={`${darkMode ? "dark" : "light"} transition-colors duration-700`}>
      <div className="min-h-screen bg-gradient-to-tr light:from-indigo-50 light:via-purple-100 light:to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 text-gray-900 dark:text-gray-100">
        
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-4">
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <h1 className="text-5xl font-extrabold bg-clip-text text-transparent light:bg-gradient-to-r light:from-purple-600 light:to-pink-500 dark:bg-gradient-to-r dark:from-pink-500 dark:to-purple-600 select-none">
              Build beautiful and performant React apps with ease
            </h1>
            <p className="text-lg max-w-md mx-auto md:mx-0 light:text-gray-700 dark:text-gray-300">
              Our component library empowers developers with customizable, accessible UI elements optimized for React ecosystems.
            </p>
            <div className="space-x-6">
              <PrimaryButton onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Switch to Light" : "Switch to Dark"}
              </PrimaryButton>
              <Link href="#features" className="inline-block px-6 py-3 rounded-lg font-semibold light:text-purple-700 dark:text-pink-400 hover:underline cursor-pointer">
                Explore Features
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 max-w-lg mx-auto"> 
            <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl shadow-2xl w-full h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-2">Beautiful Components</h3>
                <p className="text-blue-100">Ready to use in your projects</p>
              </div>
            </div> 
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-16 text-center">
          {features.map(({ icon, title, description }) => (
            <div key={title} className="light:bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-shadow cursor-default flex flex-col items-center space-y-8">
              <div className="text-7xl">{icon}</div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="light:text-gray-600 dark:text-gray-400 max-w-xs">{description}</p>
            </div>
          ))}
        </section>

        {/* Featured Components */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-extrabold mb-16 text-center">Featured Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
            <SimpleCard title="Simple Card" description="Clean, minimal card with action support." />
            <FeatureCard title="Feature Card" description="Highlight your app's features with style." />
            <PricingCard plan="Pro" price="$9/mo" features={["10 projects", "Priority support", "Unlimited users"]} />
            <DataCard title="Active Projects" value="27" icon="📂" trend={8} />
          </div>
        </section>

        {/* Usage Instructions */}
        <section className="max-w-5xl mx-auto px-6 py-24 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl text-center space-y-14">
          <h2 className="text-4xl font-bold">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {usageSteps.map(({ step, title, description, code }) => (
              <div key={step} className="rounded-xl p-8 light:bg-indigo-50 dark:bg-indigo-900 shadow-lg hover:shadow-xl transition">
                <div className="text-6xl font-extrabold text-purple-600 mb-6">{step}</div>
                <h3 className="font-semibold text-xl mb-4">{title}</h3>
                <p className="mb-6 light:text-gray-700 dark:text-gray-300">{description}</p>
                <pre className="light:bg-purple-100 dark:bg-purple-800 light:text-purple-900 dark:text-purple-300 p-5 rounded-lg overflow-x-auto text-left text-sm">
                  {code}
                </pre>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto px-6 py-28 text-center">
          <h2 className="text-5xl font-extrabold mb-10">Ready to build stunning apps?</h2>
          <PrimaryButton className="text-lg px-14 py-6">Start Building Now</PrimaryButton>
        </section>
      </div>
    </div>
  );
}