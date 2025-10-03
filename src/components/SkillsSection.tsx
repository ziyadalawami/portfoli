import React from 'react';
import { Code2, Brain, Database, Globe, Cloud, Terminal } from 'lucide-react';

const skills = [
  {
    category: 'Machine Learning & AI',
    icon: <Brain size={24} />,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV']
  },
  {
    category: 'Programming Languages',
    icon: <Code2 size={24} />,
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C++']
  },
  {
    category: 'Web Development',
    icon: <Globe size={24} />,
    skills: ['React', 'Node.js', 'Express', 'Redux', 'Tailwind CSS']
  },
  {
    category: 'Databases',
    icon: <Database size={24} />,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis']
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud size={24} />,
    skills: ['AWS', 'Docker', 'Git', 'CI/CD']
  },
  {
    category: 'Tools & Frameworks',
    icon: <Terminal size={24} />,
    skills: ['Jupyter', 'VS Code', 'Postman', 'FastAPI']
  }
];

const SkillsSection = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-10">
        <div className="h-1 w-12 bg-[#1fea00] rounded-full"></div>
        <h3 className="text-3xl font-bold text-white">
          Skills & Technologies
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((category, index) => (
          <div
            key={index}
            className="bg-white/5 p-6 rounded-xl border border-[#1c6000]/20 hover:bg-white/10 transition-all duration-300 hover:border-[#27a102]/40 hover:shadow-lg hover:shadow-[#1fea00]/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-[#1fea00]">
                {category.icon}
              </div>
              <h4 className="text-xl font-semibold text-white">
                {category.category}
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-[#27a102]/20 text-[#1fea00] rounded-full text-sm border border-[#27a102]/30 hover:bg-[#27a102]/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
