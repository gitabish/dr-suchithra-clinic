import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Award } from 'lucide-react';

export default function HeroSection({ openBooking }) {
  return (
    <section className="relative min-h-[90vh] pt-24 pb-12 overflow-hidden bg-brand-50 flex items-center">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-100/30 -skew-x-12 transform translate-x-1/4 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left pt-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200 bg-white shadow-sm mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
              <p className="text-xs font-semibold text-brand-800 tracking-wider uppercase">
                Clinical Excellence in Dermatology
              </p>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-agomo font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight"
            >
              Advanced <span className="font-semibold italic text-brand-600">Dermatology</span> & Aesthetic Science
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg text-slate-600 mb-10 leading-relaxed font-sans max-w-lg"
            >
              Experience medical-grade precision combined with personalized care. 
              Dr. Emily Chen leads a team dedicated to uncovering the science of healthy, 
              resilient skin through FDA-approved protocols.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <button 
                onClick={openBooking} 
                className="bg-slate-900 hover:bg-brand-600 text-white px-10 py-4 rounded-xl font-semibold tracking-wide transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Book Consultation
              </button>
              <Link 
                to="/services" 
                className="group border border-slate-200 hover:border-slate-900 bg-white text-slate-900 px-10 py-4 rounded-xl font-semibold transition-all text-center flex items-center justify-center gap-2 shadow-sm"
              >
                Our Treatments
              </Link>
            </motion.div>

            {/* Clinical Trust Markers */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8"
            >
              <div className="flex items-center gap-2 text-slate-400">
                <Shield size={16} className="text-brand-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Board Certified</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Award size={16} className="text-brand-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest">FDA Approved Tech</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle size={16} className="text-brand-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Medical Grade</span>
              </div>
            </motion.div>
          </div>

          {/* Right Image Container */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative z-10 w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-8 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
                alt="Clinical dermatology consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </motion.div>
            
            {/* Floating Medical Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 rounded-3xl shadow-2xl z-20 max-w-[200px] border border-slate-50"
            >
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center">
                  <Shield className="text-brand-600" size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">100% Clinical</p>
                  <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">Evidence-based safety protocols for all patients.</p>
                </div>
              </div>
            </motion.div>

            {/* Background Decorative Circle */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-200/30 rounded-full blur-3xl -z-0"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
