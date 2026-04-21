import React from 'react';
import Hero from '../components/Hero';
import { BUSINESS_VERTICALS, STRENGTHS } from '../constants';
import { ArrowRight, CheckCircle, Globe, Briefcase, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden bg-slate-50">
      <Hero />
      
      {/* Intro Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="blob blob-primary w-[800px] h-[800px] -top-64 -left-64 opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Text Column */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="order-2 lg:order-1"
            >
              <div className="inline-block px-4 py-1.5 bg-accent-50 text-accent-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-accent-100">
                Who We Are
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-900 mb-8 leading-tight">
                A Prominent, Diversified <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-accent-600">International Organization</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-xl font-light">
                Uniglobe Traders & Engineers (UGTES) stands as a prominent, diversified international organisation, expertly navigating the realms of global trade and sophisticated engineering solutions. Our operations are meticulously designed to deliver unparalleled value.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <motion.div whileHover={{ y: -5 }} className="glass-panel p-6 rounded-2xl flex items-start shadow-sm hover:shadow-md transition-all border-l-4 border-l-accent-500">
                   <div className="bg-primary-50 p-3 rounded-xl mr-4 text-accent-600">
                     <Globe className="w-6 h-6" />
                   </div>
                   <div>
                     <h5 className="font-bold text-primary-900 text-lg">Export Markets</h5>
                     <p className="text-sm text-gray-500 mt-2">Middle East, Africa, South Asia, South-East Asia.</p>
                   </div>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="glass-panel p-6 rounded-2xl flex items-start shadow-sm hover:shadow-md transition-all border-l-4 border-l-primary-500">
                   <div className="bg-primary-50 p-3 rounded-xl mr-4 text-primary-600">
                     <Briefcase className="w-6 h-6" />
                   </div>
                   <div>
                     <h5 className="font-bold text-primary-900 text-lg">Domestic Clients</h5>
                     <p className="text-sm text-gray-500 mt-2">EPC contractors, industrial plants & institutional buyers.</p>
                   </div>
                </motion.div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/about')}
                className="bg-primary-900 text-white px-10 py-5 rounded-full font-semibold hover:bg-primary-800 transition-all shadow-lg hover:shadow-xl flex items-center"
              >
                Our Vision & Mission <ChevronRight className="ml-2 w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Image Column */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative order-1 lg:order-2"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Corporate Office" 
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-[1.5s]"
                />
              </div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-12 -left-12 glass-panel p-8 rounded-2xl hidden md:block max-w-xs shadow-2xl"
              >
                <p className="text-primary-900 font-bold text-lg mb-1">Trusted by</p>
                <p className="text-3xl font-serif text-accent-600 font-bold leading-none">Leading Industry</p>
                <p className="text-gray-400 text-xs tracking-[0.2em] uppercase mt-2 font-bold">Giants Worldwide</p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Business Verticals Preview */}
      <section className="py-32 relative bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-900 mb-6">Our Business Verticals</h2>
            <div className="w-24 h-1.5 bg-accent-500 mx-auto rounded-full mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl font-light">
              Diverse Capabilities for a Dynamic World. Delivering excellence across four key pillars of industry.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {BUSINESS_VERTICALS.map((vertical, idx) => (
              <motion.div 
                key={vertical.id} 
                variants={fadeInUp}
                whileHover={{ y: -15 }}
                className="glass-panel rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full group border border-gray-100"
              >
                <div className="h-64 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                   <img 
                     src={vertical.image} 
                     alt={vertical.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-md p-3 rounded-xl text-white border border-white/30 shadow-lg">
                      {vertical.icon}
                   </div>
                   <div className="absolute bottom-4 left-4 right-4 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                     <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">Explore</span>
                   </div>
                </div>
                <div className="p-8 flex-grow flex flex-col bg-white">
                  <h3 className="text-xl font-bold text-primary-900 mb-3 leading-tight group-hover:text-accent-600 transition-colors">{vertical.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow font-medium">{vertical.shortDescription}</p>
                  <button 
                    onClick={() => navigate('/verticals')}
                    className="text-primary-900 font-bold text-sm flex items-center mt-auto group/btn border-t border-gray-100 pt-4"
                  >
                    View Details <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform text-accent-500" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why UGTE Preview */}
      <section className="py-32 relative bg-primary-900 overflow-hidden text-white">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 -left-40 w-96 h-96 bg-accent-600 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 -right-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-40 left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInUp}
             className="max-w-4xl mx-auto text-center"
           >
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Why Partner With UGTE?</h2>
                 <p className="text-gray-300 mb-16 leading-relaxed text-xl font-light">
                   We are your distinguished partner with extensive capabilities, unwavering commitment to quality and a client-centric approach. UGTES brings together a unique blend of expertise to empower your projects.
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-16">
                    {STRENGTHS.slice(0, 4).map((s) => (
                        <motion.div 
                          key={s.id} 
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                          className="flex items-center bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 transition-colors cursor-default"
                        >
                           <div className="mr-5 text-accent-400 bg-white/10 p-3 rounded-full"><CheckCircle size={24} /></div>
                           <span className="font-medium text-gray-100 text-lg">{s.title}</span>
                        </motion.div>
                    ))}
                 </div>
                 
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => navigate('/why-us')}
                   className="bg-accent-500 text-white px-12 py-5 rounded-full font-bold hover:bg-accent-400 transition-all shadow-lg hover:shadow-accent-500/50"
                 >
                   View All Capabilities
                 </motion.button>
           </motion.div>
        </div>
      </section>

      {/* Prestigious Clients */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-accent-600 font-bold uppercase tracking-widest mb-4 text-xs">Our Partnerships</p>
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-12">Trusted by Industry Leaders</h2>
            
            <motion.div 
               whileHover={{ scale: 1.02 }}
               transition={{ duration: 0.5 }}
               className="flex justify-center items-center"
            >
               <img 
                 src="https://drive.google.com/thumbnail?id=1JPfcV0jFoeHTqZT6KjcQMW3xWescKfv_&sz=w2000" 
                 alt="Our Esteemed Customers" 
                 className="max-w-full h-auto rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white p-4 border border-gray-100"
                 referrerPolicy="no-referrer"
               />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-500"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent-600 to-accent-400 opacity-90"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 drop-shadow-md tracking-tight">Ready to Expand?</h2>
            <p className="text-white/90 text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Contact us today for certified agro-commodities or engineering solutions tailored to your requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="bg-white text-primary-900 px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl"
              >
                Get in Touch
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/compliance')}
                className="bg-primary-900/40 text-white border border-white/40 backdrop-blur-md px-12 py-5 rounded-full font-bold text-lg hover:bg-primary-900/60 transition-all"
              >
                View Certifications
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;