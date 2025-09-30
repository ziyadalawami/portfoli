import React, { useState } from 'react';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 bg-[#27a102] hover:bg-[#1fea00] text-white p-3 rounded-full shadow-lg transition-all duration-200 flex items-center space-x-2"
      title={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <Globe size={20} />
      <span className="font-semibold text-sm">
        {language === 'en' ? 'عربي' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;