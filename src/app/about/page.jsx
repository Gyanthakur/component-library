import React from 'react';
import { Code, Users, Heart, Github } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
      {/* Overview Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About MyLibrary</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          MyLibrary is a comprehensive component library built with Next.js and Tailwind CSS,
          designed to provide developers with reusable, accessible, and beautifully designed UI components.
          Our goal is to accelerate development workflows and maintain design consistency across projects.
        </p>
      </section>

      {/* Technologies Section */}
      <section>
        <div className="flex items-center mb-8">
          <Code className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-semibold text-gray-900">Technologies Used</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium text-gray-900 mb-2">Next.js</h3>
            <p className="text-gray-600">React framework for production with server-side rendering and static site generation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium text-gray-900 mb-2">React</h3>
            <p className="text-gray-600">JavaScript library for building user interfaces with component-based architecture.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-medium text-gray-900 mb-2">Tailwind CSS</h3>
            <p className="text-gray-600">Utility-first CSS framework for rapid UI development and responsive design.</p>
          </div>
        </div>
      </section>

      {/* Contribution Section */}
      <section>
        <div className="flex items-center mb-8">
          <Github className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-semibold text-gray-900">Contributing</h2>
        </div>
        <p className="text-gray-600 mb-6">
          We welcome contributions from the community! Whether you're fixing bugs, adding new components,
          or improving documentation, your help is invaluable.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-2">How to Contribute</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Check out our <a href="/CONTRIBUTING.md" className="text-blue-600 hover:underline">Contributing Guidelines</a></li>
            <li>Report issues or suggest features on <a href="https://github.com/your-repo" className="text-blue-600 hover:underline">GitHub</a></li>
            <li>Join our community discussions</li>
          </ul>
        </div>
      </section>

      {/* Acknowledgements Section */}
      <section>
        <div className="flex items-center mb-8">
          <Heart className="w-8 h-8 text-red-500 mr-3" />
          <h2 className="text-3xl font-semibold text-gray-900">Acknowledgements</h2>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-600 mb-4">
            Special thanks to our contributors and the open-source community for their support and inspiration.
          </p>
          <div className="flex items-center">
            <Users className="w-6 h-6 text-gray-500 mr-2" />
            <span className="text-gray-700">Built with ❤️ by the MyLibrary team</span>
          </div>
        </div>
      </section>
    </div>
  );
}
