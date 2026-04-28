import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80",
  ];

  return (
    <main className="pt-24 pb-20">
      {/* Page Header */}
      <div className="bg-brand-50 py-16 px-4 mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light text-slate-900 font-primary"
          >
            Our <span className="font-medium text-brand-600">Gallery</span>
          </motion.h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto font-secondary">
            A glimpse into our state-of-the-art facility and relaxing environment.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="aspect-w-4 aspect-h-3 overflow-hidden rounded-2xl shadow-sm group"
            >
              <img 
                src={src} 
                alt={`Clinic interior ${idx + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Gallery;
