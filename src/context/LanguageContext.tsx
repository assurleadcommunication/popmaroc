import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    'nav.home': 'Accueil',
    'nav.shop': 'Boutique',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'hero.title': 'L\'Artisanat Marocain en Version Pop',
    'hero.subtitle': 'Découvrez une collection unique où la tradition rencontre la modernité vibrante.',
    'hero.cta': 'Découvrir la collection',
    'footer.rights': 'Tous droits réservés.',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.shop': 'المتجر',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'hero.title': 'الصناعة التقليدية المغربية بلمسة بوب',
    'hero.subtitle': 'اكتشف مجموعة فريدة حيث يلتقي التقليد بالحداثة النابضة بالحياة.',
    'hero.cta': 'اكتشف المجموعة',
    'footer.rights': 'جميع الحقوق محفوظة.',
  },
  en: {
    'nav.home': 'Home',
    'nav.shop': 'Shop',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'Moroccan Craftsmanship in Pop Version',
    'hero.subtitle': 'Discover a unique collection where tradition meets vibrant modernity.',
    'hero.cta': 'Discover the collection',
    'footer.rights': 'All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
