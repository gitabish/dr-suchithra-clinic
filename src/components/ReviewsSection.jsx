import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Aarya Menon",
    location: "THIRUVANANTHAPURAM",
    text: "Dr. Emily's care is unmatched. My skin has never felt this calm and confident. Truly a sanctuary downtown."
  },
  {
    name: "Riya Krishnan",
    location: "KOWDIAR",
    text: "Finally, a dermatologist who listens. The acne protocol worked beautifully — gentle, thoughtful, and results-driven."
  },
  {
    name: "Neha Pillai",
    location: "VELLAYAMBALAM",
    text: "Hair fall reversed in months. The clinic feels like a luxury spa with serious medical expertise."
  }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 px-4 bg-gradient-to-b from-white via-brand-50/30 to-brand-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Heading & Rating Card */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-20">
          
          <div className="w-full lg:w-1/2">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
              <h4 className="text-brand-500 font-semibold tracking-[0.2em] text-xs uppercase mb-6 drop-shadow-sm">
                Loved By Patients
              </h4>
              <h2 className="font-serif text-5xl md:text-6xl text-slate-800 leading-[1.15]">
                A reputation built on <span className="italic text-brand-500">care.</span>
              </h2>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-start lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-100/40 max-w-md w-full border border-white/60 backdrop-blur-sm"
            >
              <div className="text-6xl font-serif text-brand-500 mb-3 flex items-baseline">
                4.9<span className="text-3xl text-slate-400 ml-2 font-sans font-light">/ 5</span>
              </div>
              <div className="flex gap-1.5 text-brand-500 mb-5">
                {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} className="drop-shadow-sm" />)}
              </div>
              <p className="text-slate-600 font-medium text-sm leading-relaxed pr-4">
                Based on 412+ verified patient reviews across Google, Practo and Justdial.
              </p>
            </motion.div>
          </div>
          
        </div>

        {/* Bottom Section: Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white p-10 rounded-[2rem] shadow-lg shadow-brand-50/60 flex flex-col justify-between h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-100/50 transition-all duration-500 border border-white/50"
            >
              <div>
                <Quote className="text-brand-300 mb-6 transform -scale-x-100" size={44} strokeWidth={1.5} />
                <p className="text-slate-700 font-serif text-xl leading-relaxed mb-10 text-balance">"{r.text}"</p>
              </div>
              
              <div className="mt-auto">
                <h4 className="font-semibold text-slate-900 text-[15px]">{r.name}</h4>
                <p className="text-[11px] text-slate-500 uppercase tracking-[0.15em] mt-1.5 font-medium">{r.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
