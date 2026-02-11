import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { COMPANY_NAME, NAV_ITEMS, CONTACT_EMAIL, CONTACT_PHONE } from '../../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string, hash?: string) => {
    setIsOpen(false);
    setDropdownOpen(null);
    if (path.includes('#')) {
        navigate(path);
    }
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-500">
      {/* Top Bar - Disappears on scroll */}
      <div className={`bg-primary-900 text-white text-sm py-2 px-4 transition-all duration-500 ease-in-out ${scrolled ? '-translate-y-full h-0 opacity-0 overflow-hidden' : 'translate-y-0 h-10 opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex items-center space-x-6">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center space-x-2 hover:text-accent-500 transition-colors">
              <Mail size={14} />
              <span>{CONTACT_EMAIL}</span>
            </a>
            <a href={`tel:${CONTACT_PHONE}`} className="flex items-center space-x-2 hover:text-accent-500 transition-colors">
              <Phone size={14} />
              <span>{CONTACT_PHONE}</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-xs uppercase tracking-wider text-gray-400">
            <span>ISO 9001:2015 Compliant Processes</span>
          </div>
        </div>
      </div>

      {/* Main Nav - Becomes Floating Glass on Scroll */}
      <div className={`transition-all duration-500 ${scrolled ? 'pt-2 pb-2 px-2' : 'py-0'}`}>
        <div className={`max-w-7xl mx-auto rounded-xl transition-all duration-500 ${
            scrolled 
            ? 'glass-panel shadow-lg px-6 py-2' 
            : 'bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-4'
        }`}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center cursor-pointer group" onClick={() => navigate('/')}>
              <img 
                src="https://i.postimg.cc/PxZNs6Ys/Whats-App-Image-2026-02-01-at-11-14-00-PM.jpg" 
                alt="UGTES Logo" 
                className="h-12 w-auto mr-3 rounded-md shadow-sm group-hover:shadow-md transition-all"
              />
              <div>
                <h1 className="text-2xl font-serif font-bold text-primary-900 tracking-tight leading-none group-hover:text-accent-600 transition-colors">
                  {COMPANY_NAME}
                </h1>
                <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase hidden sm:block">
                  Traders & Engineers
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-1 lg:space-x-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative group px-3 py-2">
                  <NavLink
                    to={item.path}
                    onClick={(e) => {
                        if (item.subItems) e.preventDefault();
                        else handleNavClick(item.path);
                    }}
                    className={({ isActive }) =>
                      `flex items-center text-sm font-semibold tracking-wide uppercase transition-all duration-200 ${
                        isActive && !item.subItems ? 'text-accent-600' : 'text-primary-900 hover:text-accent-600'
                      }`
                    }
                  >
                    {item.label}
                    {item.subItems && <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />}
                  </NavLink>
                  
                  {/* Dropdown with Glass effect */}
                  {item.subItems && (
                    <div className="absolute top-full left-0 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <div className="glass-panel rounded-xl overflow-hidden shadow-2xl">
                          {item.subItems.map(sub => (
                             <div 
                               key={sub.label}
                               onClick={() => {
                                 navigate(sub.path);
                                 window.scrollTo(0, 0);
                               }}
                               className="block px-6 py-4 text-sm font-medium text-gray-700 hover:bg-accent-50 hover:text-accent-700 cursor-pointer border-b border-gray-100/50 last:border-0 transition-colors"
                             >
                               {sub.label}
                             </div>
                          ))}
                        </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Quote Button */}
            <div className="hidden md:block pl-4">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-accent-500/30"
              >
                Inquire
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary-900 hover:text-accent-600 focus:outline-none p-2"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute left-0 right-0 top-full mx-4 mt-2 rounded-xl glass-panel shadow-2xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 overflow-hidden'}`}>
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <div 
                  className="flex justify-between items-center py-3 border-b border-gray-100/50"
                  onClick={() => {
                    if (item.subItems) {
                      setDropdownOpen(dropdownOpen === item.label ? null : item.label);
                    } else {
                      navigate(item.path);
                      setIsOpen(false);
                    }
                  }}
                >
                    <span className={`text-base font-medium ${location.pathname === item.path ? 'text-accent-600' : 'text-gray-800'}`}>
                        {item.label}
                    </span>
                    {item.subItems && <ChevronDown size={16} className={`text-gray-400 transition-transform ${dropdownOpen === item.label ? 'rotate-180' : ''}`} />}
                </div>
                
                {/* Mobile Submenu */}
                {item.subItems && dropdownOpen === item.label && (
                    <div className="bg-gray-50/50 rounded-lg px-4 py-2 space-y-2 mt-2">
                        {item.subItems.map(sub => (
                            <div 
                                key={sub.label}
                                onClick={() => {
                                    navigate(sub.path);
                                    setIsOpen(false);
                                }}
                                className="block py-2 text-sm text-gray-600 hover:text-accent-600"
                            >
                                {sub.label}
                            </div>
                        ))}
                    </div>
                )}
              </div>
            ))}
             <button 
                onClick={() => { navigate('/contact'); setIsOpen(false); }}
                className="mt-6 w-full bg-accent-500 text-white px-6 py-3 rounded-xl text-sm font-bold uppercase shadow-lg shadow-accent-500/20"
              >
                Contact Us
              </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;