'use client';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Code, Users, Heart, Github, Star, Target, Zap, Shield, Palette, Rocket, ExternalLink } from 'lucide-react';
import FetchContributors from '../fetchData/fetchContributers';

export default function AboutPage() {
  const t = useTranslations('about');
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
        setError(t('contributorsError'));
        console.error('Error fetching contributors:', err);
      } finally {
        setLoading(false);
      }
    };

    loadContributors();
  }, [t]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Overview Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('title')}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          {t('description')}
        </p>
        <div className="flex justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            <span>{t('overview.components')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>{t('overview.typescript')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <span>{t('overview.performance')}</span>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-8 rounded-2xl">
          <div className="flex items-center mb-4">
            <Target className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('mission.title')}</h2>
          </div>
          <p className="text-gray-700">
            {t('mission.description')}
          </p>
        </div>

        <div className="bg-green-50 p-8 rounded-2xl">
          <div className="flex items-center mb-4">
            <Rocket className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('vision.title')}</h2>
          </div>
          <p className="text-gray-700">
            {t('vision.description')}
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">{t('features.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('features.designSystem.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('features.designSystem.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('features.accessibility.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('features.accessibility.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('features.performance.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('features.performance.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('features.devExperience.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('features.devExperience.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('features.community.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('features.community.description')}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('features.flexible.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('features.flexible.description')}</p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-gray-50 p-8 rounded-2xl">
        <div className="flex items-center justify-center mb-8">
          <Code className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('techStack.title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
            <div className="dark:bg-white w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center">
              <img src="/logos/nextjs.svg" alt="Next.js" className="w-14 h-14" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('techStack.nextjs.title')}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('techStack.nextjs.description')}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center">
              <img src="/logos/react.svg" alt="React" className="w-14 h-14" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('techStack.react.title')}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('techStack.react.description')}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
            <div className=" w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center">
              <img src="/logos/tailwind.svg" alt="Tailwind CSS" className="w-14 h-14" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('techStack.tailwind.title')}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('techStack.tailwind.description')}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center">
            <div className=" w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center">
              <img src="/logos/typescript.svg" alt="TypeScript" className="w-14 h-14" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('techStack.typescript.title')}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('techStack.typescript.description')}</p>
          </div>
        </div>

        <section className="mt-10">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
    Additional Tools
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
    <div className="dark:bg-gray-800 bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition">
      <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ">
        <img src="/logos/eslint.svg" alt="ESLint" className="w-8 h-8" />
      </div>
      <h4 className="text-base font-medium text-gray-800 dark:text-gray-200 mb-1">
        ESLint
      </h4>
    </div>

    <div className="dark:bg-gray-800 bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition">
      <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ">
        <img src="/logos/prettier.svg" alt="Prettier" className="w-8 h-8" />
      </div>
      <h4 className="text-base font-medium text-gray-800 dark:text-gray-200 mb-1">
        Prettier
      </h4>
    </div>

    <div className="dark:bg-gray-800 bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition">
      <div className="dark:bg-white mb-4 mt-1 w-10 h-10 rounded-full mx-auto flex items-center bg-purple justify-center ">
        <img src="/logos/lucide.svg" alt="Lucid" className="w-10 h-10 "/>
      </div>
      <h4 className="text-base font-medium text-gray-800 dark:text-gray-200 mb-1">
        Lucide Icons
      </h4>
    </div>

    <div className="dark:bg-gray-800 bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition">
      <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ">
        <img src="/logos/postcss.svg" alt="PostCSS" className="w-8 h-8" />
      </div>
      <h4 className="text-base font-medium text-gray-800 dark:text-gray-200 mb-1">
        PostCSS
      </h4>
    </div>

    <div className="dark:bg-gray-800 bg-white p-4 rounded-sm shadow-md text-center hover:shadow-md transition">
      <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
        <img src="/logos/git.svg" alt="Git" className="w-8 h-8" />
      </div>
      <h4 className="text-base font-medium text-gray-800 dark:text-gray-200 mb-1">
        Git
      </h4>
    </div>

  </div>
</section>
      </section>
      {/* 🌟 Getting Started Section */}
      <section className="w-full overflow-x-hidden bg-gradient-to-b from-[#001E3C] to-[#012A63] text-white py-16 px-4 sm:px-8 md:px-12 rounded-3xl shadow-xl mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-10 text-center tracking-wide">
            {t('gettingStarted.title')}
          </h2>
          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-[#023E8A]/50 backdrop-blur-md rounded-2xl p-8 text-center shadow-lg hover:shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#0077B6] text-white w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center text-xl font-bold shadow-md">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('gettingStarted.installation.title')}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {t('gettingStarted.installation.description')}
              </p>
            </div>
            <div className="bg-[#023E8A]/50 backdrop-blur-md rounded-2xl p-8 text-center shadow-lg hover:shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#0077B6] text-white w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center text-xl font-bold shadow-md">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('gettingStarted.import.title')}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {t('gettingStarted.import.description')}
              </p>
            </div>
            <div className="bg-[#023E8A]/50 backdrop-blur-md rounded-2xl p-8 text-center shadow-lg hover:shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#0077B6] text-white w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center text-xl font-bold shadow-md">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('gettingStarted.customize.title')}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {t('gettingStarted.customize.description')}
              </p>
            </div>
          </div>
          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="/components"
              className="inline-block bg-[#0077B6] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#0096C7] hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              {t('gettingStarted.cta')}
            </a>
          </div>
        </div>
      </section>
      {/* Contribution Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center mb-6">
            <Github className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('contributing.title')}</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t('contributing.description')}
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-1 rounded">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{t('contributing.submitIssues.title')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('contributing.submitIssues.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-1 rounded">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{t('contributing.pullRequests.title')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('contributing.pullRequests.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 p-1 rounded">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{t('contributing.documentation.title')}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('contributing.documentation.description')}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-6">
            <Heart className="w-8 h-8 text-red-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('community.title')}</h2>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('community.description')}
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">{t('community.githubStars')}</span>
                <span className="bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm font-medium">1.2k+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">{t('community.contributors')}</span>
                <span className="bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-medium">25+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">{t('community.downloads')}</span>
                <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-medium">10k+</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{t('community.builtWithLove')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contributors Section */}
      <section>
        <div className="flex items-center justify-center mb-8">
          <Users className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('contributors.title')}</h2>
        </div>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {t('contributors.thankYou')}
        </p>
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300">{t('contributors.loading')}</p>
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
                      alt={t('contributors.avatarAlt', { login: contributor.login })}
                      className="w-16 h-16 rounded-full mx-auto border-2 border-gray-200 group-hover:border-blue-300 transition-colors duration-200"
                      loading="lazy"
                    />
                    <div className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                    {contributor.login}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">
                    {t('contributors.contributions', { count: contributor.contributions })}
                  </p>
                  <a
                    href={contributor.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    <Github className="w-3 h-3" />
                    <span>{t('contributors.profile')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
            {contributors.length > 0 && (
              <div className="text-center mt-8">
                <p className="text-sm text-gray-500">
                  {t('contributors.join')}
                  <a
                    href="https://github.com/Sharma-Ji-21/component-library"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {t('contributors.githubRepo')}
                  </a>
                  {t('contributors.getStarted')}
                </p>
              </div>
            )}
          </>
        )}
      </section>
      {/* License & Links Section */}
      <section className="text-center bg-gray-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('license.title')}</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          {t('license.description')}
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/yourusername/component-library"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            {t('license.github')}
          </a>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            {t('license.contact')}
          </a>
        </div>
      </section>
    </div>
  );
}