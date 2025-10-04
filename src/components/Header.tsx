import React from 'react';
import { Github, Linkedin, MessageCircle, ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Header = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const socialLinks = {
    github: "https://github.com/yourprofile",
    whatsapp: "https://wa.me/1234567890",
    linkedin: "https://linkedin.com/in/ziyadalawami"
  };

  const scrollToProjects = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-[#000a01] w-full">
      <div className="max-w-[1000px] mx-auto bg-[#001a03] px-6 py-6">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="./images/Untitled.png"
              alt="Ziyad Ahmed"
              className="w-32 h-32 rounded-full mx-auto object-cover border-0"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-[#1fea00] font-semibold mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-6">
            {t.description}
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#27a102] hover:text-[#1fea00] transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github size={28} />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#27a102] hover:text-[#1fea00] transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={28} />
              </a>
            )}
            {socialLinks.whatsapp && (
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#27a102] hover:text-[#1fea00] transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle size={28} />
              </a>
            )}
          </div>

          <button
            onClick={scrollToProjects}
            className="mx-auto flex items-center gap-2 text-[#27a102] hover:text-[#1fea00] transition-all duration-300 group"
            aria-label="Scroll to projects"
          >
            <span className="text-sm font-medium">{t.exploreWork}</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;