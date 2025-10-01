import React from 'react';
import { MessageCircle, Linkedin, Github } from 'lucide-react';

const Header = () => {
  // Social media links - set to null to hide the icon
  const socialLinks = {
    whatsapp: "https://wa.me/1234567890", // Replace with your WhatsApp number
    linkedin: "https://linkedin.com/in/ziyadalawami", // Replace with your LinkedIn profile
    github: "https://github.com/yourprofile" // Replace with your GitHub profile
  };

  return (
    <header className="bg-[#000a01] w-full">
      <div className="max-w-[1000px] mx-auto bg-[#001a03] px-6 py-6">
        {/* Centered Layout for All Screens */}
        <div className="text-center">
          <div className="mb-8">
            <img
              src="./images/Untitled.png"
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
            Passionate about creating intelligent solutions that make a difference. I transform complex problems into elegant AI/ML applications, 
            bridging the gap between cutting-edge technology and real-world impact.
          </p>
          
          {/* Social Icons */}
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
      </div>
    </header>
  );
};

export default Header;