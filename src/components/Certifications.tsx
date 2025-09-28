import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';

const certifications = [
  {
    title: 'The Machine Learning Process A-Z',
    organization: '365 Data Science',
    date: 'November 2024',
    image: './assets/images/ml-process.jpg',
    verifyLink: 'https://learn.365datascience.com/c/8ee1cfe9fd/'
  },
  {
    title: 'The Machine Learning Algorithms A-Z',
    organization: '365 Data Science',
    date: 'November 2024',
    image: './assets/images/ml-algorithms.jpg',
    verifyLink: 'https://learn.365datascience.com/c/14a89f56fe/'
  }
];

const Certifications = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === certifications.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? certifications.length - 1 : prev - 1
    );
  };

  return (
    <section id="certifications" className="py-20 bg-[#001a03]">
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Certifications
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-2xl mx-auto">
                    <div 
                      className="relative h-48 cursor-pointer group"
                      onClick={() => setSelectedImage(cert.image)}
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <span className="text-white px-4 py-2 rounded-full border-2 border-white font-semibold shadow-lg">
                          Click to view
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{cert.title}</h3>
                      <p className="text-[#27a102] mb-2">{cert.organization}</p>
                      <p className="text-gray-600 mb-4">{cert.date}</p>
                      <a
                        href={cert.verifyLink}
                        className="inline-flex items-center text-[#27a102] hover:text-[#1fea00]"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        Verify Certificate
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {certifications.length > 1 && (
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
          {certifications.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-[#1fea00]' : 'bg-[#1c6000]'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-1 hover:bg-gray-100"
              >
                <X size={24} className="text-gray-800" />
              </button>
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-full h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;