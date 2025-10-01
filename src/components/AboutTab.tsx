import React, { useState } from 'react';
import { Briefcase, GraduationCap, ChevronDown, ChevronUp, Award, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Junior AI/ML Engineer',
    company: 'Tech Solutions Inc.',
    period: 'Jan 2024 - Present',
    description: 'Working on developing and deploying machine learning models for real-world applications.',
    achievements: [
      'Developed and deployed 3 ML models with 95% accuracy',
      'Collaborated with cross-functional teams to integrate ML solutions',
      'Optimized model performance reducing inference time by 40%'
    ],
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Docker', 'AWS']
  }
];

const education = [
  {
    institution: 'The British University in Egypt',
    degree: 'Bachelor of Science in Informatics and Computer Science',
    period: 'Sep 2020 - Jul 2024',
    description: 'Specialized coursework in Artificial Intelligence',
    gpa: '3.8/4.0',
    highlights: [
      'Dean\'s List for 3 consecutive semesters',
      'AI Research Project on Computer Vision',
      'President of Computer Science Society'
    ]
  }
];

const AboutTab = () => {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const [expandedEdu, setExpandedEdu] = useState<number | null>(null);

  return (
    <div className="space-y-16">
      {/* Experience Section */}
      <div>
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white mb-4">
            Work Experience
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1fea00] to-[#27a102] mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Timeline Line */}
              <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-[#1fea00] to-[#27a102] opacity-60"></div>
              
              {/* Timeline Icon */}
              <div className="absolute left-3 top-8 w-6 h-6 bg-[#1fea00] rounded-full flex items-center justify-center shadow-lg">
                <Briefcase size={14} className="text-black" />
              </div>

              {/* Content Card */}
              <div className="ml-16">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl border border-[#1c6000]/30 hover:border-[#27a102]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#1fea00]/10 group-hover:transform group-hover:scale-[1.02]">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h4 className="text-[#1fea00] text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                        {exp.role}
                      </h4>
                      <h5 className="text-white text-xl font-semibold mb-3">{exp.company}</h5>
                      <div className="flex items-center text-[#27a102] font-medium">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                    </div>
                    <button
                      onClick={() => setExpandedExp(expandedExp === index ? null : index)}
                      className="ml-4 p-2 rounded-full bg-[#1fea00]/10 hover:bg-[#1fea00]/20 text-[#1fea00] transition-all duration-300 hover:scale-110"
                    >
                      {expandedExp === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 mb-6 leading-relaxed text-lg">{exp.description}</p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#1fea00]/20 text-[#1fea00] rounded-full text-sm font-medium border border-[#1fea00]/30 hover:bg-[#1fea00]/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  {expandedExp === index && (
                    <div className="border-t border-[#1c6000]/30 pt-6 animate-fadeInUp">
                      <div className="flex items-center mb-4">
                        <Award size={18} className="text-[#1fea00] mr-2" />
                        <h6 className="text-white font-semibold text-lg">Key Achievements</h6>
                      </div>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-white/80">
                            <div className="w-2 h-2 bg-[#1fea00] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white mb-4">
            Education
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1fea00] to-[#27a102] mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Timeline Line */}
              <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-[#1fea00] to-[#27a102] opacity-60"></div>
              
              {/* Timeline Icon */}
              <div className="absolute left-3 top-8 w-6 h-6 bg-[#1fea00] rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap size={14} className="text-black" />
              </div>

              {/* Content Card */}
              <div className="ml-16">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl border border-[#1c6000]/30 hover:border-[#27a102]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#1fea00]/10 group-hover:transform group-hover:scale-[1.02]">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h4 className="text-[#1fea00] text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                        {item.institution}
                      </h4>
                      <h5 className="text-white text-xl font-semibold mb-3">{item.degree}</h5>
                      <div className="flex items-center text-[#27a102] font-medium mb-2">
                        <Calendar size={16} className="mr-2" />
                        {item.period}
                      </div>
                      {item.gpa && (
                        <div className="inline-block px-3 py-1 bg-[#1fea00]/20 text-[#1fea00] rounded-full text-sm font-semibold">
                          GPA: {item.gpa}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => setExpandedEdu(expandedEdu === index ? null : index)}
                      className="ml-4 p-2 rounded-full bg-[#1fea00]/10 hover:bg-[#1fea00]/20 text-[#1fea00] transition-all duration-300 hover:scale-110"
                    >
                      {expandedEdu === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed text-lg">{item.description}</p>

                  {/* Expanded Content */}
                  {expandedEdu === index && (
                    <div className="border-t border-[#1c6000]/30 pt-6 mt-6 animate-fadeInUp">
                      <div className="flex items-center mb-4">
                        <Award size={18} className="text-[#1fea00] mr-2" />
                        <h6 className="text-white font-semibold text-lg">Highlights</h6>
                      </div>
                      <ul className="space-y-3">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-white/80">
                            <div className="w-2 h-2 bg-[#1fea00] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTab;