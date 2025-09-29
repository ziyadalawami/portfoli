import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#001a03] py-16 w-full">
      <div className="px-6 text-center">
        {/* Profile Photo */}
        <div className="mb-8">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="Ziyad Ahmed"
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#1fea00]/20"
          />
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ziyad Ahmed
        </h1>
        <h2 className="text-xl md:text-2xl text-[#1fea00] font-semibold mb-6">
          Junior AI/ML Engineer
        </h2>

        {/* Short Description */}
        <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          Passionate AI/ML engineer with expertise in developing intelligent solutions and machine learning models. 
          I specialize in transforming complex data into actionable insights and building scalable AI applications.
        </p>
      </div>
    </header>
  );
};

export default Header;