
import { useRef, useEffect } from 'react';

const AboutSection = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="fantasy-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">About The Studio</h2>
        </div>
        
        <div 
          ref={aboutRef}
          className="fantasy-card p-6 md:p-8 max-w-4xl mx-auto opacity-0"
        >
          <div className="ornate-border p-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-marcellus mb-4 text-fantasy-gold">
                  Independent Game Development
                </h3>
                <p className="text-white/80 mb-6">
                  RemmoldGames is an indie game development studio focused on crafting immersive 
                  fantasy worlds and engaging gameplay experiences. Founded by a passionate developer 
                  with a love for storytelling and adventure, we create games that transport players 
                  to magical realms.
                </p>
                <p className="text-white/80">
                  We believe in the power of collaboration and frequently work with other talented 
                  creators to bring fresh perspectives and unique skills to our projects. Every game 
                  is a labor of love, meticulously crafted with attention to detail and a touch of magic.
                </p>
              </div>
              
              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-lg relative shadow-fantasy">
                  <img 
                    src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
                    alt="Fantasy landscape" 
                    className="object-cover w-full h-full transform scale-105 hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fantasy-navy/60 to-transparent"></div>
                </div>
                <div className="scroll-rune top-2 left-2">
                  <span>R</span>
                </div>
                <div className="scroll-rune bottom-2 right-2">
                  <span>G</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-fantasy-purple/20">
              <h4 className="text-lg md:text-xl font-marcellus mb-3 text-fantasy-gold">Our Mission</h4>
              <p className="text-white/80">
                To create captivating games that blend engaging gameplay with enchanting worlds, 
                bringing joy and wonder to players while showcasing the power of indie game development 
                through both solo creations and collaborative projects.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-96 bg-fantasy-purple/5 -skew-y-6 z-0"></div>
    </section>
  );
};

export default AboutSection;
