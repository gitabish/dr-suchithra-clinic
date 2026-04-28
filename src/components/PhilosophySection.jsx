import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Target, ShieldCheck, Microscope, HeartHandshake, CheckCircle2 } from 'lucide-react';

const PhilosophySection = () => {
  const philosophies = [
    {
      title: "Natural Intelligence",
      description: "Every treatment respects and supports your skin's natural function, activating repair and renewal without disrupting its harmony.",
      icon: <Leaf className="w-6 h-6 text-brand-600" />
    },
    {
      title: "Outcome-Led Care",
      description: "Protocols are chosen based on what your skin needs to achieve, not what's trending or routine. We focus on true results.",
      icon: <Target className="w-6 h-6 text-brand-600" />
    },
    {
      title: "Verified Technology",
      description: "Only clinically proven devices and state-of-the-art medical technology are used to ensure safety and precision at every step.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-600" />
    },
    {
      title: "Expertise in Detail",
      description: "From depth to dosage, every parameter is carefully calibrated for your skin, with no assumption. Precision matters.",
      icon: <Microscope className="w-6 h-6 text-brand-600" />
    },
    {
      title: "Skin-First Philosophy",
      description: "We prioritise skin strength, resilience, and longevity before visible correction. True beauty lies in healthy skin.",
      icon: <HeartHandshake className="w-6 h-6 text-brand-600" />
    },
    {
      title: "Sustainable Results",
      description: "Our approach focuses on long-term improvement, not short-lived transformation. We aim for lasting confidence.",
      icon: <CheckCircle2 className="w-6 h-6 text-brand-600" />
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="h-px w-8 bg-brand-600"></span>
            <span className="text-brand-600 font-medium tracking-wider uppercase text-sm">Our Approach</span>
            <span className="h-px w-8 bg-brand-600"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light text-slate-900 mb-6 font-primary"
          >
            Dermatology Practiced with <span className="font-medium text-brand-600">Intention</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 font-secondary"
          >
            Every detail—from our clinical approach to the environment we create—reflects our promise to deliver personalized care at the highest standard.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {philosophies.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-100 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 font-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
