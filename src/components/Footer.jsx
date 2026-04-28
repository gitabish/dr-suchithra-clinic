import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-brand-900 text-white pt-20 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Aura Skin Clinic Logo" className="w-16 h-16 object-contain bg-white rounded-full p-2 border-2 border-brand-200 mix-blend-screen contrast-125 saturate-150 shadow-lg" />
              <span className="font-serif font-semibold text-xl">
                Aura Skin Clinic
              </span>
            </div>
            <p className="font-serif text-lg text-brand-200 italic mb-6">
              "Skin is a beautiful thing — wear it beautifully."
            </p>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 tracking-wide">MENU</h4>
            <div className="flex flex-col gap-3 text-slate-300 text-sm">
              <Link to="/about" className="hover:text-white transition-colors w-max">About</Link>
              <Link to="/services" className="hover:text-white transition-colors w-max">Services</Link>
              <Link to="/gallery" className="hover:text-white transition-colors w-max">Gallery</Link>
              <Link to="/blog" className="hover:text-white transition-colors w-max">Blog</Link>
              <Link to="/contact" className="hover:text-white transition-colors w-max">Contact</Link>
            </div>
          </div>

          {/* Connect & Locate Col */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 tracking-wide">LOCATE US</h4>
            <p className="text-slate-300 text-sm mb-2">Karamana, Thiruvananthapuram,</p>
            <p className="text-slate-300 text-sm mb-6">Kerala, India</p>
            
            <h4 className="text-white font-semibold text-lg mb-4 mt-8 tracking-wide">HOURS</h4>
            <p className="text-slate-300 text-sm">Mon–Sat: 10:00 AM – 7:00 PM</p>
          </div>

          {/* Social & Contact Col */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 tracking-wide">GET IN TOUCH</h4>
            <p className="text-brand-300 text-xl font-medium mb-6">+91 090747 14272</p>
            
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/aura_skin_clinic" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <Link to="/contact" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors">
                <Mail size={18} />
              </Link>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Aura Skin & Hair Clinic. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
