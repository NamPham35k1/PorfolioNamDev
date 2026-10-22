import React, { createContext, useContext, useState } from 'react';

export type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  vi: {
    'nav.home': 'Trang chủ',
    'nav.projects': 'Dự án',
    'nav.services': 'Dịch vụ',
    'nav.skills': 'Kỹ năng',
    'nav.about': 'Giới thiệu',
    'nav.blog': 'Bài viết',
    'nav.contact': 'Liên hệ',
    'nav.hire': 'Thuê làm dự án',
    'nav.cv': 'Tải CV',
    'hero.badge': 'Sẵn sàng nhận dự án Freelance',
    'hero.greeting': 'Xin chào, tôi là',
    'hero.role': 'Android & Web Developer',
    'hero.desc': 'Mình có kinh nghiệm phát triển và maintain các ứng dụng Android thực tế, tối ưu hóa Monetization (AdMob, IAP), Firebase & Full-stack Web.',
    'hero.viewWork': 'Xem các dự án',
    'hero.hireMe': 'Liên hệ ngay',
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.skills': 'Skills',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.hire': 'Hire Me',
    'nav.cv': 'Resume',
    'hero.badge': 'Available for Freelance Projects',
    'hero.greeting': "Hi, I'm",
    'hero.role': 'Android & Web Developer',
    'hero.desc': 'Specializing in native Android development, AdMob & IAP monetization, Firebase cloud services, and full-stack web platforms.',
    'hero.viewWork': 'View My Work',
    'hero.hireMe': 'Hire Me',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const t = (key: string): string => {
    return translations[language][key] || key;
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
