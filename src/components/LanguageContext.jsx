import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check localStorage first
    const savedLanguage = localStorage.getItem('wekraft_language');
    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }
    // Default to English
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('wekraft_language', language);
  }, [language]);

  const t = (key, variables = {}) => {
    let text = translations[language][key];
    
    // Fallback to English if translation is missing in selected language
    if (!text && translations['en'][key]) {
      text = translations['en'][key];
    }
    
    if (!text) return key; // Fallback to key if not found in English either

    // Replace variables e.g. {age} with value
    Object.keys(variables).forEach((varKey) => {
      text = text.replace(new RegExp(`{${varKey}}`, 'g'), variables[varKey]);
    });

    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
