import React from 'react';
import Hero from '../components/Hero';
import { BUSINESS_VERTICALS, CLIENTS, STRENGTHS } from '../constants';
import { ArrowRight, CheckCircle, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in">
      <Hero />
      
      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-100 rounded-full z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Corporate Office" 
                className="relative z-10 rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-lg rounded-lg border-l-4 border-accent-500 hidden md:block z-20">
                <p className="text-primary-900 font-bold text-lg">Trusted by</p>
                <p className="text-xl font-serif text-accent-600 font-bold">Leading Industry</p>
                <p className="text-gray-500 text-sm">Giants</p>
              </div>
            </div>
            <div>
              <h4 className="text-accent-600 font-bold uppercase tracking-wider mb-2">About UGTES</h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
                Strategic Sourcing & <br /> Engineering Excellence
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Headquartered in Ghaziabad, India, United Global Traders and Engineers (UGTES) stands at the intersection of global trade and industrial engineering. We leverage our strategic positioning to provide a robust sourcing base for agro-commodities while delivering high-specification engineering solutions to heavy industries.
              </p>
              <ul className="space-y-3 mb-8">
                {['Diverse Business Capability', 'Rigorous Compliance (FSSAI/APEDA)', 'Engineering Led Trade'].map((item, i) => (
                  <li key={i} className="flex items-center text-primary-800 font-medium">
                    <CheckCircle className="text-accent-500 mr-3 w-5 h-5" />
                    {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => navigate('/about')}
                className="bg-primary-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-800 transition-colors"
              >
                Our Vision & Mission
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Verticals Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">Our Business Verticals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Four distinct pillars of excellence driving our global operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BUSINESS_VERTICALS.map((vertical) => (
              <div key={vertical.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                   <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                   <img src={vertical.image} alt={vertical.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4 text-accent-600">{vertical.icon}</div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2 leading-tight">{vertical.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{vertical.shortDescription}</p>
                  <button 
                    onClick={() => navigate('/verticals')}
                    className="text-primary-700 font-semibold text-sm flex items-center mt-auto group-hover:text-accent-600"
                  >
                    Read More <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why UGTE Preview */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-4xl mx-auto text-center">
                 <h2 className="text-3xl font-serif font-bold mb-6">Why Partner With UGTE?</h2>
                 <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                   In a complex global market, you need a partner who understands both the commercial nuances of trade and the technical demands of engineering. Our dual expertise offers you a unique competitive advantage.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left max-w-2xl mx-auto mb-10">
                    {STRENGTHS.slice(0, 4).map((s) => (
                        <div key={s.id} className="flex items-start">
                           <div className="mt-1 mr-3 text-accent-500 flex-shrink-0"><CheckCircle size={20} /></div>
                           <span className="font-medium text-gray-100">{s.title}</span>
                        </div>
                    ))}
                 </div>
                 <button 
                   onClick={() => navigate('/why-us')}
                   className="bg-accent-500 text-white px-8 py-3 rounded-md font-bold hover:bg-accent-600 transition-colors"
                 >
                   View All Capabilities
                 </button>
           </div>
        </div>
      </section>

      {/* Prestigious Clients */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-12">Prestigious Clients</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
            {CLIENTS.map((client, idx) => (
              <div key={idx} className="bg-gray-50 px-8 py-4 rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-default">
                <span className="font-bold text-gray-700 text-lg md:text-xl">{client.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-500 text-sm">Serving industry leaders across sectors.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to Expand Your Business?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for certified agro-commodities or engineering solutions tailored to your requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-primary-900 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg"
            >
              Get in Touch
            </button>
            <button 
              onClick={() => navigate('/compliance')}
              className="bg-white text-accent-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              View Certifications
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;