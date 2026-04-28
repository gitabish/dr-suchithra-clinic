import { motion } from 'framer-motion';

export default function Navbar({ openBooking }) {
  return (
    <div className="fixed top-4 left-0 w-full z-50 flex justify-center px-4">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl glass rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-pink-100/50"
      >
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Dr. Suchithra's Clinic Logo" className="w-14 h-14 object-contain mix-blend-multiply contrast-125 saturate-150 drop-shadow-sm" />
        <span className="font-serif font-semibold text-lg text-slate-800 hidden md:block">
          Dr. Suchithra's Skin & Hair
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#about" className="hover:text-brand-600 transition-colors">About</a>
        <a href="#services" className="hover:text-brand-600 transition-colors">Services</a>
        <a href="#reviews" className="hover:text-brand-600 transition-colors">Reviews</a>
        <a href="#contact" className="hover:text-brand-600 transition-colors">Contact</a>
      </div>

      <button onClick={openBooking} className="bg-gradient-to-r from-brand-400 to-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md shadow-brand-200 hover:shadow-lg hover:scale-105 transition-all">
        Book Appointment
      </button>
      </motion.nav>
    </div>
  );
}
