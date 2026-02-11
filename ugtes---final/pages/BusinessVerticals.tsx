import React, { useEffect } from 'react';
import { BUSINESS_VERTICALS } from '../constants';
import { CheckCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const BusinessVerticals: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
        window.scrollTo(0,0);
    }
  }, [location]);

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <div className="bg-primary-900 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 reveal-section">
           <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Business Verticals</h1>
           <p className="text-gray-300 max-w-2xl mx-auto text-xl font-light leading-relaxed">
             UGTES operates across four specialized sectors, delivering expertise, precision, and quality in every global transaction.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24 relative">
        {/* Decorative background line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent -translate-x-1/2 hidden lg:block -z-10"></div>

        {BUSINESS_VERTICALS.map((vertical, index) => (
          <div 
            key={vertical.id} 
            id={vertical.id}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 reveal-section scroll-mt-32`}
          >
            {/* Image Section */}
            <div className="lg:w-1/2 w-full relative group">
               <div className={`absolute inset-0 bg-accent-500 rounded-2xl transform ${index % 2 === 0 ? '-rotate-3' : 'rotate-3'} opacity-20 group-hover:rotate-0 transition-transform duration-500`}></div>
               <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                 <img 
                   src={vertical.image} 
                   alt={vertical.title} 
                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                 {/* Mobile Icon Overlay */}
                 <div className="absolute bottom-6 left-6 lg:hidden">
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded-xl text-white">
                        {React.cloneElement(vertical.icon as React.ReactElement<any>, { size: 28 })}
                    </div>
                 </div>
               </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 glass-panel p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/60 relative">
               {/* Desktop Icon */}
               <div className={`hidden lg:flex absolute -top-8 ${index % 2 === 1 ? '-right-8' : '-left-8'} w-20 h-20 bg-white rounded-2xl shadow-xl items-center justify-center text-accent-500 animate-float`}>
                    {React.cloneElement(vertical.icon as React.ReactElement<any>, { size: 40 })}
               </div>
               
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6 leading-tight">{vertical.title}</h2>
               
               <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                 {vertical.fullDescription}
               </p>
               
               <div className="bg-primary-50/50 rounded-2xl p-8 border border-primary-100">
                 <h3 className="font-bold text-primary-900 mb-6 uppercase text-xs tracking-widest flex items-center">
                    <span className="w-8 h-px bg-accent-500 mr-3"></span>
                    Key Offerings
                 </h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                   {vertical.features.map((feature, idx) => (
                     <div key={idx} className="flex items-start group">
                       <CheckCircle size={18} className="text-accent-500 mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                       <span className="text-gray-700 text-sm font-medium">{feature}</span>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessVerticals;