import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const MarqueeBar = () => {
  const { language, setLanguage, isRTL } = useLanguage();
  const t = translations[language];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black h-10 flex items-center justify-between border-b border-[#1c6000]/30">
      <div className="flex-1 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="text-white/90 text-sm font-medium whitespace-nowrap px-4">
              {t.marqueeText}
            </span>
            <span className="text-white/90 text-sm font-medium whitespace-nowrap px-4">
              {t.marqueeText}
            </span>
            <span className="text-white/90 text-sm font-medium whitespace-nowrap px-4">
              {t.marqueeText}
            </span>
          </div>
        </div>
      </div>

      <div className="relative group px-4">
        <button
          className="flex items-center gap-2 text-white/90 hover:text-[#1fea00] transition-colors"
          aria-label="Change language"
        >
          <Languages size={18} />
        </button>

        <div className="absolute right-4 top-full mt-2 bg-black border border-[#1c6000]/30 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <button
            onClick={() => setLanguage('ar')}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#1c6000]/20 transition-colors ${
              language === 'ar' ? 'text-[#1fea00]' : 'text-white/90'
            }`}
          >
            العربية
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#1c6000]/20 transition-colors ${
              language === 'en' ? 'text-[#1fea00]' : 'text-white/90'
            }`}
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarqueeBar;
