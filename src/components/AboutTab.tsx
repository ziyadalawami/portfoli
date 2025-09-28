import React from 'react';
import { Briefcase, GraduationCap, ExternalLink } from 'lucide-react';

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

const education = [
  {
    institution: 'The British University in Egypt',
    degree: 'Bachelor of Science in Informatics and Computer Science',
    period: 'Sep 2020 - Jul 2024',
    description: 'Specialized coursework in Artificial Intelligence'
  }
];

const certifications = [
  {
    title: 'The Machine Learning Process A-Z',
    organization: '365 Data Science',
    date: 'November 2024',
    image: './assets/images/ml-process.jpg',
    verifyLink: 'https://learn.365datascience.com/c/8ee1cfe9fd/'
  },
  {
    title: 'The Machine Learning Algorithms A-Z',
    organization: '365 Data Science',
    date: 'November 2024',
    image: './assets/images/ml-algorithms.jpg',
    verifyLink: 'https://learn.365datascience.com/c/14a89f56fe/'
  }
];

const AboutTab = () => {
  return (
    <div className="space-y-12">
      {/* Experience Section */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8">Work Experience</h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#1c6000]"
            >
              <div className="absolute left-0 top-0 transform -translate-x-1/2 bg-[#001a03]">
                <Briefcase className="text-[#27a102]" size={24} />
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-[#1c6000]/20">
                <h4 className="text-[#27a102] text-xl font-semibold mb-2">
                  {exp.role}
                </h4>
                <h5 className="text-white text-lg mb-2">{exp.company}</h5>
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

      {/* Education Section */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-[#1c6000]"
            >
              <div className="absolute left-0 top-0 transform -translate-x-1/2 bg-[#001a03]">
                <GraduationCap className="text-[#27a102]" size={24} />
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-[#1c6000]/20">
                <h4 className="text-[#27a102] text-xl font-semibold mb-2">
                  {item.institution}
                </h4>
                <h5 className="text-white text-lg mb-2">{item.degree}</h5>
                <p className="text-white/60 mb-2">{item.period}</p>
                <p className="text-white/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8">Certifications</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-xl">
              <div className="relative h-32">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold mb-2 text-gray-800">{cert.title}</h4>
                <p className="text-[#27a102] mb-1">{cert.organization}</p>
                <p className="text-gray-600 mb-3">{cert.date}</p>
                <a
                  href={cert.verifyLink}
                  className="inline-flex items-center text-[#27a102] hover:text-[#1fea00] text-sm"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Verify Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTab;