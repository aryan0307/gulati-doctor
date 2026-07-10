import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Menu, 
  X, 
  ChevronDown
} from 'lucide-react';
import { treatments } from '../data/treatments';
import { easing, variants } from '../lib/motion.jsx';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null); // 'about' | 'treatments' | null
  const [openDropdown, setOpenDropdown] = useState(null); // 'about' | 'treatments' | null
  const location = useLocation();
  const drawerRef = useRef(null);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveMobileDropdown(null);
  }, [location]);

  // Handle sticky header shadow on scroll
  useEffect(() => {
    let scrolled = false;
    const handleScroll = () => {
      const isCurrentlyScrolled = window.scrollY > 20;
      if (isCurrentlyScrolled !== scrolled) {
        scrolled = isCurrentlyScrolled;
        setIsScrolled(isCurrentlyScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trap focus or handle click outside for mobile drawer
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleMobileDropdown = (name) => {
    if (activeMobileDropdown === name) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(name);
    }
  };

  const linkClass = ({ isActive }) => 
    `text-sm font-medium transition-all duration-200 py-2 border-b-2 ${
      isActive 
        ? 'text-primary border-primary font-semibold' 
        : 'text-text-main border-transparent hover:text-primary'
    }`;

  const dropdownItemClass = ({ isActive }) =>
    `block px-4 py-2 text-sm transition-all duration-150 ${
      isActive
        ? 'bg-primary/10 text-primary font-semibold'
        : 'text-text-main hover:bg-brand-bg hover:text-primary'
    }`;

  return (
    <>
      {/* Top Thin Info Bar (Desktop only, scrolls away naturally) */}
      <div 
        className="hidden lg:flex bg-primary text-white text-xs py-2 px-6 justify-between items-center gap-2 font-sans border-b border-primary-dark w-full"
      >
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-1.5 justify-center">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>4W15, Sector - 4, Talwandi, Kota</span>
          </div>

        </div>
        <a 
          href="tel:+917737465987" 
          className="flex items-center gap-1.5 font-semibold text-white hover:text-accent transition-all duration-200"
          aria-label="Call clinic at +91 77374 65987"
        >
          <Phone className="w-3.5 h-3.5 text-accent" />
          <span>+91 77374 65987</span>
        </a>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 w-full z-40 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-md border-b border-primary/5 py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div 
              className="p-1 bg-white rounded-xl border border-primary/10 shadow-sm transition-all duration-300 group-hover:scale-105"
            >
              <img 
                src={`${import.meta.env.BASE_URL}images/clinic_logo.png`} 
                alt="Gulati Physiotherapy Logo" 
                className="w-10 h-10 object-contain" 
              />
            </div>
            <div className="text-left">
              <span className="font-serif font-extrabold text-lg md:text-xl tracking-tight text-primary-darker block leading-none">
                GULATI PHYSIOTHERAPY
              </span>
              <span className="text-[9px] tracking-widest text-text-secondary uppercase block mt-0.5 font-bold">
                Clinic & Rehab Center
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            
            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-text-main hover:text-primary py-2 transition duration-200">
                <span>About</span>
                <ChevronDown className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openDropdown === 'about' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0, pointerEvents: 'auto' }}
                    exit={{ opacity: 0, y: -10, pointerEvents: 'none' }}
                    transition={{ duration: 0.3, ease: easing.easeOutCubic }}
                    className="absolute left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-primary/5 py-2 z-50"
                  >
                    <motion.div 
                      variants={variants.staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.div variants={variants.slideLeft}>
                        <NavLink to="/about-doctor" className={dropdownItemClass}>Dr. Vinay Gulati</NavLink>
                      </motion.div>
                      <motion.div variants={variants.slideLeft} transition={{ delay: 0.05 }}>
                        <NavLink to="/about/team" className={dropdownItemClass}>Our Specialized Team</NavLink>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Treatments Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('treatments')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-text-main hover:text-primary py-2 transition duration-200">
                <span>Treatments</span>
                <ChevronDown className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${openDropdown === 'treatments' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openDropdown === 'treatments' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0, pointerEvents: 'auto' }}
                    exit={{ opacity: 0, y: -10, pointerEvents: 'none' }}
                    transition={{ duration: 0.3, ease: easing.easeOutCubic }}
                    className="absolute left-1/2 -translate-x-1/2 mt-1 w-72 bg-white rounded-xl shadow-lg border border-primary/5 py-2 z-50 max-h-[350px] overflow-y-auto scrollbar-thin"
                  >
                    <motion.div 
                      variants={variants.staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      {treatments.map((t, idx) => (
                        <motion.div key={t.id} variants={variants.slideLeft} transition={{ delay: idx * 0.03 }}>
                          <NavLink to={t.path} className={dropdownItemClass}>
                            {t.name}
                          </NavLink>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>

          {/* Book Appointment & Hamburger */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://wa.me/917737465987?text=Hello%2C%20I%20want%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: easing.easeOutCubic }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-soft"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Appointment
            </motion.a>
            
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2 rounded-xl text-text-main hover:bg-brand-bg transition-all duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Drawer Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: easing.easeOutCubic }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: easing.easeOutCubic }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col lg:hidden"
          >
        {/* Drawer Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-6 border-b border-primary/5 flex justify-between items-center bg-brand-bg"
        >
          <div className="flex items-center gap-2">
            <div className="p-1 bg-white rounded-lg border border-primary/10 shadow-sm shrink-0">
              <img 
                src={`${import.meta.env.BASE_URL}images/clinic_logo.png`} 
                alt="Gulati Logo" 
                className="w-7 h-7 object-contain" 
              />
            </div>
            <div>
              <span className="font-serif font-extrabold text-sm tracking-tight text-primary-darker block leading-none">
                GULATI CLINIC
              </span>
              <span className="text-[8px] tracking-wider text-text-secondary uppercase block mt-0.5 font-bold">
                Kota, Rajasthan
              </span>
            </div>
          </div>
          <motion.button
            onClick={() => setIsOpen(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-1.5 rounded-lg text-text-main hover:bg-white transition-all duration-200"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Drawer Body - Scrollable Links */}
        <motion.div 
          variants={variants.staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 overflow-y-auto px-6 py-4 space-y-4"
        >
          <motion.div variants={variants.slideLeft}>
            <NavLink 
              to="/" 
              className={({ isActive }) => `block py-2 text-base font-semibold ${isActive ? 'text-primary' : 'text-text-main'}`}
            >
              Home
            </NavLink>
          </motion.div>

          {/* Mobile About Accordion */}
          <motion.div variants={variants.slideLeft} className="border-b border-primary/5 pb-2">
            <button
              onClick={() => toggleMobileDropdown('about')}
              className="w-full flex justify-between items-center py-2 text-base font-semibold text-text-main"
            >
              <span>About</span>
              <ChevronDown className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${
                activeMobileDropdown === 'about' ? 'rotate-180' : ''
              }`} />
            </button>
            <AnimatePresence>
              {activeMobileDropdown === 'about' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: easing.easeOutCubic }}
                  className="overflow-hidden"
                >
                  <div className="pl-4 space-y-2 py-1">
                    <Link to="/about-doctor" className="block py-1.5 text-sm text-text-secondary hover:text-primary">Dr. Vinay Gulati</Link>
                    <Link to="/about/team" className="block py-1.5 text-sm text-text-secondary hover:text-primary">Our Specialized Team</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Mobile Treatments Accordion */}
          <motion.div variants={variants.slideLeft} className="border-b border-primary/5 pb-2">
            <button
              onClick={() => toggleMobileDropdown('treatments')}
              className="w-full flex justify-between items-center py-2 text-base font-semibold text-text-main"
            >
              <span>Treatments</span>
              <ChevronDown className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${
                activeMobileDropdown === 'treatments' ? 'rotate-180' : ''
              }`} />
            </button>
            <AnimatePresence>
              {activeMobileDropdown === 'treatments' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: easing.easeOutCubic }}
                  className="overflow-hidden"
                >
                  <div className="pl-4 space-y-2 py-1 max-h-60 overflow-y-auto">
                    {treatments.map((t) => (
                      <Link key={t.id} to={t.path} className="block py-1.5 text-sm text-text-secondary hover:text-primary">
                        {t.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div variants={variants.slideLeft}>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => `block py-2 text-base font-semibold ${isActive ? 'text-primary' : 'text-text-main'}`}
            >
              Gallery
            </NavLink>
          </motion.div>
          
          <motion.div variants={variants.slideLeft}>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `block py-2 text-base font-semibold ${isActive ? 'text-primary' : 'text-text-main'}`}
            >
              Contact
            </NavLink>
          </motion.div>
        </motion.div>

        {/* Drawer Footer */}
        <div className="p-6 border-t border-primary/5 space-y-4">
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="tel:+917737465987" 
            className="flex items-center justify-center gap-2 w-full py-3 bg-brand-bg hover:bg-primary/5 border border-primary/10 rounded-xl text-primary font-semibold transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            +91 77374 65987
          </motion.a>
          <motion.a
            href="https://wa.me/917737465987?text=Hello%2C%20I%20want%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 w-full py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl shadow-soft transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            WhatsApp Appointment
          </motion.a>
        </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
