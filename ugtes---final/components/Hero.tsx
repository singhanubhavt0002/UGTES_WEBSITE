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
    <div className="relative h-[650px] md:h-[800px] overflow-hidden bg-primary-900">
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Image with zoom effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[10000ms] scale-105"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1.1)' : 'scale(1.0)'
            }}
          />
          {/* Enhanced Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className={`max-w-3xl transform transition-all duration-1000 delay-300 ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}>
                <div className="inline-block px-4 py-1 mb-6 border border-accent-500/50 rounded-full bg-accent-500/10 backdrop-blur-md">
                   <h2 className="text-accent-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                     United Global Traders and Engineers
                   </h2>
                </div>
                
                <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-[1.1] drop-shadow-lg">
                  {slide.title}
                </h1>
                
                <p className="text-gray-200 text-lg md:text-2xl mb-10 pl-6 border-l-4 border-accent-500 leading-relaxed font-light">
                  {slide.subtitle}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => navigate('/verticals')}
                    className="animate-pulse-glow bg-accent-500 hover:bg-accent-400 text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center group shadow-xl shadow-accent-500/20 hover:-translate-y-1"
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                     onClick={() => navigate('/contact')}
                     className="px-10 py-4 rounded-full font-bold text-lg text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-1"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modern Dots */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide ? 'bg-accent-500 w-12' : 'bg-white/30 w-2 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;