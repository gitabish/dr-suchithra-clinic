import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
const treatments = [
  {
    title: "Acne & Pimple Care",
    desc: "Targeted solutions for clear, healthy skin.",
    img: "/acne_treatment_1777228721226-V3mDKXY6.png"
  },
  {
    title: "Hair Fall Treatment",
    desc: "Revitalize and strengthen your hair from the roots.",
    img: "/hair_treatment_1777228735813-DNXPKCnW.png"
  },
  {
    title: "Dandruff & Scalp",
    desc: "Restoring balance and health to your scalp.",
    img: "/dandruff_treatment_1777228749423-DTWA7GbP.png"
  },
  {
    title: "Skin Treatments",
    desc: "Advanced care for glowing and youthful skin.",
    img: "/skin_treatment_1777228762629-DnuuLPMU.png"
  }
];

export default function TreatmentsSection() {
  return (
    <section id="services" className="py-24 px-4 bg-brand-50">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="text-center max-w-2xl mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="font-serif text-4xl md:text-5xl text-slate-900 mb-4"
          >
            Treatments designed around your skin.
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-slate-600 text-lg"
          >
            Personalized clinical care that addresses your unique concerns, utilizing advanced medical precision in a calming luxury environment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {treatments.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
            >
              <img src={t.img} alt={t.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full flex items-end justify-between">
                <div>
                  <h3 className="text-white font-serif text-2xl mb-2">{t.title}</h3>
                  <p className="text-white/80 text-sm">{t.desc}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-brand-500 transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
