"use client";
import React from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useTheme } from './context/ThemeContext';
import { useAnalytics } from './context/AnalyticsContext';
import { useTranslation } from './hooks/useTranslation';
import { getTranslatedFeatures, getTranslatedUsageSteps } from './utils/translations';
import PrimaryButton from './components/buttons/PrimaryButton';
import SimpleCard from './components/cards/SimpleCard';
import FeatureCard from './components/cards/FeatureCard';
import PricingCard from './components/cards/PricingCard';
import DataCard from './components/cards/DataCard';

export default function HomePage() {
  const { darkMode, setDarkMode } = useTheme();
  const { trackComponentView } = useAnalytics();
  const { t, locale } = useTranslation();
  const router = useRouter();

  // Track page view
  React.useEffect(() => {
    trackComponentView('HomePage');
  }, [trackComponentView]);

  const features = getTranslatedFeatures(t);
  const usageSteps = getTranslatedUsageSteps(t);

  return (
    <div className="transition-colors duration-300">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-4">
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-shadow-lg !text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-pink-500 dark:to-purple-400 select-none">
              {t('homepage.hero_title')}
            </h1>
            <p className="text-lg max-w-md mx-auto md:mx-0 text-gray-700 dark:text-gray-300">
              {t('homepage.hero_description')}
            </p>
            <div className="space-x-6">
              <PrimaryButton onClick={() => {
                trackComponentView('ThemeToggle');
                setDarkMode(!darkMode);
              }}>
                {darkMode ? t('theme.toggle_light') : t('theme.toggle_dark')}
              </PrimaryButton>
              <Link
                href="/components"
                className="inline-block px-6 py-3 font-semibold text-purple-700 dark:text-pink-400 hover:underline cursor-pointer transition-colors hover:bg-purple-100 dark:hover:bg-purple-900 rounded-lg"
                onClick={() => trackComponentView('ExploreFeatures')}
              >
                {t('homepage.explore_components')}
              </Link>
              <Link
                href="/playground"
                className="inline-block px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105"
                onClick={() => trackComponentView('PlaygroundAccess')}
              >
                {t('homepage.try_playground')}
              </Link>
            </div>
          </div>
          <div className="relative md:w-1/2 max-w-lg mx-auto">
            <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl shadow-2xl w-full h-96 flex items-center justify-center bg-[length:200%_200%] gradient-shift">
              <div className="text-white text-center">
                <div className="text-6xl mb-4 animate-bounce">🎨</div>
                <h3 className="text-2xl !text-gray-50 font-bold mb-2 transition-all duration-700 ease-out hover:scale-105">{t('homepage.beautiful_components')}</h3>
                <p className="text-blue-100">{t('homepage.ready_to_use')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4grid gap-4 text-center"
        >
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-shadow cursor-default flex flex-col items-center space-y-8"
            >
              <div className="text-7xl">{icon}</div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-xs">
                {description}
              </p>
            </div>
          ))}
        </section>

        {/* Featured Components */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-extrabold mb-16 text-center">
            {t('homepage.featured_components')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <SimpleCard
              title={t('homepage.simple_card_title')}
              description={t('homepage.simple_card_description')}
            />
            <FeatureCard
              title={t('homepage.feature_card_title')}
              description={t('homepage.feature_card_description')}
            />
            <PricingCard
              plan={t('homepage.pricing_card_plan')}
              price={t('homepage.pricing_card_price')}
              features={[t('homepage.pricing_card_features.0'), t('homepage.pricing_card_features.1'), t('homepage.pricing_card_features.2')]}
            />
            <DataCard title={t('homepage.data_card_title')} value="27" icon={t('homepage.data_card_icon')} trend={t('homepage.data_card_trend')} />
          </div>
        </section>

        {/* Usage Instructions */}
        <section className="max-w-5xl mx-auto px-6 py-8 bg-theme-surface rounded-3xl shadow-theme-md text-center space-y-10">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            {t('homepage.getting_started')}
          </h2>
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {usageSteps.map(({ step, title, description, code }) => (
              <div
                key={step}
                className="rounded-xl p-4 bg-theme-surface-hover shadow-theme-sm hover:shadow-theme-md transition border border-theme-light"
              >
                <div className="flex items-center gap-4 mb-2">
                  <p className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white">
                    {step}
                  </p>
                  <p className="font-semibold text-xl text-theme-primary">{title}</p>
                </div>
                <p className="mb-2 text-theme-secondary">{description}</p>
                <div className="relative">
                  <div className="bg-theme-surface rounded-lg overflow-hidden">
                    <div className="flex justify-between items-center px-4 py-2 border-b border-theme-light">
                      <span className="text-theme-muted text-sm">Code</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(code);
                          trackComponentView(`GettingStartedStep${step}`);
                        }}
                        className="flex items-center gap-2 text-theme-muted hover:text-theme-primary text-sm bg-theme-surface hover:bg-theme-surface-hover px-3 py-1 rounded-md transition-colors"
                      >
                        <span>Copy</span>
                        <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <CodeBlock code={code} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto px-6 py-28 text-center">
          <h2 className="text-5xl font-extrabold mb-10">
            {t('homepage.cta_title')}
          </h2>
          <PrimaryButton
            className="text-lg px-14 py-6"
            onClick={() => {
              trackComponentView('StartBuildingCTA');
              router.push('/components');
            }}
          >
            {t('homepage.cta_button')}
          </PrimaryButton>
        </section>
      </div>
    </div>
  );
}

function CodeBlock({ code }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    hljs.highlightElement(ref.current);
  }, [code]);

  return (
    <pre
      className="text-sm overflow-x-auto font-mono"
    >
      <code ref={ref} className="language-javascript font-mono">
        {code}
      </code>
    </pre>
  );
}