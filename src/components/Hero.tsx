import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-between bg-[#001a03]">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-[1000px] mx-auto px-6 text-center py-20">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-12 rounded-full overflow-hidden border-4 border-[#27a102] mt-16">
            <img
              src="./assets/images/my-pfp.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Ziyad Ahmed
          </h1>
          <h2 className="text-xl md:text-2xl text-[#27a102] mb-8">
            Junior AI/ML Engineer
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg">
            Transforming complex challenges into intelligent solutions, one machine learning model at a time
          </p>
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-3 bg-[#27a102] text-white rounded hover:bg-[#1fea00] transition-colors duration-200"
          >
            View Work
          </a>
        </div>
      </div>
      
      <div className="pb-12 flex justify-center">
        <ChevronDown className="text-[#1fea00] animate-bounce" size={32} />
      </div>
    </section>
  );
};

export default Hero;