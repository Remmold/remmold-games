
import { useEffect, useRef } from 'react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fadeInElements = [titleRef, subtitleRef, buttonRef];
    
    fadeInElements.forEach((ref, index) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('opacity-100');
          ref.current?.classList.remove('opacity-0', 'translate-y-10');
        }, 300 * index);
      }
    });
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden">
      <ParticleBackground color="rgba(126, 87, 194, 0.7)" particleCount={70} />
      <div className="fantasy-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="fantasy-title mb-6 transition-all duration-700 transform opacity-0 translate-y-10 text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="text-fantasy-gold inline-block animate-pulse-glow">Remmold</span>Games
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-white/80 mb-10 transition-all duration-700 delay-100 transform opacity-0 translate-y-10 font-marcellus"
          >
            Forging Worlds, One Game at a Time
          </p>
          
          <div 
            ref={buttonRef}
            className="flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-200 transform opacity-0 translate-y-10"
          >
            <a 
              href="#games" 
              className="fantasy-button-fixed"
            >
              <span>Explore Our Games</span>
            </a>
            <a 
              href="#about" 
              className="gold-button-fixed"
            >
              <span>About The Studio</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce opacity-80">
        <a href="#about" className="block hover:opacity-100 transition-opacity">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-white"
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </a>
      </div>
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-fantasy-dark/90"></div>
    </section>
  );
};

export default Hero;
