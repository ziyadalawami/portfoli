import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Junior AI/ML Engineer',
    company: 'Tech Solutions Inc.',
    period: 'Jan 2024 - Present',
    description: 'Working on developing and deploying machine learning models for real-world applications.',
    achievements: [
      'Developed and deployed 3 ML models with 95% accuracy',
      'Collaborated with cross-functional teams to integrate ML solutions'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#001a03]">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#1c6000]"
            >
              <div className="absolute left-0 top-0 transform -translate-x-1/2 bg-[#001a03]">
                <Briefcase className="text-[#27a102]" size={24} />
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-[#1c6000]/20">
                <h3 className="text-[#27a102] text-xl font-semibold mb-2">
                  {exp.role}
                </h3>
                <h4 className="text-white text-lg mb-2">{exp.company}</h4>
                <p className="text-white/60 mb-4">{exp.period}</p>
                <p className="text-white/80 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside text-white/80 space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;