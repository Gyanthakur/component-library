import React from 'react';
import { Globe } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

const LanguageSwitcher = () => {
  const { locale, locales, changeLanguage } = useI18n();

  const languageNames = {
    en: 'English',
    es: 'Español',
    fr: 'Français'
  };

  return (
    <div className="relative group">
      <button className="px-3 py-2 rounded-lg text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 dark:focus:ring-offset-gray-900 flex items-center gap-2 group">
        <Globe className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200" />
        <span className="hidden md:inline">{languageNames[locale]}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {locales.map((lang) => (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={`w-full text-left px-4 py-2 text-sm transition-colors ${
              locale === lang
                ? 'bg-blue-500 text-white'
                : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {languageNames[lang]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;