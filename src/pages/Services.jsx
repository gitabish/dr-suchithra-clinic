import React from 'react';
import TreatmentsSection from '../components/TreatmentsSection';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <main className="pt-24">
      {/* Page Header */}
      <div className="bg-brand-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light text-slate-900 font-primary"
          >
            Our <span className="font-medium text-brand-600">Services</span>
          </motion.h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto font-secondary">
            Advanced treatments tailored for your skin, hair, and overall wellness.
          </p>
        </div>
      </div>
      
      <div className="py-12">
        <TreatmentsSection />
      </div>
    </main>
  );
};

export default Services;
