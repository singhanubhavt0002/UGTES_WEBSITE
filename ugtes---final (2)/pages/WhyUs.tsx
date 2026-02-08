import React from 'react';
import { STRENGTHS } from '../constants';

const WhyUs: React.FC = () => {
  return (
    <div className="pt-20 animate-fade-in bg-white min-h-screen">
      {/* Header */}
      <div className="bg-primary-900 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
           <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Why Choose UGTE?</h1>
           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
             We combine the agility of a trading firm with the precision of an engineering consultancy.
           </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {STRENGTHS.map((strength) => (
             <div key={strength.id} className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-xl hover:border-accent-200 transition-all duration-300 group">
                <div className="mb-6 bg-primary-50 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-primary-900 transition-colors duration-300">
                   <div className="text-accent-500 group-hover:text-white transition-colors duration-300">
                     {strength.icon}
                   </div>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">{strength.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {strength.description}
                </p>
             </div>
           ))}
        </div>

        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
           <h2 className="text-2xl font-bold text-primary-900 mb-4">Our Commitment</h2>
           <p className="text-gray-600 max-w-3xl mx-auto mb-8">
             At UGTES, we understand that global trade involves complex challenges. From sourcing to shipping, and from design to installation, we manage the entire value chain so you can focus on your core business.
           </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;