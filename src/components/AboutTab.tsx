import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations, experienceTranslations, educationTranslations } from '../translations/translations';

const AboutTab = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const exp = experienceTranslations[language];
  const edu = educationTranslations[language];

  const experiences = [exp];
  const education = [edu];
  return (
    <div className="space-y-12">
      <div>
        <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="h-1 w-12 bg-[#1fea00] rounded-full"></div>
          <h3 className="text-3xl font-bold text-white">
            {t.workExperience}
          </h3>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative ${isRTL ? 'pr-8' : 'pl-8'} before:content-[''] before:absolute ${isRTL ? 'before:right-3' : 'before:left-3'} before:top-8 before:bottom-0 before:w-px before:bg-[#1c6000]`}
            >
              <Briefcase className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-2 text-[#27a102]`} size={20} />
              <div className="bg-white/5 p-6 md:p-8 rounded-xl border border-[#1c6000]/20 hover:bg-white/10 transition-all duration-300 hover:border-[#27a102]/40 hover:shadow-lg">
                <h4 className="text-[#1fea00] text-2xl font-semibold mb-3">
                  {exp.role}
                </h4>
                <h5 className="text-white text-xl mb-3">{exp.company}</h5>
                <p className="text-[#27a102] mb-4 font-medium">{exp.period}</p>
                <p className="text-white/80 mb-6 leading-relaxed">{exp.description}</p>
                <ul className="list-disc list-inside text-white/80 space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="h-1 w-12 bg-[#1fea00] rounded-full"></div>
          <h3 className="text-3xl font-bold text-white">
            {t.education}
          </h3>
        </div>
        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className={`relative ${isRTL ? 'pr-8' : 'pl-8'} before:content-[''] before:absolute ${isRTL ? 'before:right-3' : 'before:left-3'} before:top-8 before:bottom-0 before:w-px before:bg-[#1c6000]`}
            >
              <GraduationCap className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-2 text-[#27a102]`} size={20} />
              <div className="bg-white/5 p-6 md:p-8 rounded-xl border border-[#1c6000]/20 hover:bg-white/10 transition-all duration-300 hover:border-[#27a102]/40 hover:shadow-lg">
                <h4 className="text-[#1fea00] text-2xl font-semibold mb-3">
                  {item.institution}
                </h4>
                <h5 className="text-white text-xl mb-3">{item.degree}</h5>
                <p className="text-[#27a102] mb-4 font-medium">{item.period}</p>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTab;