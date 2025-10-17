import React from 'react';
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
      <button className="px-3 py-2 rounded-lg text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 dark:focus:ring-offset-gray-900 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.254-.269-.5-.556-.734-.862-.913 1.32-1.91 2.49-2.98 3.5a1 1 0 11-1.42-1.42c.97-.94 1.86-2.02 2.65-3.2a1 1 0 011.03-.44c.36.1.72.23 1.07.39a1 1 0 01.57.74 1 1 0 01-.3.82 15.87 15.87 0 01-1.38 1.15c.45.56.95 1.07 1.5 1.52a1 1 0 01-1.42 1.42c-.44-.44-.85-.92-1.22-1.44a1 1 0 01.2-1.42c.3-.23.62-.42.95-.58a1 1 0 01.82.2 18.87 18.87 0 001.72-4.78H4a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.895.553l2.99 5.982a.945.945 0 01.048.247 1 1 0 01-.542 1.047l-3.028 1.514a1 1 0 01-1.34-1.34l1.77-3.54-1.77-3.54a1 1 0 011.788-.894zM15 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
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