"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import i18n from '../i18n';

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState('en');
  const [locales] = useState(['en', 'es', 'fr']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize i18n
    const initializeI18n = async () => {
      try {
        // Detect language from browser or localStorage
        const savedLocale = localStorage.getItem('locale');
        const browserLocale = navigator.language.split('-')[0];
        const initialLocale = savedLocale || browserLocale || 'en';
        
        // Ensure locale is supported
        const supportedLocale = locales.includes(initialLocale) ? initialLocale : 'en';
        
        await i18n.changeLanguage(supportedLocale);
        setLocale(supportedLocale);
      } catch (error) {
        console.warn('Failed to initialize i18n:', error);
        setLocale('en');
      } finally {
        setLoading(false);
      }
    };

    initializeI18n();
  }, [locales]);

  const changeLanguage = async (newLocale) => {
    if (locales.includes(newLocale)) {
      try {
        await i18n.changeLanguage(newLocale);
        setLocale(newLocale);
        localStorage.setItem('locale', newLocale);
      } catch (error) {
        console.warn('Failed to change language:', error);
      }
    }
  };

  const value = {
    locale,
    locales,
    changeLanguage,
    t: i18n.t.bind(i18n),
    loading
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

export default I18nContext;