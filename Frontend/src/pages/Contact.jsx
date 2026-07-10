import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, MapPin, Clock, Mail, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { easing } from '../lib/motion.jsx';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required.";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) {
      tempErrors.phone = "Please enter a valid phone number (10-15 digits).";
    }
    if (!formData.message.trim()) tempErrors.message = "Message content is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear inline error when typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Generate formatted WhatsApp message
    const formattedText = `Hello, I want to book an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/917737465987?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', phone: '', message: '' });

    // Auto clear success banner after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <div className="bg-brand-bg min-h-screen font-sans text-text-main relative">

      {/* 1. PAGE TITLE BANNER */}
      <section className="relative min-h-[380px] md:min-h-[420px] flex items-center py-16 px-6 text-white overflow-hidden">
        {/* Animated Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 animate-kenburns"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/clinic_exterior.jpg')` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary-darker/70 mix-blend-multiply z-1"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-darker/90 via-primary-darker/40 to-transparent z-2"></div>

        <div className="w-full max-w-4xl mx-auto space-y-4 relative z-10 text-left">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-teal-200 font-medium">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3 h-3 text-teal-200/50" />
            <span className="text-white font-semibold">Contact</span>
          </nav>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
            Contact Gulati Physiotherapy Clinic
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 px-6 bg-brand-bg">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* 2. INTRO PARAGRAPH */}
          <div className="text-left max-w-3xl">
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              Contact us using the helpline numbers below or fill out the booking form to request an appointment slot.
            </p>
          </div>

          {/* 3. TWO-COLUMN INFO + MAP SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">

            {/* Left Column: Helpline Numbers Card */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-primary/5 shadow-soft space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="font-serif font-bold text-xl md:text-2xl text-primary-darker">
                  Helpline Numbers
                </h3>

                {/* Large clickable phone number */}
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xs font-semibold text-text-secondary uppercase tracking-widest">Call & WhatsApp Helpline</span>
                    <div>
                      <a
                        href="tel:+917737465987"
                        className="text-xl md:text-2xl font-serif font-bold text-primary hover:text-primary-hover transition duration-200"
                      >
                        +91 77374 65987
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 pt-2 border-t border-primary/10">
                  {/* Address info */}
                  <div className="flex gap-4 items-start">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="font-bold text-primary-dark text-sm">Clinic Location</h4>
                      <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                        4W15, Sector - 4, Talwandi, Kota, Rajasthan 324005
                      </p>
                    </div>
                  </div>

                  {/* Clock working hours */}
                  <div className="flex gap-4 items-start">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="font-bold text-primary-dark text-sm">Working Hours</h4>
                      <p className="text-xs md:text-sm text-text-secondary">
                        Mon - Sat: 8:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Email info */}
                  <div className="flex gap-4 items-start">
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="font-bold text-primary-dark text-sm">Email Address</h4>
                      <a
                        href="mailto:info@gulatiphysiotherapy.com"
                        className="text-xs md:text-sm text-text-secondary hover:text-primary transition"
                      >
                        info@gulatiphysiotherapy.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Google Maps Iframe */}
            <div className="rounded-2xl overflow-hidden border border-primary/10 shadow-soft h-80 lg:h-auto relative bg-teal-50/20">
              <iframe
                title="Gulati Physiotherapy Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1580126588267!2d75.83741727538356!3d25.15031157774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f85fa133c9a0b%3A0x82c5c2ab0b9a4443!2sGulati%20Physiotherapy%20Clinic!5e0!3m2!1sen!2sin!4v1720490000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* 4. QUICK CONTACT FORM SECTION */}
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-primary/5 shadow-soft text-left space-y-8">
            <div className="space-y-2 border-b border-primary/10 pb-4">
              <h3 className="font-serif font-bold text-2xl text-primary-darker">
                Send us a Message
              </h3>
              <p className="text-xs md:text-sm text-text-secondary">
                Have a question or looking to consult? Drop your details and we will connect via WhatsApp.
              </p>
            </div>

            {/* Success toast notification */}
            {submitSuccess && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-center gap-3 animate-fade-in">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs md:text-sm font-semibold">Thank you! Opening WhatsApp to send your message.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-text-main uppercase tracking-wider" htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 text-sm rounded-xl border ${errors.name ? 'border-red-500' : 'border-primary/10'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-brand-bg`}
                  />
                  {errors.name && <p className="text-xs text-red-500 font-semibold">{errors.name}</p>}
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-text-main uppercase tracking-wider" htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-4 py-3 text-sm rounded-xl border ${errors.phone ? 'border-red-500' : 'border-primary/10'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-brand-bg`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 font-semibold">{errors.phone}</p>}
                </div>

              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-text-main uppercase tracking-wider" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your recovery goals, symptoms, or queries..."
                  className={`w-full px-4 py-3 text-sm rounded-xl border ${errors.message ? 'border-red-500' : 'border-primary/10'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-brand-bg`}
                ></textarea>
                {errors.message && <p className="text-xs text-red-500 font-semibold">{errors.message}</p>}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition duration-300 gap-2 shadow-soft disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wider"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 5. FLOATING MOBILE "CALL NOW" BUTTON */}
      <div className="sm:hidden fixed bottom-6 right-6 z-40">
        <a
          href="tel:+917737465987"
          className="w-14 h-14 bg-accent hover:bg-accent-hover text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 active:scale-95 border border-white/20"
          aria-label="Call clinic now"
        >
          <Phone className="w-6 h-6 animate-pulse" />
        </a>
      </div>

    </div>
  );
}
