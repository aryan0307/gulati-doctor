import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, X } from 'lucide-react';
import { easing } from '../lib/motion.jsx';

export default function FloatingContactBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Contact Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, ease: easing.easeOutCubic }}
            className="fixed bottom-6 right-6 z-40 w-80 bg-linear-to-br from-primary to-primary-dark rounded-2xl shadow-2xl border border-accent/30 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-linear-to-r from-primary to-primary-dark p-4 flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold text-lg font-serif">Quick Contact</h3>
                <p className="text-teal-100 text-xs">Reach out to us now</p>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition text-white"
                aria-label="Close contact box"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Phone */}
              <motion.a
                href="tel:+917737465987"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-3 bg-white/10 hover:bg-accent/20 rounded-xl transition duration-200 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 rounded-lg bg-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition"
                >
                  <Phone className="w-5 h-5 text-accent group-hover:text-white" />
                </motion.div>
                <div>
                  <p className="text-xs text-teal-100 font-medium">Call Us</p>
                  <p className="text-sm font-bold text-white">+91 77374 65987</p>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/917737465987?text=Hi%20Gulati%20Clinic%2C%20I%20need%20more%20information"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-3 bg-white/10 hover:bg-accent/20 rounded-xl transition duration-200 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 rounded-lg bg-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition"
                >
                  <MessageSquare className="w-5 h-5 text-accent group-hover:text-white" />
                </motion.div>
                <div>
                  <p className="text-xs text-teal-100 font-medium">WhatsApp</p>
                  <p className="text-sm font-bold text-white">Message Us</p>
                </div>
              </motion.a>

              {/* WhatsApp Appointment CTA */}
              <motion.a
                href="https://wa.me/917737465987?text=Hello%2C%20I%20want%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 p-3 bg-linear-to-r from-accent to-accent/80 hover:from-accent hover:to-accent rounded-xl transition duration-200 text-white font-bold text-sm shadow-lg hover:shadow-xl"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Appointment
              </motion.a>

              {/* Quick Info */}
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                <p className="text-xs text-teal-200 text-center leading-relaxed">
                  📍 <span className="font-semibold">Open Mon-Sat</span><br />
                  8:00 AM - 8:00 PM<br />
                  <span className="text-accent">4W15, Sector - 4, Talwandi, Kota</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-linear-to-br from-accent to-accent/80 hover:from-accent hover:to-accent shadow-2xl flex items-center justify-center text-white transition duration-300 hover:shadow-accent/50 group"
            aria-label="Open contact box"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: easing.easeInOutCubic }}
            >
              <Phone className="w-7 h-7 group-hover:scale-125 transition" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
