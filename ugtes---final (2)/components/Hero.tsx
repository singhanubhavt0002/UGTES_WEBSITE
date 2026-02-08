import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../constants';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] md:h-[750px] overflow-hidden bg-primary-900">
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[8000ms] scale-105 hover:scale-110"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/70 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className={`max-w-2xl transform transition-all duration-1000 delay-300 ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <h2 className="text-accent-500 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                  United Global Traders and Engineers
                </h2>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-gray-200 text-lg md:text-xl mb-8 border-l-4 border-accent-500 pl-4">
                  {slide.subtitle}
                </p>
                <button 
                  onClick={() => navigate('/products')}
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-all flex items-center group"
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-accent-500 w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;