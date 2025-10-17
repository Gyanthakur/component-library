import { useI18n } from '../context/I18nContext';

export const useTranslation = () => {
  const { t, locale, locales, changeLanguage } = useI18n();
  
  // Function to get nested translation values
  const translate = (key, options = {}) => {
    if (!key) return '';
    
    // If key is an object, it's already translated content
    if (typeof key === 'object' && key !== null) {
      return key[locale] || key.en || key[Object.keys(key)[0]] || '';
    }
    
    return t(key, options);
  };
  
  return {
    t: translate,
    locale,
    locales,
    changeLanguage
  };
};