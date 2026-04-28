import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';
import { Link } from 'react-router-dom';

export default function HeroSection({ openBooking }) {
  return (
    <section className="relative min-h-[90vh] pt-24 pb-12 overflow-hidden bg-brand-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left z-10 pt-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full border border-brand-200 bg-brand-100/50 mb-6"
            >
              <p className="text-sm font-medium text-brand-800 tracking-wide uppercase">
                Premium Dermatology Care
              </p>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-sans lg:font-serif font-light text-slate-900 leading-[1.1] mb-6 tracking-tight"
            >
              Renewing <br className="hidden md:block" />
              <span className="font-semibold italic text-brand-600">Your Skin's</span> Natural Harmony
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg text-slate-600 mb-10 leading-relaxed font-sans"
            >
              We prioritize advanced medical science with an empathetic understanding of your skin's unique journey. Experience a quiet return to clarity and confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button 
                onClick={openBooking} 
                className="bg-slate-900 hover:bg-brand-600 text-white px-8 py-4 rounded-xl font-medium tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Book Appointment
              </button>
              <Link 
                to="/services" 
                className="group border border-slate-300 hover:border-slate-900 bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-medium transition-all text-center flex items-center justify-center gap-2"
              >
                Explore Services
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="relative z-10 w-full h-[60vh] lg:h-[80vh] rounded-2xl overflow-hidden shadow-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img
                src={heroImg}
                alt="Premium skincare treatment"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Subtle inner shadow overlay */}
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] pointer-events-none"></div>
            </motion.div>
            
            {/* Minimal Decorative Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-10 -left-10 md:-left-16 bg-white p-6 rounded-2xl shadow-xl hidden md:block max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">FDA Approved</p>
                  <p className="text-xs text-slate-500">Advanced Technology</p>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
