import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp, Filter } from 'lucide-react';

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
    live: '#'
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
    live: null
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
    live: '#'
  }
];

const ProjectsTab = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Get unique categories
  const allCategories = Array.from(
    new Set(projects.flatMap(project => project.categories))
  ).sort();

  const filteredProjects = selectedCategories.length === 0
    ? projects
    : projects.filter(project =>
        selectedCategories.some(cat => project.categories.includes(cat))
      );

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const resetCategories = () => {
    setSelectedCategories([]);
  };

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div>
      {/* Filter Section */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 overflow-x-auto pb-4">
          <Filter size={20} className="text-white flex-shrink-0" />
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                selectedCategories.includes(category)
                  ? 'bg-[#1fea00] text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
          {selectedCategories.length > 0 && (
            <button
              onClick={resetCategories}
              className="px-4 py-2 rounded-full text-sm whitespace-nowrap bg-red-500/20 text-red-500 hover:bg-red-500/30"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-xl"
          >
            {/* Project Header - Always Visible */}
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-[#27a102] hover:text-[#1fea00] transition-colors"
                    >
                      {expandedProject === index ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </button>
                  </div>
                  <p className="text-gray-600 mb-3">
                    {expandedProject === index ? project.fullDescription : project.shortDescription}
                  </p>
                  
                  {/* Tags - Always Visible */}
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((category, idx) => (
                      <span
                        key={`cat-${idx}`}
                        className="px-3 py-1 bg-[#27a102]/10 text-[#27a102] rounded-full text-sm font-semibold"
                      >
                        {category}
                      </span>
                    ))}
                    {project.tags.slice(0, expandedProject === index ? project.tags.length : 3).map((tag, idx) => (
                      <span
                        key={`tag-${idx}`}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                    {expandedProject !== index && project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedProject === index && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="pt-4">
                  <h4 className="text-gray-700 font-semibold mb-3">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>

                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center text-gray-700 hover:text-[#1fea00] transition-colors"
                      >
                        <Github size={20} className="mr-2" />
                        View Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="flex items-center text-gray-700 hover:text-[#1fea00] transition-colors"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-white/60 text-lg">No projects match the selected filters.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsTab;