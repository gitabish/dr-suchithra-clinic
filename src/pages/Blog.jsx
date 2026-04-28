import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogs = [
    {
      date: "April 12, 2026",
      title: "The Science of Glow: Why Clinical Care Beats Countertop Products",
      description: "While luxury skincare brands promise instant results, true skin health starts deeper. Discover how medical-grade protocols target the root cause of dullness.",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      date: "March 26, 2026",
      title: "De-coding Acne: A Personalized Path to Clarity",
      description: "Acne is more than just an occasional breakout! It is a chronic skin condition that requires expert care and a customized protocol.",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      date: "January 15, 2026",
      title: "Advanced Skin Rejuvenation: The Non-Surgical Revolution",
      description: "Discover advanced non-surgical rejuvenation treatments that lift, tighten, and rejuvenate the skin without surgery or downtime.",
      author: "Dr. Emily Chen",
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800",
      link: "#"
    }
  ];

  return (
    <main className="bg-brand-50 min-h-screen pt-32 pb-32 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="text-brand-600 font-semibold tracking-[0.2em] uppercase text-xs mb-6 block">
            Insights & Expertise
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-8">
            The Journal of <span className="italic font-light text-brand-500">Aura</span>
          </h1>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Exploring the intersection of advanced dermatology, aesthetic science, and self-care.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-brand-100/40 border border-white flex flex-col group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-6">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {blog.date}</span>
                </div>
                
                <h3 className="text-2xl font-serif text-slate-900 mb-4 leading-tight group-hover:text-brand-600 transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-slate-600 text-sm font-light leading-relaxed mb-8 flex-1">
                  {blog.description}
                </p>

                <div className="pt-6 border-t border-brand-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                      <User size={14} />
                    </div>
                    <span className="text-xs font-semibold text-slate-400">{blog.author || "Clinical Team"}</span>
                  </div>
                  <a href={blog.link} className="text-brand-600 hover:text-slate-900 transition-colors">
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif mb-8">Stay informed on <span className="italic text-brand-400">skin health.</span></h2>
            <p className="text-slate-400 font-light mb-10 text-lg">
              Join our newsletter for monthly insights from Dr. Emily Chen and the Aura Clinical Team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-400 transition-colors"
              />
              <button className="bg-brand-500 hover:bg-brand-400 text-white px-10 py-4 rounded-xl font-semibold transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
};

export default Blog;
