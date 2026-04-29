import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ openBooking }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed top-4 left-0 w-full z-50 flex flex-col items-center px-4">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl glass rounded-full px-4 md:px-6 py-2.5 md:py-3 flex items-center justify-between shadow-lg shadow-slate-200/50"
      >
        <Link to="/" className="flex items-center gap-2 md:gap-3">
          <img src="/logo.png" alt="Aura Skin Clinic Logo" className="w-10 h-10 md:w-14 md:h-14 object-contain mix-blend-multiply contrast-125 saturate-150 drop-shadow-sm" />
          <span className="font-serif font-semibold text-base md:text-lg text-slate-800 hidden lg:block">
            Aura Skin & Hair Clinic
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-4 lg:gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="hover:text-brand-600 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button onClick={openBooking} className="bg-gradient-to-r from-brand-400 to-brand-600 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium shadow-md shadow-brand-200 hover:shadow-lg hover:scale-105 transition-all">
            Book <span className="hidden sm:inline">Appointment</span>
          </button>
          
          <button 
            className="md:hidden text-slate-600 p-1.5 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full max-w-6xl mt-2 glass rounded-3xl p-5 flex flex-col gap-4 shadow-lg md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                onClick={() => setIsMenuOpen(false)} 
                className="text-slate-700 font-medium hover:text-brand-600 transition-colors text-center text-lg pb-2 border-b border-white/20 last:border-0"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
