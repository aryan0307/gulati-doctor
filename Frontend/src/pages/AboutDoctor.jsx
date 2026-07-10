import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, ChevronRight, Award, Shield } from 'lucide-react';
import { ScrollReveal, variants, easing } from '../lib/motion.jsx';

export default function AboutDoctor() {
  return (
    <div className="bg-brand-bg min-h-screen font-sans text-text-main">
      
      {/* 1. PAGE TITLE BANNER */}
      <section className="relative min-h-[380px] md:min-h-[420px] flex items-center py-16 px-6 text-white overflow-hidden">
        {/* Animated Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 animate-kenburns"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/doctor_real_desk.jpg')` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary-darker/70 mix-blend-multiply z-1"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-darker/90 via-primary-darker/40 to-transparent z-2"></div>
        
        <div className="w-full max-w-4xl mx-auto space-y-4 relative z-10 text-left">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-teal-200 font-medium">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3 h-3 text-teal-200/50" />
            <span className="text-teal-200">About</span>
            <ChevronRight className="w-3 h-3 text-teal-200/50" />
            <span className="text-white font-semibold">Dr. Vinay Gulati</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
            Dr. Vinay Gulati - Chief Specialist
          </h1>
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="py-16 md:py-24 px-6 bg-brand-bg">
        <div className="max-w-3xl mx-auto space-y-12">
          
          {/* Portrait Image */}
          <ScrollReveal>
            <div className="w-full overflow-hidden rounded-2xl border border-primary/10 shadow-soft">
              <motion.img 
                src={`${import.meta.env.BASE_URL}images/doctor_real_desk.jpg`} 
                alt="Dr. Vinay Gulati at clinical desk" 
                className="w-full h-[320px] sm:h-[450px] object-cover object-[center_15%]"
                initial={{ opacity: 0, scale: 1.08 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8, ease: easing.easeOutExpo }}
              />
            </div>
          </ScrollReveal>

          {/* Intro paragraph (prose-lg style) */}
          <ScrollReveal>
            <div className="text-left">
              <p className="text-lg md:text-xl text-text-secondary font-serif italic leading-relaxed max-w-3xl">
                "Dr. Vinay Gulati, the visionary founder and chief clinical director of Gulati Physiotherapy Clinic, has spent over 15 years developing targeted recovery methods. He represents a new breed of patient-focused practitioners who emphasize active care over long prescription tables."
              </p>
            </div>
          </ScrollReveal>

          {/* Medical Philosophy & Approach */}
          <ScrollReveal>
            <div className="text-left space-y-4">
              <div className="space-y-1">
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary-darker">
                  Medical Philosophy & Approach
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full"></div>
              </div>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-3xl">
                I believe that real pain relief requires understanding each patient's individual biomechanics. We don't just treat the pain point; we look at the system. By combining hands-on spinal corrections with medical technology, we can relieve pressure on pinched nerves and rebuild muscle memory.
              </p>
            </div>
          </ScrollReveal>

          {/* Certifications & Milestones */}
          <ScrollReveal>
            <div className="text-left space-y-4">
              <div className="space-y-1">
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary-darker">
                  Certifications & Professional Milestones
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full"></div>
              </div>
              
              <ul className="space-y-3.5 pt-2 max-w-3xl">
                {[
                  "Doctor of Physiotherapy with advanced research in spinal decompression.",
                  "Specialized Post-Graduate training in Manual Osteopathic therapy and joints alignment.",
                  "Certified Chiropractic Adjustments Specialist.",
                  "Member of National Physiotherapists Association & Sports Medicine boards."
                ].map((milestone, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1, ease: easing.easeOutCubic }}
                    className="flex items-start gap-3 text-sm md:text-base text-text-secondary leading-relaxed"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{milestone}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* 2-Column Fact Cards Grid */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Card 1 */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="group bg-white p-6 rounded-2xl border border-primary/5 shadow-soft hover:shadow-md transition text-left flex gap-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white"
                >
                  <Shield className="w-6 h-6" />
                </motion.div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-base text-primary-dark">Expertise Area</h4>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                    Manual Chiropractic alignment, spinal traction therapies, postural recomputation, and nerve pain decompression.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="group bg-white p-6 rounded-2xl border border-primary/5 shadow-soft hover:shadow-md transition text-left flex gap-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white"
                >
                  <Award className="w-6 h-6" />
                </motion.div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-base text-primary-dark">Years In Practice</h4>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                    Over 15 years guiding patients in Kota to achieve natural recovery, avoiding surgical interventions.
                  </p>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Clinical Practice & Recognitions Gallery */}
          <ScrollReveal>
            <div className="text-left space-y-6 pt-6">
              <div className="space-y-1">
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary-darker">
                  Clinical Practice & Recognitions
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full"></div>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                variants={variants.staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { src: `${import.meta.env.BASE_URL}images/doctor_real_award3.jpg`, title: "World Physiotherapy Day Honour", desc: "Awarded for exceptional clinical contributions" },
                  { src: `${import.meta.env.BASE_URL}images/doctor_real_award2.jpg`, title: "Rajasthan MedEx Award", desc: "Presented by Aditi Govitrikar" },
                  { src: `${import.meta.env.BASE_URL}images/doctor_real_award1.jpg`, title: "Healthcare Summit Leadership", desc: "Honoured at state medical summit" },
                  { src: `${import.meta.env.BASE_URL}images/doctor_real_adjust.jpg`, title: "Spine & Joint Decompression", desc: "Advanced chiropractic adjustment" },
                  { src: `${import.meta.env.BASE_URL}images/doctor_real_adjust4.jpg`, title: "Cervical Decompression", desc: "Targeted nerve relief adjustment" },
                  { src: `${import.meta.env.BASE_URL}images/clinic_poster_needling.jpg`, title: "Needling Presentation at AIIMS", desc: "Poster demonstrating Australian Needling" }
                ].map((img, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={variants.scaleIn}
                    transition={{ delay: idx * 0.08 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group relative overflow-hidden rounded-xl border border-primary/5 shadow-soft bg-white"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-teal-50/50">
                      <motion.img 
                        src={img.src} 
                        alt={img.title} 
                        className="w-full h-full object-cover object-[center_15%]"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, ease: easing.easeOutCubic }}
                      />
                    </div>
                    <div className="p-3 text-left">
                      <h4 className="font-serif font-bold text-sm text-primary-dark truncate">{img.title}</h4>
                      <p className="text-[10px] text-text-secondary line-clamp-1">{img.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>

          {/* CTA Action Block */}
          <ScrollReveal>
            <div className="pt-8 text-center">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                <motion.a
                  href="tel:+917737465987"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary border border-primary/20 hover:bg-primary/5 font-bold rounded-xl shadow-soft transition duration-300 gap-2.5 text-base w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.a>
                <motion.a
                  href="https://wa.me/917737465987?text=Hello%2C%20I%20want%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl shadow-lg shadow-accent/20 transition duration-300 gap-2.5 text-base w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp Appointment
                </motion.a>
              </div>
            </div>
          </ScrollReveal>


        </div>
      </section>

    </div>
  );
}
