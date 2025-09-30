import React from 'react';
import { MessageCircle, Linkedin, Github } from 'lucide-react';

const Header = () => {
  // Social media links - set to null to hide the icon
  const socialLinks = {
    whatsapp: "https://wa.me/1234567890", // Replace with your WhatsApp number
    linkedin: "https://linkedin.com/in/yourprofile", // Replace with your LinkedIn profile
    github: "https://github.com/yourprofile" // Replace with your GitHub profile
  };

  return (
    <header className="bg-[#000a01] py-16 w-full">
      <div className="max-w-[1000px] mx-auto bg-[#001a03] px-6 py-8 border-0">
        {/* Mobile Layout - Centered */}
        <div className="block lg:hidden text-center">
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Ziyad Ahmed"
              className="w-32 h-32 rounded-full mx-auto object-cover border-0"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ziyad Ahmed
          </h1>
          <h2 className="text-xl md:text-2xl text-[#1fea00] font-semibold mb-6">
            Junior AI/ML Engineer
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-6">
            Passionate AI/ML engineer with expertise in developing intelligent solutions and machine learning models. 
            I specialize in transforming complex data into actionable insights and building scalable AI applications.
          </p>
          
          {/* Social Icons - Mobile */}
          <div className="flex justify-center space-x-6">
            {socialLinks.whatsapp && (
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#27a102] hover:text-[#1fea00] transition-colors"
              >
                <MessageCircle size={28} />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#27a102] hover:text-[#1fea00] transition-colors"
              >
                <Linkedin size={28} />
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#27a102] hover:text-[#1fea00] transition-colors"
              >
                <Github size={28} />
              </a>
            )}
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex-shrink-0">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Ziyad Ahmed"
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>
          
          <div className="flex-grow">
            <h1 className="text-5xl font-bold text-white mb-4">
              Ziyad Ahmed
            </h1>
            <h2 className="text-2xl text-[#1fea00] font-semibold mb-6">
              Junior AI/ML Engineer
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Passionate AI/ML engineer with expertise in developing intelligent solutions and machine learning models. 
              I specialize in transforming complex data into actionable insights and building scalable AI applications.
            </p>
            
            {/* Social Icons - Desktop */}
            <div className="flex space-x-6">
              {socialLinks.whatsapp && (
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#27a102] hover:text-[#1fea00] transition-colors"
                >
                  <MessageCircle size={32} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#27a102] hover:text-[#1fea00] transition-colors"
                >
                  <Linkedin size={32} />
                </a>
              )}
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#27a102] hover:text-[#1fea00] transition-colors"
                >
                  <Github size={32} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;