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
    title: t('features_title'),
    description: t('features_description'),
  },
  {
    icon: "🎨",
    title: t('themes_title'),
    description: t('themes_description'),
  },
  {
    icon: "⚙️",
    title: t('apis_title'),
    description: t('apis_description'),
  },
  {
    icon: "📚",
    title: t('documentation_title'),
    description: t('documentation_description'),
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
    title: t('getting_started_step_one_title'),
    description: t('getting_started_step_one_description'),
    code: t('getting_started_step_one_code'),
  },
  {
    step: 2,
    title: t('getting_started_step_2_title'),
    description: t('getting_started_step_2_description'),
    code: t('getting_started_step_two_code'),
  },
  {
    step: 3,
    title: t('getting_started_step_3_title'),
    description: t('getting_started_step_3_description'),
    code: t('getting_started_step_3_code'),
  },
];

/**
 * Get translated pricing card features
 * @param {Function} t - translation function
 * @returns {Array} translated features
 */
export const getTranslatedPricingFeatures = (t) => [
  t('pricing_card_features.0'),
  t('pricing_card_features.1'),
  t('pricing_card_features.2'),
];