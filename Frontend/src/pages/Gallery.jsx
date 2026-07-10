import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, X, ZoomIn, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { easing } from '../lib/motion.jsx';

const galleryItems = [
  { 
    src: `${import.meta.env.BASE_URL}images/doctor_real_adjust.jpg`, 
    title: "Manual Spine Decompression", 
    category: "Treatment Rooms", 
    align: "object-[center_15%]" 
  },
  { 
    src: `${import.meta.env.BASE_URL}images/doctor_real_adjust2.jpg`, 
    title: "Shoulder Mobilization Therapy", 
    category: "Treatment Rooms", 
    align: "object-[center_15%]" 
  },
  { 
    src: `${import.meta.env.BASE_URL}images/rehab_exercise.png`, 
    title: "Active Physical Rehabilitation", 
    category: "Treatment Rooms", 
    align: "object-center" 
  },
  { 
    src: `${import.meta.env.BASE_URL}images/doctor_real_adjust4.jpg`, 
    title: "Cervical Spine Adjustment", 
    category: "Treatment Rooms", 
    align: "object-[center_8%]" 
  },
  { 
    src: `${import.meta.env.BASE_URL}images/ultrasound_therapy.png`, 
    title: "Therapeutic Ultrasound System", 
    category: "Equipment", 
    align: "object-center" 
  },
  { 
    src: `${import.meta.env.BASE_URL}images/doctor_real_desk.jpg`, 
    title: "Diagnostic Consultation Desk", 
    category: "Equipment", 
    align: "object-[center_12%]" 
  },
  { 
    src: `${import.meta.env.BASE_URL}images/clinic_poster_needling.jpg`, 
    title: "AIIMS New Delhi Needling Study Poster", 
    category: "Equipment", 
    align: "object-[center_15%]" 
  },
  { 
    src: `${import.meta.env.BASE_URL}images/clinic_exterior.jpg`, 
    title: "Clinic Exterior Signboard", 
    category: "Reception", 
    align: "object-center" 
  },
  { 
    src: `${import.meta.env.BASE_URL}images/doctor_real_award4.jpg`, 
    title: "Unacademy Centre Stage Recognition", 
    category: "Reception", 
    align: "object-center" 
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Treatment Rooms', 'Equipment', 'Reception'];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const handlePrev = useCallback(() => {
    setSelectedImage((current) => {
      if (!current) return null;
      const currentIndex = galleryItems.findIndex(item => item.src === current.src);
      const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      return galleryItems[prevIndex];
    });
  }, []);

  const handleNext = useCallback(() => {
    setSelectedImage((current) => {
      if (!current) return null;
      const currentIndex = galleryItems.findIndex(item => item.src === current.src);
      const nextIndex = (currentIndex + 1) % galleryItems.length;
      return galleryItems[nextIndex];
    });
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, handlePrev, handleNext]);

  // Close lightbox on click outside the image content
  const handleBackdropClick = (e) => {
    if (e.target.id === 'lightbox-backdrop') {
      setSelectedImage(null);
    }
  };

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
            <span className="text-teal-200">Media</span>
            <ChevronRight className="w-3 h-3 text-teal-200/50" />
            <span className="text-white font-semibold">Clinic Gallery</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
            Clinic Gallery Tour
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 px-6 bg-brand-bg">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* 2. INTRO PARAGRAPH */}
          <div className="text-left max-w-3xl">
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              Explore the facilities and treatment bays at Gulati Physiotherapy Clinic, designed to support comfortable patient recoveries.
            </p>
          </div>

          {/* 4. CATEGORY FILTER BAR */}
          <div className="flex flex-wrap items-center justify-start gap-2 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 text-xs md:text-sm font-bold rounded-xl transition duration-200 ${
                  activeFilter === cat 
                    ? 'bg-primary text-white shadow-soft' 
                    : 'bg-white text-text-secondary hover:text-primary border border-primary/5 hover:border-primary/20 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 3. IMAGE GALLERY GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer relative bg-white rounded-2xl overflow-hidden shadow-soft border border-primary/5 h-60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Image Container with scale-105 on hover */}
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className={`w-full h-full object-cover ${item.align || 'object-center'} group-hover:scale-105 transition-transform duration-500`} 
                  />
                </div>
                
                {/* Soft dark gradient overlay & View icon fading in */}
                <div className="absolute inset-0 bg-linear-to-t from-primary-darker/75 via-primary-darker/10 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-between p-5 transition duration-300">
                  <div className="flex justify-end">
                    <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
                      <ZoomIn className="w-4.5 h-4.5" />
                    </span>
                  </div>
                  
                  <div className="text-left space-y-1">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{item.category}</span>
                    <h3 className="text-white font-serif font-semibold text-sm md:text-base">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          id="lightbox-backdrop"
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-default"
        >
          {/* Close button (X icon top-right) */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition border border-white/10 z-50"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Arrow Button */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition border border-white/10 z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Right Arrow Button */}
          <button 
            onClick={handleNext}
            className="absolute right-4 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition border border-white/10 z-50"
            aria-label="Next image"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>

          {/* Centered Enlarged Image Content */}
          <div className="max-w-4xl max-h-[80vh] flex flex-col items-center gap-4 relative z-40 select-none">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[70vh] rounded-xl object-contain shadow-2xl border border-white/10 pointer-events-none" 
            />
            <div className="text-center text-white space-y-1 max-w-xl px-4">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">{selectedImage.category}</span>
              <h3 className="text-base md:text-xl font-serif font-medium">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
