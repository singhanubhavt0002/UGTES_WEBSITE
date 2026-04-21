import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../constants';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="relative h-[700px] md:h-[900px] overflow-hidden bg-primary-900">
      <AnimatePresence mode="wait">
        {HERO_SLIDES.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0">
                 <motion.img 
                    src={slide.image} 
                    alt="Background"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 8, ease: "linear" }}
                 />
              </div>
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-transparent to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-4xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="inline-block px-4 py-1 mb-6 border border-accent-500/50 rounded-full bg-accent-500/10 backdrop-blur-md"
                    >
                       <h2 className="text-accent-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                         Uniglobe Traders & Engineers (UGTES)
                       </h2>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-[1.1] drop-shadow-2xl"
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="text-gray-200 text-lg md:text-2xl mb-10 pl-6 border-l-4 border-accent-500 leading-relaxed font-light max-w-2xl"
                    >
                      {slide.subtitle}
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                      <button 
                        onClick={() => navigate('/verticals')}
                        className="bg-accent-500 hover:bg-accent-400 text-white px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center group shadow-xl shadow-accent-500/20 hover:-translate-y-1 hover:shadow-2xl"
                      >
                        {slide.cta}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button 
                         onClick={() => navigate('/contact')}
                         className="px-10 py-5 rounded-full font-bold text-lg text-white border border-white/30 hover:bg-white/10 backdrop-blur-md transition-all hover:-translate-y-1"
                      >
                        Contact Us
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Progress Bar / Dots */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentSlide ? 'bg-accent-500 w-16' : 'bg-white/20 w-8 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;