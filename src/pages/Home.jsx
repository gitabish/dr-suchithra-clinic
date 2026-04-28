import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TreatmentsSection from '../components/TreatmentsSection';
import PhilosophySection from '../components/PhilosophySection';
import ExperienceSection from '../components/ExperienceSection';
import ReviewsSection from '../components/ReviewsSection';
import LeadGenerationSection from '../components/LeadGenerationSection';

const Home = ({ openBooking }) => {
  return (
    <main>
      <HeroSection openBooking={openBooking} />
      <AboutSection />
      <TreatmentsSection />
      <PhilosophySection />
      <ExperienceSection />
      <ReviewsSection />
      <LeadGenerationSection />
    </main>
  );
};

export default Home;
