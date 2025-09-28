import React, { useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management',
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
    description: 'Collaborative task management tool with real-time updates',
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
    description: 'AI-powered content generation tool for marketers',
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

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
    setCurrentSlide(0);
  };

  const resetCategories = () => {
    setSelectedCategories([]);
    setCurrentSlide(0);
  };

  return (
    <section id="projects" className="py-20 bg-[#001a03]">
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>

        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-hide">
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

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-2xl mx-auto p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-gray-700 font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.categories.map((category, idx) => (
                        <span
                          key={`cat-${idx}`}
                          className="px-3 py-1 bg-[#27a102]/10 text-[#27a102] rounded-full text-sm font-semibold"
                        >
                          {category}
                        </span>
                      ))}
                      {project.tags.map((tag, idx) => (
                        <span
                          key={`tag-${idx}`}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      {project.github && (
                        <a
                          href={project.github}
                          className="flex items-center text-gray-700 hover:text-[#1fea00]"
                        >
                          <Github size={20} className="mr-2" />
                          Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          className="flex items-center text-gray-700 hover:text-[#1fea00]"
                        >
                          <ExternalLink size={20} className="mr-2" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {filteredProjects.length > 0 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <div className="flex justify-center space-x-2 mt-6">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-[#1fea00]' : 'bg-[#1c6000]'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;