import React from 'react';
import Hero from '../components/Hero';
import { BUSINESS_VERTICALS, STRENGTHS } from '../constants';
import { ArrowRight, CheckCircle, Globe, Briefcase, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* Intro Section */}
      <section className="py-24 relative">
        {/* Decorative Blob */}
        <div className="blob blob-primary w-96 h-96 -top-20 -left-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Column - Now First */}
            <div className="reveal-section order-2 lg:order-1">
              <div className="inline-block px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Who We Are
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-8 leading-tight">
                A Prominent, Diversified <br /> International Organization
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                United Global Traders & Engineers (UGTES) stands as a prominent, diversified international organisation, expertly navigating the realms of global trade and sophisticated engineering solutions. Our operations are meticulously designed to deliver unparalleled value across a broad spectrum of sectors.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="glass-panel p-4 rounded-xl flex items-start">
                   <div className="bg-primary-50 p-2 rounded-lg mr-4">
                     <Globe className="text-accent-500 w-6 h-6" />
                   </div>
                   <div>
                     <h5 className="font-bold text-primary-900">Export Markets</h5>
                     <p className="text-sm text-gray-500 mt-1">Middle East, Africa, South Asia, South-East Asia.</p>
                   </div>
                </div>
                <div className="glass-panel p-4 rounded-xl flex items-start">
                   <div className="bg-primary-50 p-2 rounded-lg mr-4">
                     <Briefcase className="text-accent-500 w-6 h-6" />
                   </div>
                   <div>
                     <h5 className="font-bold text-primary-900">Domestic Clients</h5>
                     <p className="text-sm text-gray-500 mt-1">EPC contractors, industrial plants & institutional buyers.</p>
                   </div>
                </div>
              </div>

              <button 
                onClick={() => navigate('/about')}
                className="bg-primary-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-800 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center"
              >
                Our Vision & Mission <ChevronRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            {/* Image Column - Now Second */}
            <div className="relative reveal-section order-1 lg:order-2">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-100 rounded-full z-0 opacity-50 blur-xl"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Corporate Office" 
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass-panel p-8 rounded-2xl hidden md:block z-20 animate-float">
                <p className="text-primary-900 font-bold text-lg">Trusted by</p>
                <p className="text-2xl font-serif text-accent-600 font-bold">Leading Industry</p>
                <p className="text-gray-500 text-sm tracking-widest uppercase mt-1">Giants Worldwide</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Business Verticals Preview */}
      <section className="py-24 relative bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 reveal-section">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">Our Business Verticals</h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Diverse Capabilities for a Dynamic World. Delivering excellence across four key pillars of industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BUSINESS_VERTICALS.map((vertical, idx) => (
              <div 
                key={vertical.id} 
                className={`glass-panel rounded-2xl overflow-hidden hover-card flex flex-col h-full reveal-section`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="h-56 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                   <img 
                     src={vertical.image} 
                     alt={vertical.title} 
                     className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur p-2 rounded-lg text-accent-600 shadow-lg">
                      {vertical.icon}
                   </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-primary-900 mb-3 leading-tight">{vertical.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">{vertical.shortDescription}</p>
                  <button 
                    onClick={() => navigate('/verticals')}
                    className="text-accent-600 font-bold text-sm flex items-center mt-auto group"
                  >
                    Explore Vertical <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why UGTE Preview */}
      <section className="py-24 relative bg-primary-900 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="max-w-4xl mx-auto text-center reveal-section">
                 <h2 className="text-4xl font-serif font-bold text-white mb-8">Why Partner With UGTE?</h2>
                 <p className="text-gray-300 mb-12 leading-relaxed text-xl font-light">
                   We are your distinguished partner with extensive capabilities, unwavering commitment to quality and a client-centric approach. UGTES brings together a unique blend of expertise to empower your projects.
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-12">
                    {STRENGTHS.slice(0, 4).map((s) => (
                        <div key={s.id} className="flex items-center bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                           <div className="mr-4 text-accent-400 bg-white/10 p-2 rounded-full"><CheckCircle size={20} /></div>
                           <span className="font-medium text-gray-100 text-lg">{s.title}</span>
                        </div>
                    ))}
                 </div>
                 
                 <button 
                   onClick={() => navigate('/why-us')}
                   className="bg-accent-500 text-white px-10 py-4 rounded-full font-bold hover:bg-accent-400 transition-all shadow-lg hover:shadow-accent-500/30 hover:-translate-y-1"
                 >
                   View All Capabilities
                 </button>
           </div>
        </div>
      </section>

      {/* Prestigious Clients */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-section">
          <p className="text-accent-600 font-bold uppercase tracking-widest mb-4 text-xs">Our Partnerships</p>
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-12">Trusted by Industry Leaders</h2>
          
          <div className="flex justify-center items-center">
             <img 
               src="https://drive.google.com/thumbnail?id=1JPfcV0jFoeHTqZT6KjcQMW3xWescKfv_&sz=w2000" 
               alt="Our Esteemed Customers: Reliance, L&T, Blue Star, Artson, Parle, ATV Projects, Fernas Opal, Bhushan Steel, Interarch" 
               className="max-w-full h-auto rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-500"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal-section">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 drop-shadow-md">Ready to Expand Your Business?</h2>
          <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact us today for certified agro-commodities or engineering solutions tailored to your requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-primary-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1"
            >
              Get in Touch
            </button>
            <button 
              onClick={() => navigate('/compliance')}
              className="bg-primary-900/30 text-white border border-white/40 backdrop-blur-md px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-900/50 transition-all"
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