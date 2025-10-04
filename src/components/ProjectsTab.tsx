import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations, projectTranslations } from '../translations/translations';

const projects = [
  {
    title: 'E-Commerce Platform',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
    shortDescription: 'A full-featured e-commerce platform with real-time inventory management and ML-based recommendations...',
    fullDescription: 'A comprehensive e-commerce platform built with modern technologies, featuring real-time inventory management, secure payment processing, and an intelligent recommendation system powered by machine learning algorithms.',
    achievements: [
      'Reduced loading time by 40% through optimization',
      'Implemented ML-based recommendation system',
      'Increased conversion rate by 25%'
    ],
    categories: ['ML', 'Front-end', 'Back-end'],
    tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
    github: '#',
    live: '#',
    demo: '#'
  },
  {
    title: 'Task Management App',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
    shortDescription: 'Collaborative task management tool with real-time updates and team collaboration features...',
    fullDescription: 'A powerful collaborative task management application that enables teams to organize, track, and complete projects efficiently. Features real-time updates, file sharing, and advanced project analytics.',
    achievements: [
      'Served 10k+ daily active users',
      'Achieved 99.9% uptime',
      'Reduced task completion time by 30%'
    ],
    categories: ['Front-end', 'Back-end'],
    tags: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
    github: '#',
    live: null,
    demo: '#'
  },
  {
    title: 'AI Content Generator',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    shortDescription: 'AI-powered content generation tool for marketers using advanced NLP models...',
    fullDescription: 'An intelligent content generation platform that leverages advanced natural language processing models to create high-quality marketing content, blog posts, and social media content at scale.',
    achievements: [
      'Generated 1M+ articles',
      'Achieved 95% user satisfaction',
      'Reduced content creation time by 60%'
    ],
    categories: ['ML', 'DL', 'NLP'],
    tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    github: null,
    live: '#',
    demo: null
  }
];

const ProjectsTab = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const pt = projectTranslations[language];

  const projectsList = [
    { ...pt.ecommerce, image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400', categories: ['ML', 'Front-end', 'Back-end'], tags: ['React', 'Node.js', 'MongoDB', 'Redux'], github: '#', live: '#', demo: '#' },
    { ...pt.taskManagement, image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400', categories: ['Front-end', 'Back-end'], tags: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'], github: '#', live: null, demo: '#' },
    { ...pt.aiContent, image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400', categories: ['ML', 'DL', 'NLP'], tags: ['Python', 'TensorFlow', 'React', 'FastAPI'], github: null, live: '#', demo: null }
  ];

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div>
      <div className="mb-8 text-center">
        <p className="text-white/60 text-sm">{t.clickDetails}</p>
      </div>
      <div className="space-y-6">
        {projectsList.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-8">
              <div className={`flex flex-col md:flex-row items-start space-y-4 md:space-y-0 ${isRTL ? 'md:space-x-reverse md:space-x-4' : 'md:space-x-4'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-24 h-48 md:h-24 object-cover rounded-xl flex-shrink-0 shadow-md"
                />
                <div className={`flex-grow ${isRTL ? 'text-right' : ''}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-[#27a102] hover:text-[#1fea00] transition-all duration-200 hover:scale-110 p-2 rounded-full hover:bg-gray-100"
                      aria-label={expandedProject === index ? 'Collapse project details' : 'Expand project details'}
                    >
                      {expandedProject === index ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {expandedProject === index ? project.fullDescription : project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.categories.map((category, idx) => (
                      <span
                        key={`cat-${idx}`}
                        className="px-4 py-2 bg-[#27a102]/10 text-[#27a102] rounded-full text-sm font-semibold border border-[#27a102]/20"
                      >
                        {category}
                      </span>
                    ))}
                    {project.tags.slice(0, expandedProject === index ? project.tags.length : 3).map((tag, idx) => (
                      <span
                        key={`tag-${idx}`}
                        className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {expandedProject !== index && project.tags.length > 3 && (
                      <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedProject === index && (
              <div className="px-8 pb-8 border-t border-gray-100 bg-gray-50/50">
                <div className="pt-6">
                  <h4 className={`text-gray-700 font-semibold mb-4 text-lg ${isRTL ? 'text-right' : ''}`}>{t.keyAchievements}</h4>
                  <ul className={`list-disc text-gray-600 space-y-3 mb-8 ${isRTL ? 'list-inside text-right' : 'list-inside'}`}>
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-4 ${isRTL ? 'justify-end' : ''}`}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-[#1fea00] hover:text-black transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        <Github size={20} className={isRTL ? 'ml-2' : 'mr-2'} />
                        {t.sourceCode}
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-[#27a102] text-white rounded-lg hover:bg-[#1fea00] hover:text-black transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        <ExternalLink size={20} className={isRTL ? 'ml-2' : 'mr-2'} />
                        {t.liveProject}
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-[#1fea00] hover:text-black transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        <Play size={20} className={isRTL ? 'ml-2' : 'mr-2'} />
                        {t.demoVideo}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsTab;