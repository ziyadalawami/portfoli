import React, { useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const experiences = [
  {
    role: 'Junior AI/ML Engineer',
    company: 'Tech Solutions Inc.',
    location: 'San Francisco, CA',
    period: 'Jan 2024 - Present',
    description: 'Working on developing and deploying machine learning models for real-world applications.',
    achievements: [
      'Developed and deployed 3 ML models with 95% accuracy',
      'Collaborated with cross-functional teams to integrate ML solutions',
      'Reduced model inference time by 40% through optimization'
    ],
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Docker', 'AWS']
  }
];

const education = [
  {
    institution: 'The British University in Egypt',
    degree: 'Bachelor of Science in Informatics and Computer Science',
    location: 'Cairo, Egypt',
    period: 'Sep 2020 - Jul 2024',
    description: 'Specialized coursework in Artificial Intelligence, Machine Learning, and Data Science.',
    gpa: '3.8/4.0',
    achievements: [
      'Dean\'s List for 6 consecutive semesters',
      'Led AI research project on computer vision',
      'Published paper on neural network optimization'
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
          <div className="w-24 h-1 bg-gradient-to-r from-[#27a102] to-[#1fea00] mx-auto rounded-full"></div>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-12 group"
            >
              {/* Timeline Line */}
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#27a102] to-[#1c6000] group-last:hidden"></div>
              
              {/* Timeline Icon */}
              <div className="absolute left-3 top-3 w-6 h-6 bg-[#27a102] rounded-full flex items-center justify-center border-4 border-[#001a03] group-hover:bg-[#1fea00] transition-all duration-300 group-hover:scale-110">
                <Briefcase size={12} className="text-[#001a03]" />
              </div>
              
              {/* Content Card */}
              <div className="bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-sm p-8 rounded-2xl border border-[#1c6000]/30 hover:border-[#27a102]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#1fea00]/10 group-hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-[#1fea00] text-2xl font-bold mb-2">
                      {exp.role}
                    </h4>
                    <div className="flex items-center text-white text-lg mb-2">
                      <span className="font-semibold">{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="mx-2 text-[#27a102]">•</span>
                          <MapPin size={16} className="text-[#27a102] mr-1" />
                          <span className="text-white/80">{exp.location}</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center text-[#27a102] font-medium mb-4">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedExp(expandedExp === index ? null : index)}
                    className="ml-4 px-4 py-2 bg-[#27a102]/20 hover:bg-[#27a102]/30 text-[#1fea00] rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    {expandedExp === index ? 'Less' : 'More'}
                  </button>
                </div>
                
                <p className="text-white/90 mb-6 leading-relaxed text-lg">{exp.description}</p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#27a102]/20 text-[#1fea00] rounded-full text-sm font-medium border border-[#27a102]/30 hover:bg-[#27a102]/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Achievements - Expandable */}
                {expandedExp === index && (
                  <div className="border-t border-[#1c6000]/30 pt-6 animate-fadeInUp">
                    <div className="flex items-center mb-4">
                      <Award size={20} className="text-[#27a102] mr-2" />
                      <h5 className="text-white font-semibold text-lg">Key Achievements</h5>
                    </div>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-[#1fea00] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-white/90 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
          <div className="w-24 h-1 bg-gradient-to-r from-[#27a102] to-[#1fea00] mx-auto rounded-full"></div>
        </div>
        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative pl-12 group"
            >
              {/* Timeline Line */}
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#27a102] to-[#1c6000] group-last:hidden"></div>
              
              {/* Timeline Icon */}
              <div className="absolute left-3 top-3 w-6 h-6 bg-[#27a102] rounded-full flex items-center justify-center border-4 border-[#001a03] group-hover:bg-[#1fea00] transition-all duration-300 group-hover:scale-110">
                <GraduationCap size={12} className="text-[#001a03]" />
              </div>
              
              {/* Content Card */}
              <div className="bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-sm p-8 rounded-2xl border border-[#1c6000]/30 hover:border-[#27a102]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#1fea00]/10 group-hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-[#1fea00] text-2xl font-bold mb-2">
                      {item.institution}
                    </h4>
                    <div className="flex items-center text-white text-lg mb-2">
                      <span className="font-semibold">{item.degree}</span>
                      {item.location && (
                        <>
                          <span className="mx-2 text-[#27a102]">•</span>
                          <MapPin size={16} className="text-[#27a102] mr-1" />
                          <span className="text-white/80">{item.location}</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center text-[#27a102] font-medium mb-2">
                      <Calendar size={16} className="mr-2" />
                      {item.period}
                    </div>
                    {item.gpa && (
                      <div className="text-[#1fea00] font-semibold">
                        GPA: {item.gpa}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => setExpandedEdu(expandedEdu === index ? null : index)}
                    className="ml-4 px-4 py-2 bg-[#27a102]/20 hover:bg-[#27a102]/30 text-[#1fea00] rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    {expandedEdu === index ? 'Less' : 'More'}
                  </button>
                </div>
                
                <p className="text-white/90 leading-relaxed text-lg">{item.description}</p>
                
                {/* Achievements - Expandable */}
                {expandedEdu === index && item.achievements && (
                  <div className="border-t border-[#1c6000]/30 pt-6 mt-6 animate-fadeInUp">
                    <div className="flex items-center mb-4">
                      <Award size={20} className="text-[#27a102] mr-2" />
                      <h5 className="text-white font-semibold text-lg">Academic Achievements</h5>
                    </div>
                    <ul className="space-y-3">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-[#1fea00] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-white/90 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTab;