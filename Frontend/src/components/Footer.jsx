import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock
} from 'lucide-react';
import { treatments } from '../data/treatments';

export default function Footer() {
  // Get top 5 treatments
  const topTreatments = treatments.slice(0, 5);

  return (
    <footer className="bg-primary-darker text-teal-50 pt-16 pb-8 px-6 font-sans border-t border-primary/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
        
        {/* Column 1: Brand details */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-1 bg-white rounded-xl border border-primary/10 shadow-sm shrink-0">
              <img 
                src={`${import.meta.env.BASE_URL}images/clinic_logo.png`} 
                alt="Gulati Physiotherapy Logo" 
                className="w-9 h-9 object-contain" 
              />
            </div>
            <div className="text-left">
              <span className="font-serif font-extrabold text-base tracking-tight text-white block leading-none">
                GULATI CLINIC
              </span>
              <span className="text-[9px] tracking-widest text-teal-300 uppercase block mt-0.5 font-bold">
                Physiotherapy & Rehab
              </span>
            </div>
          </div>
          
          <p className="text-sm text-teal-200/80 leading-relaxed">
            Kota's trusted center for advanced spinal adjustments, pain management, and neuro-physiotherapy. Restoring active movement for over 15 years.
          </p>

          <div className="flex items-center gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-lg bg-teal-900 hover:bg-accent hover:text-white flex items-center justify-center transition duration-300 text-teal-200"
              aria-label="Facebook Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-lg bg-teal-900 hover:bg-accent hover:text-white flex items-center justify-center transition duration-300 text-teal-200"
              aria-label="Instagram Profile"
            >
              <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-lg bg-teal-900 hover:bg-accent hover:text-white flex items-center justify-center transition duration-300 text-teal-200"
              aria-label="YouTube Channel"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.522 3.5 12 3.5 12 3.5s-7.522 0-9.388.555a3.002 3.002 0 0 0-2.11 2.108C0 8.029 0 12 0 12s0 3.971.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.478 20.5 12 20.5 12 20.5s7.522 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.971 24 12 24 12s0-3.971-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-lg bg-teal-900 hover:bg-accent hover:text-white flex items-center justify-center transition duration-300 text-teal-200"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6">
          <h3 className="text-white font-serif font-bold text-lg border-b border-teal-800 pb-2">Quick Links</h3>
          <ul className="space-y-3 text-sm text-teal-200/90">
            <li>
              <Link to="/" className="hover:text-accent transition duration-200">Home</Link>
            </li>
            <li>
              <Link to="/about-doctor" className="hover:text-accent transition duration-200">About</Link>
            </li>
            <li>
              <a href="/#treatments" className="hover:text-accent transition duration-200">Treatments</a>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-accent transition duration-200">Gallery</Link>
            </li>
            <li>
              <Link to="/patient-guidelines" className="hover:text-accent transition duration-200">Patient Guidelines</Link>
            </li>
            <li>
              <Link to="/warranties-guarantees" className="hover:text-accent transition duration-200">Warranties & Guarantees</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent transition duration-200">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Treatments */}
        <div className="space-y-6">
          <h3 className="text-white font-serif font-bold text-lg border-b border-teal-800 pb-2">Treatments</h3>
          <ul className="space-y-3 text-sm text-teal-200/90">
            {topTreatments.map((t) => (
              <li key={t.id}>
                <Link to={t.path} className="hover:text-accent transition duration-200 block truncate">
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="space-y-6">
          <h3 className="text-white font-serif font-bold text-lg border-b border-teal-800 pb-2">Contact Details</h3>
          <ul className="space-y-4 text-sm text-teal-200/90">
            <li className="flex gap-2.5 items-start">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-1" />
              <span>4W15, Sector - 4, Talwandi, Kota, Rajasthan 324005</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <a href="tel:+917737465987" className="hover:text-accent transition">+91 77374 65987</a>
            </li>
            <li className="flex gap-2.5 items-center">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <a href="mailto:info@gulatiphysiotherapy.com" className="hover:text-accent transition">info@gulatiphysiotherapy.com</a>
            </li>
            <li className="flex gap-2.5 items-start">
              <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
            </li>
          </ul>

          {/* Small Map Card */}
          <div className="mt-4">
            <div className="text-sm font-semibold text-white mb-2">Find Us On Map</div>
            <div className="rounded-lg overflow-hidden border border-teal-800 shadow-sm">
              <iframe
                title="Gulati Physiotherapy Clinic — mini map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1580126588267!2d75.83741727538356!3d25.15031157774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f85fa133c9a0b%3A0x82c5c2ab0b9a4443!2sGulati%20Physiotherapy%20Clinic!5e0!3m2!1sen!2sin!4v1720490000000!5m2!1sen!2sin"
                className="w-full h-40 border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="pt-3 space-y-2">
              <a
                href="tel:+917737465987"
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-white text-primary border border-primary/20 hover:bg-primary/5 text-xs font-bold rounded-xl transition duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Helpline
              </a>
              <a
                href="https://wa.me/917737465987?text=Hello%2C%20I%20want%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-accent hover:bg-accent-hover text-white text-xs font-bold rounded-xl transition duration-300 shadow-soft"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Appointment
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-teal-900 text-xs text-teal-300/60 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <span>&copy; {new Date().getFullYear()} Gulati Physiotherapy Clinic. All rights reserved.</span>
          <span className="hidden sm:inline text-teal-300/30">|</span>
          <span>
            Made with <a href="https://rightads.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold transition">Right Ads Digital</a>
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link to="/" className="hover:text-accent transition">Home</Link>
          <Link to="/about-doctor" className="hover:text-accent transition">About</Link>
          <a href="/#treatments" className="hover:text-accent transition">Treatments</a>
          <Link to="/gallery" className="hover:text-accent transition">Gallery</Link>
          <Link to="/patient-guidelines" className="hover:text-accent transition">Guidelines</Link>
          <Link to="/warranties-guarantees" className="hover:text-accent transition">Warranties</Link>
          <Link to="/contact" className="hover:text-accent transition">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
