import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, ShieldCheck, Sparkles, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Happy Patients", value: "10k+" },
    { label: "Specialized Procedures", value: "50+" },
  ];

  return (
    <main className="bg-brand-50 min-h-screen pt-32 pb-24 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-brand-600 font-semibold tracking-[0.2em] uppercase text-xs mb-6 block">
            Our Story & Philosophy
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-slate-900 leading-[1.1] mb-8">
            Dermatology Practiced <br />
            <span className="italic font-light text-brand-500">with Intention.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            Rooted in clinical excellence and artistic precision, Aura Skin Clinic is dedicated to 
            restoring your skin's natural harmony through personalized, science-backed care.
          </p>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative rounded-[2rem] overflow-hidden aspect-[21/9] mb-24 shadow-2xl shadow-brand-200/50"
        >
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
            alt="Clinic Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/10"></div>
        </motion.div>

        {/* Main Content: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-8">A Legacy of Clinical <span className="italic text-brand-600">Excellence.</span></h2>
            <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
              <p>
                Founded on more than a decade of medical expertise, Aura Skin Clinic has evolved from a 
                specialized dermatological center into a premier destination for holistic skin health.
              </p>
              <p>
                We believe that every skin journey is unique. Our approach integrates 
                advanced medical science with an empathetic understanding of your specific concerns, 
                ensuring that every treatment is as unique as the person receiving it.
              </p>
              <p>
                From chronic skin conditions to advanced aesthetic rejuvenation, our mission remains 
                constant: to provide care that is precise, effective, and deeply personal.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-brand-100/50 border border-white flex flex-col items-center justify-center text-center">
               <Award className="w-10 h-10 text-brand-500 mb-4" />
               <h4 className="font-serif text-xl mb-2">Award Winning</h4>
               <p className="text-xs text-slate-500 uppercase tracking-widest">Medical Standards</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-brand-100/50 border border-white flex flex-col items-center justify-center text-center mt-12">
               <ShieldCheck className="w-10 h-10 text-brand-500 mb-4" />
               <h4 className="font-serif text-xl mb-2">FDA Approved</h4>
               <p className="text-xs text-slate-500 uppercase tracking-widest">Advanced Tech</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-brand-100/50 border border-white flex flex-col items-center justify-center text-center">
               <Heart className="w-10 h-10 text-brand-500 mb-4" />
               <h4 className="font-serif text-xl mb-2">Patient First</h4>
               <p className="text-xs text-slate-500 uppercase tracking-widest">Empathetic Care</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-brand-100/50 border border-white flex flex-col items-center justify-center text-center mt-12">
               <Sparkles className="w-10 h-10 text-brand-500 mb-4" />
               <h4 className="font-serif text-xl mb-2">Natural Results</h4>
               <p className="text-xs text-slate-500 uppercase tracking-widest">Aesthetic Finesse</p>
            </div>
          </motion.div>
        </div>

        {/* Doctor Section */}
        <section className="mb-32 bg-white rounded-[3rem] p-8 md:p-20 shadow-2xl shadow-brand-100/40 border border-brand-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl border-8 border-brand-50/50">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                  alt="Dr. Emily Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm font-medium">Top Rated Dermatologist</p>
                <p className="text-[10px] text-brand-100 uppercase tracking-widest mt-1">15+ Years Registry</p>
              </div>
            </div>
            <div>
              <span className="text-brand-600 font-semibold tracking-widest text-xs uppercase mb-6 block">The Expert Behind Aura</span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8">Dr. Emily Chen</h2>
              <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed mb-10">
                <p>
                  With a commitment to scientific rigor and a passion for aesthetic harmony, 
                  Dr. Emily Chen has dedicated her career to the art of dermatological care.
                </p>
                <p>
                  She specializes in chronic skin condition management and non-invasive 
                  rejuvenation, ensuring every patient achieves healthy, radiant results 
                  that enhance their natural beauty.
                </p>
              </div>
              <div className="flex gap-12 border-t border-brand-100 pt-10">
                {stats.map(s => (
                  <div key={s.label}>
                    <p className="text-3xl font-serif text-slate-900 mb-1">{s.value}</p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default About;
