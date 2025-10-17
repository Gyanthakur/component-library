// Utility functions for handling translations

/**
 * Get translated navigation links
 * @param {Function} t - translation function
 * @returns {Array} translated navigation links
 */
export const getTranslatedNavLinks = (t) => [
  { href: "/", label: t('navigation.home') },
  { href: "/about", label: t('navigation.about') },
  { href: "/contact", label: t('navigation.contact') },
  { href: "/components", label: t('navigation.components') },
  { href: "/playground", label: t('navigation.playground') },
  { href: "/analytics", label: t('navigation.analytics') },
  { href: "/feedback", label: t('navigation.feedback') },
];

/**
 * Get translated features for homepage
 * @param {Function} t - translation function
 * @returns {Array} translated features
 */
export const getTranslatedFeatures = (t) => [
  {
    icon: "🚀",
    title: t('homepage.features_title'),
    description: t('homepage.features_description'),
  },
  {
    icon: "🎨",
    title: t('homepage.themes_title'),
    description: t('homepage.themes_description'),
  },
  {
    icon: "⚙️",
    title: t('homepage.apis_title'),
    description: t('homepage.apis_description'),
  },
  {
    icon: "📚",
    title: t('homepage.documentation_title'),
    description: t('homepage.documentation_description'),
  },
];

/**
 * Get translated usage steps for homepage
 * @param {Function} t - translation function
 * @returns {Array} translated usage steps
 */
export const getTranslatedUsageSteps = (t) => [
  {
    step: 1,
    title: t('homepage.getting_started_step_1_title'),
    description: t('homepage.getting_started_step_1_description'),
    code: t('homepage.getting_started_step_1_code'),
  },
  {
    step: 2,
    title: t('homepage.getting_started_step_2_title'),
    description: t('homepage.getting_started_step_2_description'),
    code: t('homepage.getting_started_step_2_code'),
  },
  {
    step: 3,
    title: t('homepage.getting_started_step_3_title'),
    description: t('homepage.getting_started_step_3_description'),
    code: t('homepage.getting_started_step_3_code'),
  },
];

/**
 * Get translated pricing card features
 * @param {Function} t - translation function
 * @returns {Array} translated features
 */
export const getTranslatedPricingFeatures = (t) => [
  t('homepage.pricing_card_features.0'),
  t('homepage.pricing_card_features.1'),
  t('homepage.pricing_card_features.2'),
];