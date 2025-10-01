import React, { useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    role: 'Part-time AI instructor',
    company: 'NTI',
    period: 'July 2025 - Present',
    description: 'Working on developing and deploying machine learning models for real-world applications.',
    achievements: [
      'Developed and deployed 3 ML models with 95% accuracy',
      'Collaborated with cross-functional teams to integrate ML solutions'
    ]
  }
];

const education = [
  {
    institution: 'The British University in Egypt',
    degree: 'Bachelor of Science in Informatics and Computer Science',
    period: 'Sep 2020 - Jul 2024',
    description: 'Specialized in Artificial Intelligence'
  }
];

const AboutTab = () => {
  return (
    <div className="space-y-8">
      {/* Experience Section */}
      <div>
        <h3 className="text-3xl font-bold text-white mb-8">
          Work Experience
        </h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-8 before:bottom-0 before:w-px before:bg-[#1c6000]"
            >
              <Briefcase className="absolute left-0 top-2 text-[#27a102]" size={20} />
              <div className="bg-white/5 p-8 rounded-xl border border-[#1c6000]/20 hover:bg-white/10 transition-all duration-300 hover:border-[#27a102]/40">
                <h4 className="text-[#1fea00] text-2xl font-semibold mb-3">
                  {exp.role}
                </h4>
                <h5 className="text-white text-xl mb-3">{exp.company}</h5>
                <p className="text-[#27a102] mb-4 font-medium">{exp.period}</p>
                <p className="text-white/80 mb-6 leading-relaxed">{exp.description}</p>
                <ul className="list-disc list-inside text-white/80 space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <h3 className="text-3xl font-bold text-white mb-8">
          Education
        </h3>
        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-8 before:bottom-0 before:w-px before:bg-[#1c6000]"
            >
              <GraduationCap className="absolute left-0 top-2 text-[#27a102]" size={20} />
              <div className="bg-white/5 p-8 rounded-xl border border-[#1c6000]/20 hover:bg-white/10 transition-all duration-300 hover:border-[#27a102]/40">
                <h4 className="text-[#1fea00] text-2xl font-semibold mb-3">
                  {item.institution}
                </h4>
                <h5 className="text-white text-xl mb-3">{item.degree}</h5>
                <p className="text-[#27a102] mb-4 font-medium">{item.period}</p>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTab;