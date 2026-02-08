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
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
        window.scrollTo(0,0);
    }
  }, [location]);

  return (
    <div className="pt-20 animate-fade-in bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-primary-900 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
           <h1 className="text-4xl font-serif font-bold mb-4">Business Verticals</h1>
           <p className="text-gray-300 max-w-2xl mx-auto">
             UGTES operates across four specialized sectors, delivering expertise and quality in every transaction.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {BUSINESS_VERTICALS.map((vertical, index) => (
          <div 
            key={vertical.id} 
            id={vertical.id}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white rounded-2xl shadow-lg overflow-hidden scroll-mt-28`}
          >
            {/* Image Section */}
            <div className="lg:w-1/2 h-64 lg:h-auto relative">
               <img 
                 src={vertical.image} 
                 alt={vertical.title} 
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>
               <div className="absolute bottom-4 left-4 lg:hidden">
                 <div className="bg-accent-500 text-white p-2 rounded-lg inline-block">
                    {vertical.icon}
                 </div>
               </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
               <div className="hidden lg:block mb-6">
                 <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center text-accent-600">
                    {React.cloneElement(vertical.icon as React.ReactElement<any>, { size: 32 })}
                 </div>
               </div>
               
               <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">{vertical.title}</h2>
               <div className="w-16 h-1 bg-accent-500 mb-6"></div>
               
               <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                 {vertical.fullDescription}
               </p>
               
               <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                 <h3 className="font-bold text-primary-900 mb-4 uppercase text-sm tracking-wider">Key Offerings</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {vertical.features.map((feature, idx) => (
                     <div key={idx} className="flex items-start">
                       <CheckCircle size={18} className="text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
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