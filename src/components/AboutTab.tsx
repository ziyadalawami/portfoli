import React from 'react';
import { Briefcase, GraduationCap, Download } from 'lucide-react';
import SkillsSection from './SkillsSection';

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
  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/YOUR_FILE_ID/view', '_blank');
  };

  return (
    <div className="space-y-12">
      <div className="flex justify-center mb-8">
        <button
          onClick={handleResumeDownload}
          className="flex items-center gap-3 px-6 py-3 bg-[#1fea00] text-black font-semibold rounded-lg hover:bg-[#27a102] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <Download size={20} />
          Download Resume
        </button>
      </div>

      <SkillsSection />

      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-1 w-12 bg-[#1fea00] rounded-full"></div>
          <h3 className="text-3xl font-bold text-white">
            Work Experience
          </h3>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-8 before:bottom-0 before:w-px before:bg-[#1c6000]"
            >
              <Briefcase className="absolute left-0 top-2 text-[#27a102]" size={20} />
              <div className="bg-white/5 p-6 md:p-8 rounded-xl border border-[#1c6000]/20 hover:bg-white/10 transition-all duration-300 hover:border-[#27a102]/40 hover:shadow-lg hover:shadow-[#1fea00]/10">
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

      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-1 w-12 bg-[#1fea00] rounded-full"></div>
          <h3 className="text-3xl font-bold text-white">
            Education
          </h3>
        </div>
        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-8 before:bottom-0 before:w-px before:bg-[#1c6000]"
            >
              <GraduationCap className="absolute left-0 top-2 text-[#27a102]" size={20} />
              <div className="bg-white/5 p-6 md:p-8 rounded-xl border border-[#1c6000]/20 hover:bg-white/10 transition-all duration-300 hover:border-[#27a102]/40 hover:shadow-lg hover:shadow-[#1fea00]/10">
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