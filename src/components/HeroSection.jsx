import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';

export default function HeroSection({ openBooking }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Premium skincare background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 via-brand-50/80 to-brand-50"></div>
      </div>

      {/* Floating Blobs for Soft Aesthetic */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-serif text-slate-900 leading-tight mb-6"
        >
          Skin is a beautiful thing — <br className="hidden md:block" />
          <span className="text-brand-500 italic">wear it beautifully.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed mx-auto"
        >
          A dermatology centre in Karamana, guided by Dr. Suchithra — delivering reliable and professional skin care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button onClick={openBooking} className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-brand-200 hover:shadow-brand-300 hover:-translate-y-0.5">
            Book Appointment
          </button>
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border-2 border-slate-300 hover:border-slate-800 text-slate-800 px-8 py-3.5 rounded-full font-medium transition-all text-center flex items-center justify-center cursor-pointer"
          >
            Explore Treatments
          </a>
        </motion.div>
      </div>
    </section>
  );
}
