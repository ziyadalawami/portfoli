import React from 'react';
import { Github, Linkedin, MessageCircle, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:ziyad.ahmedalawami@gmail.com"
                className="flex items-center text-white/80 hover:text-[#1fea00]"
              >
                <Mail size={20} className="mr-2" />
                ziyad.ahmedalawami@gmail.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center text-white/80 hover:text-[#1fea00]"
              >
                <Phone size={20} className="mr-2" />
                +1 (234) 567-890
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="#top"
                className="text-white/80 hover:text-[#1fea00] transition-colors"
              >
                About Me
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[
                { icon: <MessageCircle size={24} />, href: '#' },
                { icon: <Linkedin size={24} />, href: '#' },
                { icon: <Github size={24} />, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-[#27a102] hover:text-[#1fea00]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1c6000]">
          <p className="text-white/60 text-center">
            © {new Date().getFullYear()} Ziyad Ahmed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;