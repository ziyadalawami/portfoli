import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#001a03]">
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-white/90 text-lg leading-relaxed">
              As a Junior AI/ML Engineer, I specialize in developing intelligent solutions that leverage the power of machine learning. My journey combines academic excellence with hands-on project experience, focusing on creating practical applications that solve real-world challenges.
            </p>
          </div>

          <div>
            <p className="text-white/90 text-lg leading-relaxed">
              My focus lies in developing and implementing machine learning models that drive meaningful results. Through continuous learning and practical application, I stay at the forefront of AI advancements and best practices in the field of machine learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;