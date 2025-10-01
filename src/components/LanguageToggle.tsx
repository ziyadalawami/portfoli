import React from 'react';

interface LanguageToggleProps {
  isArabic: boolean;
  onToggle: () => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ isArabic, onToggle }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-black/80 backdrop-blur-sm rounded-full p-1 border border-[#1c6000]/30">
        <div className="flex items-center relative">
          {/* Background slider */}
          <div 
            className={`absolute top-0 bottom-0 w-1/2 bg-[#1fea00] rounded-full transition-transform duration-300 ease-in-out ${
              isArabic ? 'transform translate-x-full' : 'transform translate-x-0'
            }`}
          />
          
          {/* English Button */}
          <button
            onClick={!isArabic ? undefined : onToggle}
            className={`relative z-10 px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-full ${
              !isArabic 
                ? 'text-black' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            EN
          </button>
          
          {/* Arabic Button */}
          <button
            onClick={isArabic ? undefined : onToggle}
            className={`relative z-10 px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-full ${
              isArabic 
                ? 'text-black' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle;