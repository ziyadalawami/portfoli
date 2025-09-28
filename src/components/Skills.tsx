import React from 'react';
import { Code2, Brain, Network, Database } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code2 size={24} />,
    skills: ['Python', 'C++', 'SQL', 'Java']
  },
  {
    title: 'Machine Learning',
    icon: <Brain size={24} />,
    skills: [
      'Linear Regression',
      'Logistic Regression',
      'Decision Trees',
      'Random Forest',
      'Gradient Boosting',
      'SVM',
      'KNN',
      'Naive Bayes',
      'K-Means Clustering'
    ]
  },
  {
    title: 'Deep Learning',
    icon: <Network size={24} />,
    skills: ['ANN', 'CNN', 'RNN', 'LSTM', 'GRU']
  },
  {
    title: 'Libraries & Frameworks',
    icon: <Database size={24} />,
    skills: [
      'NumPy',
      'Pandas',
      'TensorFlow',
      'PyTorch',
      'Keras',
      'Scikit-learn',
      'Matplotlib',
      'Seaborn'
    ]
  }
];

const SkillCard = ({ title, skills, icon }) => (
  <div className="bg-white p-6 rounded shadow-lg hidden md:block">
    <div className="text-[#27a102] mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-[#27a102]/10 text-[#27a102] rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const MobileSkills = () => {
  const allSkills = skillCategories.reduce((acc, category) => [...acc, ...category.skills], []);
  
  return (
    <div className="flex flex-wrap justify-center gap-2 md:hidden">
      {allSkills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-white text-[#27a102] rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#001a03]">
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Skills & Expertise
        </h2>
        
        <MobileSkills />
        
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;