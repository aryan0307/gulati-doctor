import React, { useState } from 'react';
import { Phone, MessageSquare, X } from 'lucide-react';

export default function FloatingContactBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Contact Box */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-40 w-80 bg-linear-to-br from-primary to-primary-dark rounded-2xl shadow-2xl border border-accent/30 overflow-hidden animate-in">
          {/* Header */}
          <div className="bg-linear-to-r from-primary to-primary-dark p-4 flex items-center justify-between">
            <div>
              <h3 className="text-white font-bold text-lg font-serif">Quick Contact</h3>
              <p className="text-teal-100 text-xs">Reach out to us now</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition text-white"
              aria-label="Close contact box"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Phone */}
            <a
              href="tel:+917737465987"
              className="flex items-center gap-3 p-3 bg-white/10 hover:bg-accent/20 rounded-xl transition duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition">
                <Phone className="w-5 h-5 text-accent group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-teal-100 font-medium">Call Us</p>
                <p className="text-sm font-bold text-white">+91 77374 65987</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917737465987?text=Hi%20Gulati%20Clinic%2C%20I%20need%20more%20information"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-white/10 hover:bg-accent/20 rounded-xl transition duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition">
                <MessageSquare className="w-5 h-5 text-accent group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-teal-100 font-medium">WhatsApp</p>
                <p className="text-sm font-bold text-white">Message Us</p>
              </div>
            </a>

            {/* WhatsApp Appointment CTA */}
            <a
              href="https://wa.me/917737465987?text=Hello%2C%20I%20want%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 bg-linear-to-r from-accent to-accent/80 hover:from-accent hover:to-accent rounded-xl transition duration-200 text-white font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Appointment
            </a>

            {/* Quick Info */}
            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
              <p className="text-xs text-teal-200 text-center leading-relaxed">
                📍 <span className="font-semibold">Open Mon-Sat</span><br />
                8:00 AM - 8:00 PM<br />
                <span className="text-accent">Near Suvi Eye Hospital, Kota</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-linear-to-br from-accent to-accent/80 hover:from-accent hover:to-accent shadow-2xl flex items-center justify-center text-white transition duration-300 transform hover:scale-110 hover:shadow-accent/50 group"
          aria-label="Open contact box"
        >
          <Phone className="w-7 h-7 group-hover:scale-125 transition" />
        </button>
      )}
    </>
  );
}
