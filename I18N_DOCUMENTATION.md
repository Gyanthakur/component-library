# Internationalization (i18n) Implementation

This document provides comprehensive documentation for the internationalization implementation in the component library.

## Overview

The component library now supports multiple languages through a comprehensive internationalization system. The implementation includes:

- Multi-language support for English, Spanish, and French
- Language switcher component
- Context-based translation management
- Automatic language detection
- Persistent language selection

## Supported Languages

- English (en) - Default language
- Spanish (es)
- French (fr)

## Implementation Details

### 1. Translation Files Structure

Translation files are organized in the `public/locales` directory:

```
public/
└── locales/
    ├── en/
    │   └── common.json
    ├── es/
    │   └── common.json
    └── fr/
        └── common.json
```

Each language has a `common.json` file containing all translations for that language.

### 2. Translation Context

The `I18nContext` provides translation capabilities throughout the application:

```jsx
import { useI18n } from '../context/I18nContext';

const { locale, locales, changeLanguage, t } = useI18n();
```

### 3. Translation Hook

The `useTranslation` hook simplifies translation usage in components:

```jsx
import { useTranslation } from '../hooks/useTranslation';

const { t, locale } = useTranslation();
const translatedText = t('navigation.home');
```

### 4. Language Switcher Component

The `LanguageSwitcher` component provides a UI for changing languages:

```jsx
import LanguageSwitcher from '../components/LanguageSwitcher';

<LanguageSwitcher />
```

## Adding New Languages

To add a new language:

1. Create a new directory in `public/locales` with the language code (e.g., `de` for German)
2. Create a `common.json` file in the new directory with translations
3. Add the language code to the `locales` array in `next-i18next.config.js`
4. Add the language name to the `languageNames` object in `LanguageSwitcher.jsx`

Example for German:

```json
// public/locales/de/common.json
{
  "navigation": {
    "home": "Startseite",
    "about": "Über uns",
    "contact": "Kontakt"
  }
}
```

## Using Translations in Components

### Basic Usage

```jsx
import { useTranslation } from '../hooks/useTranslation';

export default function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <h1>{t('homepage.hero_title')}</h1>
  );
}
```

### With Parameters

```jsx
// In translation file:
// "welcome_message": "Welcome, {{name}}!"

const message = t('welcome_message', { name: 'John' });
```

### Nested Translations

```json
{
  "homepage": {
    "hero": {
      "title": "Build beautiful apps",
      "description": "Create stunning applications"
    }
  }
}
```

```jsx
const title = t('homepage.hero.title');
const description = t('homepage.hero.description');
```

## Translation Utilities

The `src/app/utils/translations.js` file provides utility functions for common translation patterns:

- `getTranslatedNavLinks(t)` - Returns translated navigation links
- `getTranslatedFeatures(t)` - Returns translated feature items
- `getTranslatedUsageSteps(t)` - Returns translated usage steps
- `getTranslatedPricingFeatures(t)` - Returns translated pricing features

## Automatic Language Detection

The system automatically detects the user's preferred language based on:

1. Saved preference in localStorage
2. Browser language settings
3. Default language (English) as fallback

## Persistent Language Selection

Language preferences are saved to localStorage and persist across sessions.

## Testing Translations

To test translations:

1. Use the language switcher in the navigation bar
2. Verify all text elements update correctly
3. Check that the selected language persists after page refresh
4. Ensure all components display translated content

## Best Practices

1. **Use descriptive translation keys**: Use clear, hierarchical keys like `homepage.hero.title`
2. **Keep translations consistent**: Maintain consistent terminology across languages
3. **Test all supported languages**: Verify translations work correctly in all supported languages
4. **Handle pluralization**: Use appropriate plural forms for different languages
5. **Consider text length**: Account for varying text lengths in different languages

## Future Improvements

1. **Dynamic imports**: Load translation files on demand
2. **Translation management tool**: Integrate with a translation management platform
3. **Additional languages**: Support more languages based on user demand
4. **RTL support**: Add right-to-left language support
5. **Translation fallbacks**: Implement better fallback mechanisms

## Troubleshooting

### Missing Translations

If text appears as translation keys:
1. Verify the key exists in all translation files
2. Check for typos in the translation keys
3. Ensure the translation files are properly formatted

### Language Switching Issues

If language switching doesn't work:
1. Check browser console for errors
2. Verify the language code is supported
3. Ensure localStorage is accessible

## Contributing Translations

To contribute translations:

1. Fork the repository
2. Add or update translation files in `public/locales`
3. Test the translations in the application
4. Submit a pull request with your changes

Please ensure translations are accurate and culturally appropriate for the target audience.