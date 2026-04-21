import React from 'react';
import { Target, Eye, Award, MapPin } from 'lucide-react';
import { COMPANY_FULL_NAME, ADDRESS } from '../constants';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-primary-900 text-white py-20 relative overflow-hidden">
        <motion.div 
           initial={{ opacity: 0, scale: 1.1 }}
           animate={{ opacity: 0.2, scale: 1 }}
           transition={{ duration: 1.5 }}
           className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
        ></motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Your Trusted Partner for Global Success.
          </motion.p>
        </div>
      </div>

      {/* Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-accent-600 font-bold uppercase tracking-wider mb-4">Company Overview</h2>
            <h3 className="text-3xl font-serif font-bold text-primary-900 mb-8">
              Headquartered in Ghaziabad, India
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {COMPANY_FULL_NAME} operates from a strategic industrial hub in India. This positioning provides us with a robust sourcing base for agricultural commodities and access to a vast network of engineering manufacturers. We leverage extensive logistics expertise to facilitate seamless cross-border trade, serving clients in Asia, Africa, and beyond.
            </p>
            <div className="inline-flex items-center text-primary-800 bg-primary-50 px-6 py-3 rounded-full font-semibold">
               <MapPin className="mr-2 text-accent-500" />
               Strategic Hub: {ADDRESS}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vision */}
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent-500"
            >
               <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-900">
                 <Eye size={24} />
               </div>
               <h3 className="text-xl font-bold text-primary-900 mb-4">Vision</h3>
               <p className="text-gray-600 leading-relaxed font-medium">
                 To be the world’s most trusted partner in trade and engineering for sustainable industrial growth.
               </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               transition={{ delay: 0.1 }}
               className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent-500"
            >
               <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-900">
                 <Target size={24} />
               </div>
               <h3 className="text-xl font-bold text-primary-900 mb-4">Mission</h3>
               <p className="text-gray-600 leading-relaxed font-medium">
                 Delivering quality-driven trade and engineering solutions with integrity, reliability and global impact.
               </p>
            </motion.div>

            {/* Values */}
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               transition={{ delay: 0.2 }}
               className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent-500 lg:col-span-1 md:col-span-2 lg:col-start-auto md:col-start-auto"
            >
               <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-900">
                 <Award size={24} />
               </div>
               <h3 className="text-xl font-bold text-primary-900 mb-4">Core Values</h3>
               <ul className="text-gray-600 space-y-3">
                 <li className="flex items-start"><span className="text-accent-500 mr-2">•</span> Unwavering Commitment to Quality</li>
                 <li className="flex items-start"><span className="text-accent-500 mr-2">•</span> Client-Centric Approach</li>
                 <li className="flex items-start"><span className="text-accent-500 mr-2">•</span> Regulatory Compliance</li>
                 <li className="flex items-start"><span className="text-accent-500 mr-2">•</span> Transparency & Integrity</li>
               </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;