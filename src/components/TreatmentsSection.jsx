import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Droplet, Zap, Scissors, ShieldAlert } from 'lucide-react';

export default function TreatmentsSection() {
  const treatments = [
    {
      title: "Skin Rejuvenation",
      description: "Advanced peels, facials, and therapies to restore youth and vitality.",
      icon: <Sparkles className="w-8 h-8 text-brand-600 mb-6" />
    },
    {
      title: "Hair Rejuvenation",
      description: "Targeted solutions for hair loss, thinning, and scalp health.",
      icon: <Droplet className="w-8 h-8 text-brand-600 mb-6" />
    },
    {
      title: "Laser Treatments",
      description: "Precision laser procedures for pigmentation, scars, and texture.",
      icon: <Zap className="w-8 h-8 text-brand-600 mb-6" />
    },
    {
      title: "Hair Removal",
      description: "Painless, FDA-approved laser hair reduction for long-lasting results.",
      icon: <Scissors className="w-8 h-8 text-brand-600 mb-6" />
    },
    {
      title: "Preventive Care",
      description: "Proactive skin checks, anti-aging routines, and holistic wellness.",
      icon: <ShieldAlert className="w-8 h-8 text-brand-600 mb-6" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-slate-900 mb-6"
          >
            Curated Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 font-sans"
          >
            Advanced treatments tailored for your skin, hair, and overall wellness.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-brand-200 hover:shadow-xl transition-all duration-300 group"
            >
              {treatment.icon}
              <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">
                {treatment.title}
              </h3>
              <p className="text-slate-600 font-sans leading-relaxed">
                {treatment.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
