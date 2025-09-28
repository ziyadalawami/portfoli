import React from 'react';

const Header = () => {
  return (
    <section id="home" className="pt-20 pb-12 bg-[#001a03]">
      <div className="max-w-[1000px] mx-auto px-6 text-center">
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-[#27a102]">
          <img
            src="./assets/images/my-pfp.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ziyad Ahmed
        </h1>
        <h2 className="text-xl md:text-2xl text-[#27a102] mb-6">
          Junior AI/ML Engineer
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          Transforming complex challenges into intelligent solutions, one machine learning model at a time. I specialize in developing practical AI applications that solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default Header;