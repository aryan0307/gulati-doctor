import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shirt, FileText, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { easing } from '../lib/motion.jsx';

export default function PatientGuidelines() {
  const guidelines = [
    {
      icon: <Shirt className="w-6 h-6" />,
      title: "What to Wear",
      description: "Wear loose, comfortable clothing (activewear, track pants, t-shirts) that allows easy access to the area being treated (e.g., knee, shoulder, or neck)."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Medical History Records",
      description: "Bring along any relevant medical reports, X-rays, MRI scans, or doctor referral prescriptions from previous consults."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Punctuality and Booking",
      description: "Arrive 10 minutes before your scheduled slot. If you need to cancel or rearrange your booking, please call us 24 hours in advance."
    }
  ];

  return (
    <div className="bg-brand-bg min-h-screen font-sans text-text-main">
      
      {/* 1. PAGE TITLE BANNER */}
      <section className="relative min-h-[380px] md:min-h-[420px] flex items-center py-16 px-6 text-white overflow-hidden">
        {/* Animated Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 animate-kenburns"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/clinic_room.png')` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary-darker/70 mix-blend-multiply z-1"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-darker/90 via-primary-darker/40 to-transparent z-2"></div>
        
        <div className="w-full max-w-4xl mx-auto space-y-4 relative z-10 text-left">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-teal-200 font-medium">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3 h-3 text-teal-200/50" />
            <span className="text-teal-200">Patient Info</span>
            <ChevronRight className="w-3 h-3 text-teal-200/50" />
            <span className="text-white font-semibold">Guidelines</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
            Patient Pre-Session Guidelines
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 px-6 bg-brand-bg">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* 2. INTRO PARAGRAPH */}
          <div className="text-left max-w-3xl">
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              To help ensure a smooth session, please review these brief clinical guidelines before your visit:
            </p>
          </div>

          {/* 3. GUIDELINES LIST (3-column grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {guidelines.map((g, idx) => (
              <div 
                key={idx}
                className="group bg-white p-8 rounded-2xl border border-primary/5 shadow-soft hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Number Badge + Circular Icon */}
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                      {g.icon}
                    </div>
                    <span className="text-4xl font-serif font-extrabold text-primary/10">
                      0{idx + 1}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-lg md:text-xl text-primary-darker">
                      {g.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {g.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 4. CTA STRIP (Amber-tinted callout box) */}
          <div className="bg-amber-50/60 border border-accent/15 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-lg text-text-main">
                Have questions before your visit?
              </h4>
              <p className="text-text-secondary text-sm">
                Get in touch with our team or schedule your next rehabilitation slot online.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary/5 font-bold rounded-xl transition duration-300 text-sm w-full sm:w-auto text-center"
              >
                Contact Us
              </Link>
              
              <a
                href="https://wa.me/917737465987?text=Hello%2C%20I%20want%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl shadow-soft hover:-translate-y-0.5 transition duration-300 text-sm w-full sm:w-auto text-center gap-1.5"
              >
                WhatsApp Appointment
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
