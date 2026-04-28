import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-brand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                alt="Clinic Care" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-200/50 rounded-full blur-3xl -z-0"></div>
            <div className="absolute top-10 -left-10 w-32 h-32 border-2 border-brand-300 rounded-full opacity-20"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-600 font-semibold tracking-[0.2em] uppercase text-xs mb-6 block">
              The Clinic Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-[1.2] mb-8">
              Dermatology practiced <br />
              <span className="italic font-light text-brand-500">with intention.</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light mb-10">
              <p>
                At Aura Skin Clinic, we listen first, diagnose with precision, and treat with a deep commitment 
                to uncovering the root cause of your concerns.
              </p>
              <p>
                Dr. Emily Chen and our dedicated team integrate advanced medical science with an empathetic 
                understanding of your skin's unique journey. Every detail reflects our promise to deliver 
                personalized care at the highest standard.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 items-center">
              <Link 
                to="/about" 
                className="bg-slate-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-600 transition-all shadow-lg hover:shadow-xl"
              >
                Learn Our Full Story
              </Link>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-serif text-brand-600">15+</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold leading-tight">
                  Years of <br /> Excellence
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
