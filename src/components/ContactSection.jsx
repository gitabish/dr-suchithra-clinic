import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react';

export default function ContactSection({ openBooking }) {
  return (
    <section id="contact" className="py-24 px-4 bg-brand-50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* Left: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-5/12 flex flex-col justify-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-8 leading-tight">
            Visit our sanctuary.
          </h2>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-500 shadow-sm shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Clinic Address</h4>
                <p className="text-slate-600">Karamana, Thiruvananthapuram,<br/>Kerala, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-500 shadow-sm shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Working Hours</h4>
                <p className="text-slate-600">Mon–Sat: 10AM – 7PM<br/>Sunday: Closed</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-500 shadow-sm shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Contact Phone</h4>
                <p className="text-slate-600 font-medium">+91 93427 35182</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={openBooking} className="bg-slate-900 hover:bg-brand-600 text-white px-8 py-3.5 rounded-full font-medium transition-colors shadow-lg flex items-center justify-center gap-2 group">
              Book Appointment
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <a 
              href="https://wa.me/919342735182" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-medium transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        {/* Right: Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-7/12"
        >
          <div className="w-full h-full min-h-[400px] rounded-[2rem] overflow-hidden shadow-xl shadow-brand-200/50 relative bg-slate-200 border-4 border-white">
            {/* Interactive iframe embed of map */}
            <iframe 
              src="https://maps.google.com/maps?q=Karamana,Thiruvananthapuram&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
