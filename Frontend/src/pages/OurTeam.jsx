import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Users, CheckSquare, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { easing } from '../lib/motion.jsx';

export default function OurTeam() {
  const teamMembers = [
    {
      id: 'dr-vinay-gulati',
      name: 'Dr. Vinay Gulati',
      role: 'Chief Specialist & Chiropractor',
      description: 'Leads clinical diagnoses and coordinates chiropractic and spinal alignment treatments with over 15 years of expertise.',
      image: `${import.meta.env.BASE_URL}images/doctor_real_desk.jpg`,
      align: 'object-[center_15%]',
      badge: <Stethoscope className="w-5 h-5 text-primary" />
    },
    {
      id: 'staff-physio-specialists',
      name: 'Staff Physio Specialists',
      role: 'Physical Rehabilitation Therapists',
      description: 'Certified therapists executing computerized traction, active stretching, and sports mobilization drills under the supervision of Dr. Vinay Gulati.',
      image: `${import.meta.env.BASE_URL}images/clinic_staff_team.png`,
      align: 'object-[center_8%]',
      badge: <CheckSquare className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <div className="bg-brand-bg min-h-screen font-sans text-text-main">
      
      {/* 1. PAGE TITLE BANNER */}
      <section className="relative min-h-[380px] md:min-h-[420px] flex items-center py-16 px-6 text-white overflow-hidden">
        {/* Animated Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 animate-kenburns"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/clinic_staff_team.png')` }}
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
            <span className="text-white font-semibold">Our Team</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
            Our Professional Rehabilitation Team
          </h1>
        </div>
      </section>

      {/* Main Content Container */}
      <section className="py-16 md:py-24 px-6 bg-brand-bg">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* 2. INTRO PARAGRAPH */}
          <div className="text-left max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
              <Users className="w-3.5 h-3.5" />
              Specialist Clinic Team
            </div>
            <p className="text-lg md:text-xl text-text-secondary font-serif leading-relaxed italic">
              "At Gulati Physiotherapy, every therapist is handpicked for clinical perfection and patient empathy. We work together under the supervision of Dr. Vinay Gulati to ensure your sessions are safe, comfortable, and result-oriented."
            </p>
          </div>

          {/* 3. TEAM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="group bg-white rounded-2xl border border-primary/5 shadow-soft hover:shadow-md hover:-translate-y-1 transition duration-300 overflow-hidden flex flex-col relative text-left"
              >
                {/* Visual Polish Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur p-2 rounded-xl border border-primary/10 shadow-soft z-20">
                  {member.badge}
                </div>

                {/* Top Image */}
                <div className="h-64 w-full overflow-hidden bg-teal-50/30 border-b border-primary/5">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={`w-full h-full object-cover ${member.align} group-hover:scale-103 transition-transform duration-500`}
                  />
                </div>

                {/* Profile Details */}
                <div className="p-6 md:p-8 grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-darker">
                      {member.name}
                    </h3>
                    <div className="text-xs md:text-sm font-semibold text-accent uppercase tracking-wider">
                      {member.role}
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed grow">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 4. ONGOING TRAINING & SAFETY SECTION */}
          <div className="p-6 md:p-10 bg-teal-50/40 rounded-3xl border-l-4 border-primary shadow-soft flex flex-col md:flex-row gap-6 items-start text-left">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
              <Shield className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-serif font-bold text-primary-darker">
                Ongoing Training & Safety
              </h3>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-2xl">
                Our team participates in yearly sports medicine and osteopathic seminars. We ensure that our techniques are backed by current scientific consensus, providing patients with safe care.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
