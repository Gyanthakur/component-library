'use client';
import React, { useState, useEffect } from 'react';
import { Code, Users, Heart, Github, Star, Target, Zap, Shield, Palette, Rocket, ExternalLink } from 'lucide-react';
import FetchContributors from '../fetchData/fetchContributers';

export default function AboutPage() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContributors = async () => {
      try {
        setLoading(true);
        const data = await FetchContributors();
        setContributors(data);
        setError(null);
      } catch (err) {
        setError('Failed to load contributors');
        console.error('Error fetching contributors:', err);
      } finally {
        setLoading(false);
      }
    };

    loadContributors();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Overview Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About MyLibrary</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          MyLibrary is a comprehensive component library built with Next.js and Tailwind CSS,
          designed to provide developers with reusable, accessible, and beautifully designed UI components.
          Our goal is to accelerate development workflows and maintain design consistency across projects.
        </p>
        <div className="flex justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            <span>20+ Components</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>TypeScript Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <span>Performance Optimized</span>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-8 rounded-2xl">
          <div className="flex items-center mb-4">
            <Target className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
          </div>
          <p className="text-gray-700">
            To empower developers with a robust, flexible, and beautiful component library that
            reduces development time while maintaining high-quality user experiences. We believe
            in making web development more efficient and enjoyable.
          </p>
        </div>

        <div className="bg-green-50 p-8 rounded-2xl">
          <div className="flex items-center mb-4">
            <Rocket className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
          </div>
          <p className="text-gray-700">
            To become the go-to component library for React developers, fostering a community
            where innovation meets practicality. We envision a world where building beautiful
            UIs is accessible to developers of all skill levels.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Why Choose MyLibrary?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Design System</h3>
            <p className="text-gray-600 dark:text-gray-300">Consistent design tokens and theming system for cohesive user experiences.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Accessibility First</h3>
            <p className="text-gray-600 dark:text-gray-300">Built with WCAG 2.1 guidelines and keyboard navigation support.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Performance</h3>
            <p className="text-gray-600 dark:text-gray-300">Optimized bundle size with tree-shaking and minimal dependencies.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Developer Experience</h3>
            <p className="text-gray-600 dark:text-gray-300">TypeScript support, comprehensive documentation, and excellent IDE integration.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Community Driven</h3>
            <p className="text-gray-600 dark:text-gray-300">Open source project with active community contributions and feedback.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Flexible</h3>
            <p className="text-gray-600 dark:text-gray-300">Customizable components that adapt to your design requirements.</p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-gray-50 p-8 rounded-2xl">
        <div className="flex items-center justify-center mb-8">
          <Code className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Tech Stack</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
            <div className="bg-black w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Next.js 14</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">React framework with App Router</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
            <div className="bg-blue-500 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">React 18</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Component-based architecture</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
            <div className="bg-cyan-500 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Tailwind CSS</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Utility-first styling</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">TS</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">TypeScript</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Type-safe development</p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Additional Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white dark:bg-gray-700 px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">ESLint</span>
            <span className="bg-white dark:bg-gray-700 px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">Prettier</span>
            <span className="bg-white dark:bg-gray-700 px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">Lucide Icons</span>
            <span className="bg-white dark:bg-gray-700 px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">PostCSS</span>
            <span className="bg-white dark:bg-gray-700 px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">Git</span>
          </div>
        </div>
      </section>
{/* 🌟 Getting Started Section */}
<section className="w-full overflow-x-hidden bg-gradient-to-b from-[#001E3C] to-[#012A63] text-white py-16 px-4 sm:px-8 md:px-12 rounded-3xl shadow-xl mt-12">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-extrabold mb-10 text-center tracking-wide">
      🚀 Getting Started
    </h2>

    {/* Steps Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Step 1 */}
      <div className="bg-[#023E8A]/50 backdrop-blur-md rounded-2xl p-8 text-center shadow-lg hover:shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-2">
        <div className="bg-[#0077B6] text-white w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center text-xl font-bold shadow-md">
          1
        </div>
        <h3 className="text-xl font-semibold mb-3">Installation</h3>
        <p className="text-gray-200 text-sm leading-relaxed">
          Install the library via{" "}
          <code className="bg-black/40 px-2 py-0.5 rounded">npm</code> or copy
          ready-to-use components directly.
        </p>
      </div>

      {/* Step 2 */}
      <div className="bg-[#023E8A]/50 backdrop-blur-md rounded-2xl p-8 text-center shadow-lg hover:shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-2">
        <div className="bg-[#0077B6] text-white w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center text-xl font-bold shadow-md">
          2
        </div>
        <h3 className="text-xl font-semibold mb-3">Import</h3>
        <p className="text-gray-200 text-sm leading-relaxed">
          Import the components you need directly into your React project and
          start building faster.
        </p>
      </div>

      {/* Step 3 */}
      <div className="bg-[#023E8A]/50 backdrop-blur-md rounded-2xl p-8 text-center shadow-lg hover:shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-2">
        <div className="bg-[#0077B6] text-white w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center text-xl font-bold shadow-md">
          3
        </div>
        <h3 className="text-xl font-semibold mb-3">Customize</h3>
        <p className="text-gray-200 text-sm leading-relaxed">
          Tweak the design, colors, and behavior easily to match your own design
          system.
        </p>
      </div>
    </div>

    {/* CTA Button */}
    <div className="text-center mt-12">
      <a
        href="/components"
        className="inline-block bg-[#0077B6] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#0096C7] hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
      >
        View Components
      </a>
    </div>
  </div>
</section>


     

      {/* Contribution Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center mb-6">
            <Github className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contributing</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We welcome contributions from the community! Whether you're fixing bugs, adding new components,
            or improving documentation, your help makes MyLibrary better for everyone.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-1 rounded">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Submit Issues</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Report bugs or request features on GitHub</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-1 rounded">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Create Pull Requests</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Contribute code improvements and new features</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 p-1 rounded">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Improve Documentation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Help make our docs clearer and more comprehensive</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-6">
            <Heart className="w-8 h-8 text-red-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Community</h2>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join our growing community of developers who are building amazing user interfaces with MyLibrary.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">GitHub Stars</span>
                <span className="bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm font-medium">1.2k+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Contributors</span>
                <span className="bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-medium">25+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Downloads</span>
                <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-medium">10k+</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">Built with ❤️ by the open source community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section>
        <div className="flex items-center justify-center mb-8">
          <Users className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Contributors</h2>
        </div>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Thank you to all the amazing developers who have contributed to making this component library better!
        </p>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300">Loading contributors...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-red-600 dark:text-red-400">{error}</p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {contributors.map((contributor) => (
                <div
                  key={contributor.id}
                  className="group bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-200 text-center"
                >
                  <div className="relative mb-3">
                    <img
                      src={contributor.avatar_url}
                      alt={`${contributor.login}'s avatar`}
                      className="w-16 h-16 rounded-full mx-auto border-2 border-gray-200 group-hover:border-blue-300 transition-colors duration-200"
                      loading="lazy"
                    />
                    <div className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                  </div>

                  <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                    {contributor.login}
                  </h3>

                  <p className="text-xs text-gray-500 mb-3">
                    {contributor.contributions} contribution{contributor.contributions !== 1 ? 's' : ''}
                  </p>

                  <a
                    href={contributor.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    <Github className="w-3 h-3" />
                    <span>Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>

            {contributors.length > 0 && (
              <div className="text-center mt-8">
                <p className="text-sm text-gray-500">
                  Want to join our contributors? Check out our{' '}
                  <a
                    href="https://github.com/Sharma-Ji-21/component-library"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    GitHub repository
                  </a>
                  {' '}to get started!
                </p>
              </div>
            )}
          </>
        )}
      </section>

      {/* License & Links Section */}
      <section className="text-center bg-gray-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Open Source & Free</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          MyLibrary is released under the MIT License, making it free to use for both personal and commercial projects.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/yourusername/component-library"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}