import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Menu, 
  X, 
  ChevronDown
} from 'lucide-react';
import { treatments } from '../data/treatments';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null); // 'about' | 'treatments' | null
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
    `text-sm font-medium transition duration-200 py-2 border-b-2 ${
      isActive 
        ? "text-primary border-primary font-semibold" 
        : "text-text-main border-transparent hover:text-primary"
    }`;

  const dropdownItemClass = ({ isActive }) =>
    `block px-4 py-2 text-sm transition duration-150 ${
      isActive
        ? "bg-primary/10 text-primary font-semibold"
        : "text-text-main hover:bg-brand-bg hover:text-primary"
    }`;

  return (
    <>
      {/* Top Thin Info Bar (Desktop only, scrolls away naturally) */}
      <div className="hidden lg:flex bg-primary text-white text-xs py-2 px-6 justify-between items-center gap-2 font-sans border-b border-primary-dark w-full">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-1.5 justify-center">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>Near Suvi Eye Hospital, Talwandi, Kota</span>
          </div>
          <div className="flex items-center gap-1.5 justify-center">
            <Clock className="w-3.5 h-3.5 text-accent" />
            <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
          </div>
        </div>
        <a 
          href="tel:+917737465987" 
          className="flex items-center gap-1.5 font-semibold text-white hover:text-accent transition duration-200"
          aria-label="Call clinic at +91 77374 65987"
        >
          <Phone className="w-3.5 h-3.5 text-accent" />
          <span>+91 77374 65987</span>
        </a>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 w-full z-40 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md border-b border-primary/5 py-3' : 'py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="p-1 bg-white rounded-xl border border-primary/10 shadow-sm transition duration-300">
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
            <div className="relative group/dropdown">
              <button className="flex items-center gap-1 text-sm font-medium text-text-main hover:text-primary py-2 transition duration-200">
                <span>About</span>
                <ChevronDown className="w-4 h-4 text-text-secondary group-hover/dropdown:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-primary/5 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200 py-2 z-50">
                <NavLink to="/about-doctor" className={dropdownItemClass}>Dr. Vinay Gulati</NavLink>
                <NavLink to="/about/team" className={dropdownItemClass}>Our Specialized Team</NavLink>
              </div>
            </div>

            {/* Treatments Dropdown */}
            <div className="relative group/dropdown">
              <button className="flex items-center gap-1 text-sm font-medium text-text-main hover:text-primary py-2 transition duration-200">
                <span>Treatments</span>
                <ChevronDown className="w-4 h-4 text-text-secondary group-hover/dropdown:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-72 bg-white rounded-xl shadow-lg border border-primary/5 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200 py-2 z-50 max-h-[350px] overflow-y-auto scrollbar-thin">
                {treatments.map((t) => (
                  <NavLink key={t.id} to={t.path} className={dropdownItemClass}>
                    {t.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>

          {/* Book Appointment & Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/917737465987?text=Hello%2C%20I%20want%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-xl transition duration-300 shadow-soft"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Appointment
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-text-main hover:bg-brand-bg transition duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Overlay */}
        <div 
          className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden pointer-events-none ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'
          }`}
        />

      {/* Mobile Slide-in Drawer */}
      <div 
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-primary/5 flex justify-between items-center bg-brand-bg">
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
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg text-text-main hover:bg-white transition duration-200"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body - Scrollable Links */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => `block py-2 text-base font-semibold ${isActive ? 'text-primary' : 'text-text-main'}`}
          >
            Home
          </NavLink>

          {/* Mobile About Accordion */}
          <div className="border-b border-primary/5 pb-2">
            <button
              onClick={() => toggleMobileDropdown('about')}
              className="w-full flex justify-between items-center py-2 text-base font-semibold text-text-main"
            >
              <span>About</span>
              <ChevronDown className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${
                activeMobileDropdown === 'about' ? 'rotate-180' : ''
              }`} />
            </button>
            <div className={`mt-1 pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
              activeMobileDropdown === 'about' ? 'max-h-32 opacity-100 py-1' : 'max-h-0 opacity-0'
            }`}>
              <Link to="/about-doctor" className="block py-1.5 text-sm text-text-secondary hover:text-primary">Dr. Vinay Gulati</Link>
              <Link to="/about/team" className="block py-1.5 text-sm text-text-secondary hover:text-primary">Our Specialized Team</Link>
            </div>
          </div>

          {/* Mobile Treatments Accordion */}
          <div className="border-b border-primary/5 pb-2">
            <button
              onClick={() => toggleMobileDropdown('treatments')}
              className="w-full flex justify-between items-center py-2 text-base font-semibold text-text-main"
            >
              <span>Treatments</span>
              <ChevronDown className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${
                activeMobileDropdown === 'treatments' ? 'rotate-180' : ''
              }`} />
            </button>
            <div className={`mt-1 pl-4 space-y-2 overflow-y-auto transition-all duration-300 ${
              activeMobileDropdown === 'treatments' ? 'max-h-60 opacity-100 py-1' : 'max-h-0 opacity-0'
            }`}>
              {treatments.map((t) => (
                <Link key={t.id} to={t.path} className="block py-1.5 text-sm text-text-secondary hover:text-primary">
                  {t.name}
                </Link>
              ))}
            </div>
          </div>

          <NavLink 
            to="/gallery" 
            className={({ isActive }) => `block py-2 text-base font-semibold ${isActive ? 'text-primary' : 'text-text-main'}`}
          >
            Gallery
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `block py-2 text-base font-semibold ${isActive ? 'text-primary' : 'text-text-main'}`}
          >
            Contact
          </NavLink>
        </div>

        {/* Drawer Footer */}
        <div className="p-6 border-t border-primary/5 space-y-4">
          <a 
            href="tel:+917737465987" 
            className="flex items-center justify-center gap-2 w-full py-3 bg-brand-bg hover:bg-primary/5 border border-primary/10 rounded-xl text-primary font-semibold transition"
          >
            <Phone className="w-4 h-4" />
            +91 77374 65987
          </a>
          <a
            href="https://wa.me/917737465987?text=Hello%2C%20I%20want%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl shadow-soft transition"
          >
            <Phone className="w-4 h-4" />
            WhatsApp Appointment
          </a>
        </div>
      </div>
    </header>
    </>
  );
}
