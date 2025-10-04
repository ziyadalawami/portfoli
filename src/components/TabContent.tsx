import React, { useState } from 'react';
import ProjectsTab from './ProjectsTab';
import AboutTab from './AboutTab';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const TabContent = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-12 bg-[#001a03]">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="flex justify-center mb-12">
          <div className="flex bg-black/30 rounded-full p-1 backdrop-blur-sm border border-[#1c6000]/30">
            <button
              onClick={() => setActiveTab(isRTL ? 'background' : 'projects')}
              className={`px-6 md:px-8 py-3 font-semibold transition-all duration-300 rounded-full relative text-sm md:text-base ${
                activeTab === (isRTL ? 'background' : 'projects')
                  ? 'text-black bg-[#1fea00] shadow-lg'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              aria-label={isRTL ? "View Background" : "View Projects"}
            >
              {isRTL ? t.background : t.projects}
            </button>
            <button
              onClick={() => setActiveTab(isRTL ? 'projects' : 'background')}
              className={`px-6 md:px-8 py-3 font-semibold transition-all duration-300 rounded-full relative text-sm md:text-base ${
                activeTab === (isRTL ? 'projects' : 'background')
                  ? 'text-black bg-[#1fea00] shadow-lg'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              aria-label={isRTL ? "View Projects" : "View Background"}
            >
              {isRTL ? t.projects : t.background}
            </button>
          </div>
        </div>

        <div className="min-h-[500px]">
          <div className={`transition-opacity duration-300 ${
            activeTab === 'projects' ? 'opacity-100' : 'opacity-0 hidden'
          }`}>
            {activeTab === 'projects' && <ProjectsTab />}
          </div>
          <div className={`transition-opacity duration-300 ${
            activeTab === 'background' ? 'opacity-100' : 'opacity-0 hidden'
          }`}>
            {activeTab === 'background' && <AboutTab />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabContent;