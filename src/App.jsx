import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TreatmentsSection from './components/TreatmentsSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="font-sans antialiased bg-brand-50 relative overflow-x-hidden w-full">
      <Navbar openBooking={() => setIsBookingOpen(true)} />
      <HeroSection openBooking={() => setIsBookingOpen(true)} />
      <AboutSection />
      <TreatmentsSection />
      <ReviewsSection />
      <ContactSection openBooking={() => setIsBookingOpen(true)} />
      <Footer />
      
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      
      {/* Floating WhatsApp Integration */}
      <a 
        href="https://wa.me/919074714272" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-green-600 transition-all z-50 animate-bounce"
        aria-label="Chat with us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" className="fill-current"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.065-.301-.15-1.26-.464-2.401-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.096-.21.046-.395-.025-.546-.075-.15-.671-1.62-.924-2.206-.241-.579-.487-.501-.671-.51l-.573-.01c-.198-.01-.52.074-.792.365-.274.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.209 2.095 3.181 5.076 4.463 2.979 1.285 2.979.855 3.526.81.545-.045 1.766-.72 2.016-1.425.249-.69.249-1.29.174-1.41-.074-.135-.275-.21-.576-.36m-5.464 7.218h-.005a9.833 9.833 0 01-5.009-1.362l-.36-.213-3.722.975.992-3.628-.235-.373a9.845 9.845 0 01-1.503-5.26 9.85 9.85 0 019.842-9.845 9.853 9.853 0 019.85 9.85 9.85 9.85 0 01-9.85 9.85m0-17.986A8.136 8.136 0 003.89 11.75c0 1.341.348 2.651 1.01 3.805l-1.425 5.203 5.32-1.395A8.135 8.135 0 0012.034 22a8.138 8.138 0 008.136-8.135A8.138 8.138 0 0012.034 3.614"/></svg>
      </a>
    </div>
  );
}

export default App;
