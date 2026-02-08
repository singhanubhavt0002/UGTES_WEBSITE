import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';
import { COMPANY_FULL_NAME, ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold tracking-tight">UGTES</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              {COMPANY_FULL_NAME} is your strategic partner for Agro-Commodities and Industrial Engineering Solutions. Headquartered in Ghaziabad, India, serving the world.
            </p>
            <div className="flex items-center space-x-2 text-accent-500 text-sm font-semibold">
               <ShieldCheck size={16} />
               <span>ISO 9001:2015 Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-accent-500 inline-block pb-1">Quick Links</h3>
            <ul className="space-y-3">
               <li><NavLink to="/" className="text-gray-400 hover:text-accent-500 flex items-center group transition-colors"><ArrowRight size={14} className="mr-2" /> Home</NavLink></li>
               <li><NavLink to="/about" className="text-gray-400 hover:text-accent-500 flex items-center group transition-colors"><ArrowRight size={14} className="mr-2" /> About Us</NavLink></li>
               <li><NavLink to="/verticals" className="text-gray-400 hover:text-accent-500 flex items-center group transition-colors"><ArrowRight size={14} className="mr-2" /> Business Verticals</NavLink></li>
               <li><NavLink to="/why-us" className="text-gray-400 hover:text-accent-500 flex items-center group transition-colors"><ArrowRight size={14} className="mr-2" /> Why UGTE?</NavLink></li>
               <li><NavLink to="/compliance" className="text-gray-400 hover:text-accent-500 flex items-center group transition-colors"><ArrowRight size={14} className="mr-2" /> Compliance</NavLink></li>
               <li><NavLink to="/contact" className="text-gray-400 hover:text-accent-500 flex items-center group transition-colors"><ArrowRight size={14} className="mr-2" /> Contact</NavLink></li>
            </ul>
          </div>

          {/* Business Verticals */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-accent-500 inline-block pb-1">Our Verticals</h3>
            <ul className="space-y-3">
              <li><NavLink to="/verticals" className="text-gray-400 hover:text-accent-500 transition-colors">Agro-Commodity Exports</NavLink></li>
              <li><NavLink to="/verticals" className="text-gray-400 hover:text-accent-500 transition-colors">Industrial Equipment</NavLink></li>
              <li><NavLink to="/verticals" className="text-gray-400 hover:text-accent-500 transition-colors">Pre-Engineered Buildings</NavLink></li>
              <li><NavLink to="/verticals" className="text-gray-400 hover:text-accent-500 transition-colors">Skilled Manpower</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h3 className="text-lg font-bold mb-6 border-b-2 border-accent-500 inline-block pb-1">Head Office</h3>
             <ul className="space-y-4 text-sm text-gray-400">
               <li className="flex items-start">
                 <MapPin className="flex-shrink-0 w-5 h-5 mr-3 text-accent-500 mt-1" />
                 <span>{ADDRESS}</span>
               </li>
               <li className="flex items-center">
                 <Phone className="flex-shrink-0 w-5 h-5 mr-3 text-accent-500" />
                 <a href={`tel:${CONTACT_PHONE}`} className="hover:text-white transition-colors">{CONTACT_PHONE}</a>
               </li>
               <li className="flex items-center">
                 <Mail className="flex-shrink-0 w-5 h-5 mr-3 text-accent-500" />
                 <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">{CONTACT_EMAIL}</a>
               </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_FULL_NAME}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-600">IEC Registered</span>
            <span className="text-gray-600">MSME Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;