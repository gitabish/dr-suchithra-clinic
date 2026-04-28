import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-brand-100 rounded-[2rem] transform translate-x-4 translate-y-4"></div>
          <img 
            src="/doctor_profile_1777228706920-BUuCSS3N.png" 
            alt="Dr. Suchithra" 
            className="relative z-10 rounded-[2rem] shadow-xl shadow-slate-200/50 object-cover w-full h-[600px]"
          />
        </motion.div>

        {/* Content Column */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6 leading-tight">
            A quieter, more considered kind of dermatology.
          </h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Led by Dr. Suchithra, our clinic blends clinical excellence with a calming, luxurious environment. We understand that your skin is unique, which is why every treatment plan is tailored specifically to you, utilizing the latest in dermatological science.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-brand-50 p-6 rounded-2xl">
              <div className="text-3xl font-serif text-brand-600 mb-1">12+</div>
              <div className="text-sm font-medium text-slate-600">Years of Practice</div>
            </div>
            <div className="bg-brand-50 p-6 rounded-2xl">
              <div className="text-3xl font-serif text-brand-600 mb-1">8,000+</div>
              <div className="text-sm font-medium text-slate-600">Treated Patients</div>
            </div>
            <div className="bg-brand-50 p-6 rounded-2xl col-span-2 sm:col-span-1">
              <div className="text-3xl font-serif text-brand-600 mb-1">06</div>
              <div className="text-sm font-medium text-slate-600">Specialisations</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
