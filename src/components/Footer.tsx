import React from 'react';
import { Github, Linkedin, MessageCircle, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-black py-12 mt-12">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t.contact}</h3>
            <div className="space-y-3">
              <a
                href="mailto:ziyad.ahmedalawami@gmail.com"
                className="flex items-center text-white/80 hover:text-[#1fea00] transition-all duration-300 group"
              >
                <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                ziyad.ahmedalawami@gmail.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center text-white/80 hover:text-[#1fea00] transition-all duration-300 group"
              >
                <Phone size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                +1 (234) 567-890
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t.quickLinks}</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="#top"
                className="text-white/80 hover:text-[#1fea00] transition-all duration-300 hover:translate-x-1 inline-block"
              >
                {t.backToTop}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t.connect}</h3>
            <div className="flex gap-4" style={{ flexDirection: 'row' }}>
              {[
                { icon: <Github size={24} />, href: '#', label: 'GitHub' },
                { icon: <Linkedin size={24} />, href: '#', label: 'LinkedIn' },
                { icon: <MessageCircle size={24} />, href: '#', label: 'WhatsApp' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-[#27a102] hover:text-[#1fea00] transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1c6000]">
          <p className="text-white/60 text-center">
            © {new Date().getFullYear()} Ziyad Ahmed. {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;