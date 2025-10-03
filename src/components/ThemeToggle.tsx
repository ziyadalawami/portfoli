import React from 'react';
import { Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, language, toggleTheme, toggleLanguage } = useTheme();

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-3">
      <button
        onClick={toggleTheme}
        className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-[#1c6000]/30 hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? (
          <Sun size={20} className="text-[#1fea00]" />
        ) : (
          <Moon size={20} className="text-[#1fea00]" />
        )}
      </button>

      <button
        onClick={toggleLanguage}
        className="px-4 py-3 rounded-full bg-white/10 backdrop-blur-md border border-[#1c6000]/30 hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg flex items-center gap-2"
        aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
      >
        <Globe size={18} className="text-[#1fea00]" />
        <span className="text-[#1fea00] font-semibold text-sm">
          {language === 'en' ? 'AR' : 'EN'}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
