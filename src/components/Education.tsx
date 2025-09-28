import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'The British University in Egypt',
      degree: 'Bachelor of Science in Informatics and Computer Science',
      period: 'Sep 2020 - Jul 2024',
      description: 'Specialized coursework in Artificial Intelligence'
    }
  ];

  return (
    <section id="education" className="py-20 bg-[#001a03]">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#1c6000]"
            >
              <div className="absolute left-0 top-0 transform -translate-x-1/2 bg-[#001a03]">
                <GraduationCap className="text-[#27a102]" size={24} />
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-[#1c6000]/20">
                <h3 className="text-[#27a102] text-xl font-semibold mb-2">
                  {item.institution}
                </h3>
                <h4 className="text-white text-lg mb-2">{item.degree}</h4>
                <p className="text-white/60 mb-2">{item.period}</p>
                <p className="text-white/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;