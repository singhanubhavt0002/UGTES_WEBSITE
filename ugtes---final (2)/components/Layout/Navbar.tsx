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
        // Handle hash navigation if needed via router or simple scroll
        // For simplicity, we just navigate to the path
        navigate(path);
    }
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className={`bg-primary-900 text-white text-sm py-2 px-4 transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden py-0' : 'h-auto'}`}>
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

      {/* Main Nav */}
      <div className={`shadow-lg transition-all duration-300 ${scrolled ? 'bg-white py-2' : 'bg-white/95 backdrop-blur-md py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <img 
                src="https://i.postimg.cc/PxZNs6Ys/Whats-App-Image-2026-02-01-at-11-14-00-PM.jpg" 
                alt="UGTES Logo" 
                className="h-14 w-auto mr-3 rounded-md"
              />
              <div>
                <h1 className="text-2xl font-serif font-bold text-primary-900 tracking-tight leading-none">
                  {COMPANY_NAME}
                </h1>
                <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase hidden sm:block">
                  Traders & Engineers
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative group">
                  <NavLink
                    to={item.path}
                    onClick={(e) => {
                        if (item.subItems) e.preventDefault();
                        else handleNavClick(item.path);
                    }}
                    className={({ isActive }) =>
                      `flex items-center text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${
                        isActive && !item.subItems ? 'text-accent-600' : 'text-primary-900 hover:text-accent-600'
                      }`
                    }
                  >
                    {item.label}
                    {item.subItems && <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform" />}
                  </NavLink>
                  
                  {/* Dropdown */}
                  {item.subItems && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      {item.subItems.map(sub => (
                         <div 
                           key={sub.label}
                           onClick={() => {
                             navigate(sub.path);
                             window.scrollTo(0, 0); // Reset scroll or handle anchor scroll
                           }}
                           className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-600 cursor-pointer border-b border-gray-100 last:border-0"
                         >
                           {sub.label}
                         </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Quote Button */}
            <div className="hidden md:block">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-transform transform hover:scale-105 shadow-md"
              >
                Inquire
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary-900 hover:text-accent-600 focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 overflow-hidden'}`}>
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <div 
                  className="flex justify-between items-center py-3 border-b border-gray-100"
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
                    <div className="bg-gray-50 px-4 py-2 space-y-2">
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
                className="mt-6 w-full bg-accent-500 text-white px-6 py-3 rounded-lg text-sm font-bold uppercase"
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