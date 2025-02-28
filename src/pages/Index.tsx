
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import GamesSection from '../components/GamesSection';
import CollaboratorsSection from '../components/CollaboratorsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      });
    });
    
    // Add page load animation
    document.body.classList.add('animate-page-fade-in');
    
    return () => {
      document.body.classList.remove('animate-page-fade-in');
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <GamesSection />
      <CollaboratorsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
