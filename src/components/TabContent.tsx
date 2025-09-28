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
          <div className="bg-white/10 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'projects'
                  ? 'bg-[#27a102] text-white'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              PROJECTS
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'about'
                  ? 'bg-[#27a102] text-white'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              ABOUT & BACKGROUND
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'projects' && <ProjectsTab />}
          {activeTab === 'about' && <AboutTab />}
        </div>
      </div>
    </section>
  );
};

export default TabContent;