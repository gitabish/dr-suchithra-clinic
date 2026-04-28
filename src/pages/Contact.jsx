import React from 'react';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';

const Contact = ({ openBooking }) => {
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
            Contact <span className="font-medium text-brand-600">Us</span>
          </motion.h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto font-secondary">
            We are here to help you. Reach out for appointments or any inquiries.
          </p>
        </div>
      </div>
      
      <ContactSection openBooking={openBooking} />
    </main>
  );
};

export default Contact;
