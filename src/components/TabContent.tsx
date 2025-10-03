import React, { useState } from 'react';
import ProjectsTab from './ProjectsTab';
import AboutTab from './AboutTab';

const TabContent = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <section id="about" className="py-12 bg-[#001a03]">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="flex justify-center mb-12">
          <div className="flex bg-black/30 rounded-full p-1 backdrop-blur-sm border border-[#1c6000]/30">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 md:px-8 py-3 font-semibold transition-all duration-300 rounded-full relative text-sm md:text-base ${
                activeTab === 'projects'
                  ? 'text-black bg-[#1fea00] shadow-lg shadow-[#1fea00]/20'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              aria-label="View Projects"
            >
              PROJECTS
            </button>
            <button
              onClick={() => setActiveTab('background')}
              className={`px-6 md:px-8 py-3 font-semibold transition-all duration-300 rounded-full relative text-sm md:text-base ${
                activeTab === 'background'
                  ? 'text-black bg-[#1fea00] shadow-lg shadow-[#1fea00]/20'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              aria-label="View Background"
            >
              BACKGROUND
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