import React, { useState } from 'react';
import ProjectsTab from './ProjectsTab';
import AboutTab from './AboutTab';

const TabContent = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <section id="about" className="py-12 bg-[#001a03]">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-black/30 rounded-full p-1 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-8 py-3 font-semibold transition-all duration-300 rounded-full relative ${
                activeTab === 'projects'
                  ? 'text-black bg-[#1fea00] shadow-lg'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              PROJECTS
            </button>
            <button
              onClick={() => setActiveTab('background')}
              className={`px-8 py-3 font-semibold transition-all duration-300 rounded-full relative ${
                activeTab === 'background'
                  ? 'text-black bg-[#1fea00] shadow-lg'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              BACKGROUND
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px] transition-all duration-500 ease-in-out">
          {activeTab === 'projects' && <ProjectsTab />}
          {activeTab === 'background' && <AboutTab />}
        </div>
      </div>
    </section>
  );
};

export default TabContent;