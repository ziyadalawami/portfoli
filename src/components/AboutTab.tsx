import React, { useState } from 'react';
import { Briefcase, GraduationCap, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';

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
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    verifyLink: 'https://learn.365datascience.com/c/8ee1cfe9fd/'
  },
  {
    title: 'The Machine Learning Algorithms A-Z',
    organization: '365 Data Science',
    date: 'November 2024',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
    verifyLink: 'https://learn.365datascience.com/c/14a89f56fe/'
  }
];

const AboutTab = () => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const nextCert = () => {
    setCurrentCertIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevCert = () => {
    setCurrentCertIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const goToCert = (index: number) => {
    setCurrentCertIndex(index);
  };

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

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
        <div className="relative max-w-md mx-auto">
          {/* Certification Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-xl">
            <div className="relative h-32">
              <img
                src={certifications[currentCertIndex].image}
                alt={certifications[currentCertIndex].title}
                className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                loading="lazy"
                onClick={() => openModal(certifications[currentCertIndex].image)}
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-bold mb-2 text-gray-800">
                {certifications[currentCertIndex].title}
              </h4>
              <p className="text-[#27a102] mb-1">
                {certifications[currentCertIndex].organization}
              </p>
              <p className="text-gray-600 mb-3">
                {certifications[currentCertIndex].date}
              </p>
              <a
                href={certifications[currentCertIndex].verifyLink}
                className="inline-flex items-center text-[#27a102] hover:text-[#1fea00] text-sm"
              >
                <ExternalLink size={16} className="mr-1" />
                Verify Certificate
              </a>
            </div>
          </div>

          {/* Navigation Arrows */}
          {certifications.length > 1 && (
            <>
              <button
                onClick={prevCert}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-[#27a102] hover:bg-[#1fea00] text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextCert}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-[#27a102] hover:bg-[#1fea00] text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {certifications.length > 1 && (
            <div className="flex justify-center mt-4 space-x-2">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToCert(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentCertIndex
                      ? 'bg-[#1fea00]'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <X size={24} />
            </button>
            <img
              src={modalImage}
              alt="Certificate"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutTab;