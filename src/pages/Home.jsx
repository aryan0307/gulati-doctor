import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Shield, Award, ArrowRight, Activity, CheckCircle, Sparkles, MapPin, Users, Heart, Star, Phone, Clock, RotateCw, Monitor, FileText, ArrowLeft, Cpu, TrendingUp, Calendar } from 'lucide-react';

// Reusable scroll reveal wrapper
function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

// Custom animated counter component
function AnimatedCounter({ value, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = parseInt(value, 10);
    if (start === end) return;

    let totalMilliseconds = duration * 1000;
    let incrementTime = Math.max(Math.floor(totalMilliseconds / end), 20);
    
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const services = [
    {
      title: "Back & Spine Care",
      desc: "Specialized non-surgical treatment for disc herniations, sciatica, and chronic lower back strains.",
      icon: Shield,
      path: "/treatments/back-spine-pain"
    },
    {
      title: "Joint & Knee Rehab",
      desc: "Comprehensive therapeutic programs restoring movement and strength post-injury or arthritis flare-ups.",
      icon: RotateCw,
      path: "/treatments/joint-knee-rehab"
    },
    {
      title: "Sports Injury Recovery",
      desc: "Accelerated athletic recovery regimes covering ligament tears, sprains, and kinetic chain imbalances.",
      icon: TrendingUp,
      path: "/treatments/sports-injury"
    },
    {
      title: "Chiropractic Adjustment",
      desc: "Precise skeletal manipulation and spinal alignment to alleviate nerve compression and stiffness.",
      icon: Sparkles,
      path: "/treatments/chiropractic-alignment"
    },
    {
      title: "Stroke & Paralysis Recovery",
      desc: "Neuro-rehabilitation therapies engineered to trigger motor relearning, muscle tone stability, and independence.",
      icon: Heart,
      path: "/treatments/stroke-paralysis"
    },
    {
      title: "Electrotherapy Treatments",
      desc: "Advanced biological currents including IFT, TENS, and ultrasonic thermal waves to block pain pathways.",
      icon: Cpu,
      path: "/treatments/electrotherapy"
    }
  ];

  const highlights = [
    {
      icon: Award,
      title: "Expert Care",
      desc: "Guided by clinical specialists with extensive chiropractic and spinal certification."
    },
    {
      icon: Monitor,
      title: "Modern Technology",
      desc: "Equipped with computerized decompression beds and premium bio-current stimulators."
    },
    {
      icon: FileText,
      title: "Personalized Plans",
      desc: "Every recovery plan is custom-designed based on a detailed biomechanical assessment."
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      desc: "Over 15,000 restored lifestyles in Kota, from simple sprains to complex paralysis cases."
    }
  ];

  const galleryImages = [
    { src: `${import.meta.env.BASE_URL}images/doctor_real_desk.jpg`, title: "Diagnostic Consultation Room", align: "object-[center_12%]" },
    { src: `${import.meta.env.BASE_URL}images/doctor_real_adjust.jpg`, title: "Manual Spine Decompression", align: "object-[center_15%]" },
    { src: `${import.meta.env.BASE_URL}images/doctor_real_adjust2.jpg`, title: "Shoulder Mobilization Therapy", align: "object-[center_15%]" },
    { src: `${import.meta.env.BASE_URL}images/doctor_real_adjust4.jpg`, title: "Cervical Spine Adjustment", align: "object-[center_8%]" },
    { src: `${import.meta.env.BASE_URL}images/clinic_poster_needling.jpg`, title: "Speech at AIIMS New Delhi Poster", align: "object-[center_15%]" },
    { src: `${import.meta.env.BASE_URL}images/doctor_real_award3.jpg`, title: "World Physiotherapy Day Award", align: "object-[center_12%]" }
  ];

  return (
    <div className="bg-brand-bg min-h-screen text-text-main font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-cover bg-center py-20 lg:py-32 px-6 text-white overflow-hidden" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/hero.png')` }}>
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-primary-darker/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-darker/90 via-primary-darker/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10 w-full">
          {/* Left Text */}
          <div className="flex-1 space-y-6 text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
              <Activity className="w-3.5 h-3.5" />
              Excellence In Motion
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-white leading-tight">
              Restoring Movement.<br />
              <span className="text-accent font-sans">Elevating Quality Of Life.</span>
            </h1>
            <p className="text-teal-100 text-base md:text-lg max-w-xl leading-relaxed">
              Experience premium non-surgical recovery at Kota's premier physiotherapy and chiropractic clinic. Led by expert hands with state-of-the-art rehabilitation methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://wa.me/917737465987?text=Hello%2C%20I%20want%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl shadow-soft hover:-translate-y-0.5 transition duration-300 gap-2 text-sm"
              >
                <Phone className="w-4.5 h-4.5" />
                WhatsApp Appointment
              </a>
              <a
                href="#treatments"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('treatments')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-xl shadow-soft hover:-translate-y-0.5 transition duration-300 gap-2 text-sm backdrop-blur-xs"
              >
                Explore Treatments
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Info Card */}
          <div className="grow w-full lg:w-[45%] flex justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl max-w-md w-full text-left space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-extrabold text-white text-lg leading-tight">Gulati Clinic</h3>
                  <p className="text-teal-200 text-xs uppercase tracking-widest font-semibold mt-0.5">Physiotherapy & Rehab</p>
                </div>
              </div>
              
              <p className="text-teal-100 text-sm leading-relaxed">
                Empowering patients through targeted spinal adjustments, manual decompression, and advanced orthopedic therapies since 2011.
              </p>
              
              <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs text-teal-200">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Open Daily
                </span>
                <span>Talwandi, Kota</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary-darker/65 backdrop-blur-md border-t border-white/10 py-6 px-6 z-25">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center space-y-0.5">
              <div className="text-2xl md:text-3xl font-serif font-extrabold text-white">
                <AnimatedCounter value="15" suffix="+" />
              </div>
              <p className="text-[10px] text-teal-200 uppercase tracking-widest font-bold">Years of Experience</p>
            </div>
            <div className="text-center space-y-0.5 border-l border-white/10">
              <div className="text-2xl md:text-3xl font-serif font-extrabold text-white">
                <AnimatedCounter value="5000" suffix="+" />
              </div>
              <p className="text-[10px] text-teal-200 uppercase tracking-widest font-bold">Happy Patients</p>
            </div>
            <div className="text-center space-y-0.5 border-l border-white/10">
              <div className="text-2xl md:text-3xl font-serif font-extrabold text-white">
                <AnimatedCounter value="15" suffix="+" />
              </div>
              <p className="text-[10px] text-teal-200 uppercase tracking-widest font-bold">Advanced Treatments</p>
            </div>
            <div className="text-center space-y-0.5 border-l border-white/10">
              <div className="text-2xl md:text-3xl font-serif font-extrabold text-white">
                <AnimatedCounter value="98" suffix="%" />
              </div>
              <p className="text-[10px] text-teal-200 uppercase tracking-widest font-bold">Recovery Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Doctor image with floating badge */}
          <div className="flex-1 relative w-full max-w-md lg:max-w-none">
            <ScrollReveal>
              <div className="relative">
                <img 
                  src={`${import.meta.env.BASE_URL}images/doctor_real_desk.jpg`} 
                  alt="Dr. Vinay Gulati" 
                  className="w-full aspect-4/5 object-cover object-[center_15%] rounded-3xl shadow-soft border border-primary/10"
                />
                
                {/* Floating overlapping Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-soft border border-primary/10 max-w-50 text-left">
                  <div className="w-10 h-10 bg-accent/15 text-accent rounded-xl flex items-center justify-center mb-2">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-primary-dark leading-tight">15+ Years</h4>
                  <p className="text-xs text-text-secondary mt-1">Clinical Trust & Spine Expertise</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Text content */}
          <div className="flex-1 text-left space-y-6">
            <ScrollReveal>
              <div className="space-y-4">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Meet Our Chief Specialist</span>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-darker">Dr. Vinay Gulati</h2>
                <p className="text-xs bg-primary/10 text-primary-dark font-semibold px-3 py-1 rounded-full inline-block">
                  Founder & Chief Physiotherapist | Chiropractic Specialist
                </p>
              </div>

              <div className="space-y-4 text-text-secondary text-sm md:text-base leading-relaxed pt-2">
                <p>
                  Dr. Vinay Gulati holds a postgraduate degree in Orthopedic Physiotherapy and certifications in manual therapy and spine decompression. Over the last 15 years, he has successfully treated thousands of patients in Kota, Rajasthan, specializing in non-surgical recovery for disc problems and sciatica.
                </p>
                <p>
                  Our clinic combines chiropractic adjustments with high-tech modalities like computerized decompression and bio-currents to accelerate healing and deliver lasting wellness outcomes.
                </p>
              </div>

              {/* Accreditation cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-brand-bg p-4 rounded-xl border border-primary/5 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white text-primary rounded-lg flex items-center justify-center shadow-sm">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-serif font-bold text-sm text-primary-dark">Advanced Certifications</h4>
                    <p className="text-[11px] text-text-secondary">USA-standard spinal manipulation protocols</p>
                  </div>
                </div>
                
                <div className="bg-brand-bg p-4 rounded-xl border border-primary/5 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white text-accent rounded-lg flex items-center justify-center shadow-sm">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-serif font-bold text-sm text-primary-dark">Patient Centered Care</h4>
                    <p className="text-[11px] text-text-secondary">Personalized biomechanical treatments</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-soft transition duration-300 gap-2 text-sm"
                >
                  Connect Personally
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 3. SERVICES/TREATMENTS SECTION */}
      <section id="treatments" className="py-20 md:py-28 px-6 bg-[#F0FDFA]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mx-auto">Advanced Healing Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-darker">Our Specialized Treatments</h2>
            <p className="text-text-secondary text-sm md:text-base">
              Providing customized, non-surgical treatment pathways for a wide range of orthopedic and neurological conditions.
            </p>
          </div>

          {/* Grid of 6 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div className="bg-white p-8 rounded-2xl border border-primary/5 shadow-soft hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full text-left group">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif font-bold text-xl text-primary-dark transition duration-300">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                    
                    <div className="pt-6">
                      <Link
                        to={service.path}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-accent transition duration-200 uppercase tracking-wider"
                      >
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="pt-6 text-center">
            <Link
              to="/treatments/back-spine-pain"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary border border-primary/20 hover:bg-primary/5 font-bold rounded-xl shadow-soft transition duration-300 gap-2 text-sm"
            >
              View All Treatments
            </Link>
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE US / STATS STRIP */}
      <section className="py-16 px-6 bg-white border-y border-primary/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="group flex gap-4 items-start text-left bg-brand-bg p-6 rounded-2xl border border-primary/5 hover:-translate-y-1 transition duration-300">
                  <div className="w-10 h-10 bg-white text-primary rounded-xl flex items-center justify-center shadow-sm shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-primary-dark">{item.title}</h4>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 5. GALLERY PREVIEW */}
      <section className="py-20 md:py-28 px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mx-auto">Our Clinic</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-darker">Clinical Environment & Setup</h2>
            <p className="text-text-secondary text-sm md:text-base">
              Step inside our modern facility in Kota, designed for comfort and professional rehabilitation care.
            </p>
          </div>

          {/* Grid of 6 Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-soft border border-primary/5 aspect-4/3">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className={`w-full h-full object-cover ${img.align || 'object-[center_15%]'} group-hover:scale-105 transition duration-500`} 
                  />
                  <div className="absolute inset-0 bg-primary-darker/60 opacity-0 group-hover:opacity-100 flex items-end justify-start p-5 transition duration-300">
                    <span className="text-white font-serif font-semibold text-base">{img.title}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="pt-6 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-soft transition duration-300 gap-2 text-sm"
            >
              View Full Gallery
            </Link>
          </div>

        </div>
      </section>

      {/* 6. APPOINTMENT CTA SECTION */}
      <section className="py-20 px-6 bg-linear-to-tr from-primary-dark to-primary-darker text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-serif leading-tight">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-teal-100 max-w-xl mx-auto text-sm md:text-base leading-relaxed mt-4">
              Schedule a premium, non-surgical assessment with Dr. Vinay Gulati. Restoring pain-free joint mobility and muscular balance.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6 w-full max-w-2xl mx-auto">
              <a 
                href="tel:+917737465987" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary border border-primary/20 hover:bg-primary/5 font-bold rounded-xl shadow-soft transition duration-300 gap-2 text-base w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              
              <a
                href="https://wa.me/917737465987?text=Hello%2C%20I%20want%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl shadow-lg shadow-accent/25 hover:-translate-y-0.5 transition duration-300 gap-2 text-base w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                WhatsApp Appointment
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
