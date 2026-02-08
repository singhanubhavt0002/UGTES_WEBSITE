import React from 'react';
import { Target, Eye, Award, MapPin } from 'lucide-react';
import { COMPANY_FULL_NAME, ADDRESS } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 animate-fade-in">
      {/* Header */}
      <div className="bg-primary-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Strategic Sourcing. Engineering Excellence. Global Reach.
          </p>
        </div>
      </div>

      {/* Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-accent-600 font-bold uppercase tracking-wider mb-4">Company Overview</h2>
          <h3 className="text-3xl font-serif font-bold text-primary-900 mb-8">
            Headquartered in Ghaziabad, India
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {COMPANY_FULL_NAME} (UGTES) operates from Ghaziabad, a strategic industrial hub in India. This positioning provides us with a robust sourcing base for agricultural commodities from the fertile northern plains and access to a vast network of engineering manufacturers. We leverage extensive logistics expertise to facilitate seamless cross-border trade, serving clients in Asia, Africa, and beyond.
          </p>
          <div className="inline-flex items-center text-primary-800 bg-primary-50 px-6 py-3 rounded-full font-semibold">
             <MapPin className="mr-2 text-accent-500" />
             Strategic Hub: {ADDRESS}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent-500">
               <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-900">
                 <Eye size={24} />
               </div>
               <h3 className="text-xl font-bold text-primary-900 mb-4">Our Vision</h3>
               <p className="text-gray-600 leading-relaxed">
                 To ascend as a globally trusted trade and engineering partner, renowned for delivering high-quality products across commodities, industry, and infrastructure sectors.
               </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent-500">
               <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-900">
                 <Target size={24} />
               </div>
               <h3 className="text-xl font-bold text-primary-900 mb-4">Our Mission</h3>
               <ul className="text-gray-600 space-y-3">
                 <li className="flex items-start"><span className="text-accent-500 mr-2">•</span> Focus on Quality & Service Excellence</li>
                 <li className="flex items-start"><span className="text-accent-500 mr-2">•</span> Partnership Building & Trust</li>
                 <li className="flex items-start"><span className="text-accent-500 mr-2">•</span> Integrity & Global Compliance</li>
                 <li className="flex items-start"><span className="text-accent-500 mr-2">•</span> Sustainable Global Growth</li>
               </ul>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent-500">
               <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-900">
                 <Award size={24} />
               </div>
               <h3 className="text-xl font-bold text-primary-900 mb-4">Core Values</h3>
               <p className="text-gray-600 leading-relaxed">
                 We believe in transparency, technical precision, and customer-centricity. Our business is built on the pillars of statutory compliance and ethical trading practices.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;