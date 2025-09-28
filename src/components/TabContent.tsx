import React, { useState } from 'react';
import ProjectsTab from './ProjectsTab';
import AboutTab from './AboutTab';

const TabContent = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <section className="py-8 bg-[#001a03]">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex border-b border-white/20">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-8 py-4 font-semibold transition-all duration-200 relative ${
                activeTab === 'projects'
                  ? 'text-[#1fea00]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              PROJECTS
              {activeTab === 'projects' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1fea00]"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('background')}
              className={`px-8 py-4 font-semibold transition-all duration-200 relative ${
                activeTab === 'background'
                  ? 'text-[#1fea00]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              BACKGROUND
              {activeTab === 'background' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1fea00]"></div>
              )}
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'projects' && <ProjectsTab />}
          {activeTab === 'background' && <AboutTab />}
        </div>
      </div>
    </section>
  );
};

export default TabContent;