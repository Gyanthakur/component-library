import React from 'react';
import { Code, Heart, Github } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-32">
      {/* Overview Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">About MyLibrary</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            <span className="font-semibold">MyLibrary</span> is an open-source component library
            powered by <span className="font-medium">Next.js</span> and <span className="font-medium">Tailwind CSS</span>.
            It’s designed to accelerate your workflow with reusable, accessible, and beautifully styled UI components.
          </p>
        </div>
        <div className="bg-blue-50 rounded-xl p-8 shadow-md">
          <p className="text-gray-700 text-lg">
            ✅ Fast & scalable <br />
            ✅ Built for consistency <br />
            ✅ Open-source & community-driven
          </p>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="flex items-center text-3xl font-bold text-gray-900 mb-4">
            <Code className="w-8 h-8 text-blue-600 mr-3" />
            Technologies We Love
          </h2>
          <p className="text-gray-600 mb-6">
            Each tool in our stack was chosen for performance, scalability, and developer experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-lg transition">
            <h3 className="text-xl font-medium text-gray-900 mb-2">Next.js</h3>
            <p className="text-gray-600 text-sm">Production-ready React framework with SSR & SSG.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-lg transition">
            <h3 className="text-xl font-medium text-gray-900 mb-2">React</h3>
            <p className="text-gray-600 text-sm">UI library for component-based, reusable interfaces.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-lg transition">
            <h3 className="text-xl font-medium text-gray-900 mb-2">Tailwind CSS</h3>
            <p className="text-gray-600 text-sm">Utility-first CSS framework for fast UI development.</p>
          </div>
        </div>
      </section>

      {/* Contribution Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-blue-50 rounded-xl p-8 shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Ways to Contribute</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Review our{" "}
              <a href="/CONTRIBUTING.md" className="text-blue-600 hover:underline">
                Contributing Guidelines
              </a>
            </li>
            <li>
              Open issues or suggest features on{" "}
              <a href="https://github.com/your-repo" className="text-blue-600 hover:underline">
                GitHub
              </a>
            </li>
            <li>Join community discussions & share feedback</li>
          </ul>
        </div>
        <div>
          <h2 className="flex items-center text-3xl font-bold text-gray-900 mb-4">
            <Github className="w-8 h-8 text-blue-600 mr-3" />
            Contributing
          </h2>
          <p className="text-gray-600">
            MyLibrary is community-driven. Your input—whether it's bug fixes,
            new features, or better docs—helps shape its future.
          </p>
        </div>
      </section>

      {/* Acknowledgements Section */}
      <section className="text-center">
        <h2 className="flex justify-center items-center text-3xl font-bold text-gray-900 mb-6">
          <Heart className="w-8 h-8 text-red-500 mr-3" />
          Acknowledgements
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          A heartfelt thanks to our contributors, the open-source ecosystem, and
          every developer who inspires us. <br />
          MyLibrary is built with ❤️ by developers, for developers.
        </p>
      </section>
    </div>
  );
}
