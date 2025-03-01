
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  status: string;
  playLink?: string;
  downloadLink?: string;
}

const GamesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const games: Game[] = [
    {
      id: 4,
      title: "PixelJump",
      description: "A retro-inspired platformer with modern twists, challenging players with precise jumps and creative level designs.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      status: "Released",
      playLink: "#",
      downloadLink: "#"
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const activeGame = games[0];
  
  return (
    <section id="games" className="py-20 relative">
      <div className="fantasy-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Games</h2>
        </div>
        
        <div 
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="fantasy-card overflow-hidden">
            <div className="relative">
              <div className="relative h-80 md:h-96 overflow-hidden">
                <img 
                  src={activeGame.image} 
                  alt={activeGame.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fantasy-dark via-transparent to-transparent"></div>
                
                <div className="absolute top-4 right-4 bg-fantasy-navy/80 backdrop-blur-sm px-3 py-1 rounded-full border border-fantasy-purple/30">
                  <span className="text-sm font-medium text-green-400">
                    {activeGame.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-cinzel text-fantasy-gold mb-3">
                  {activeGame.title}
                </h3>
                
                <p className="text-white/80 mb-6">
                  {activeGame.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {activeGame.playLink && (
                    <a href={activeGame.playLink} className="fantasy-button group">
                      <span className="relative z-10">Play Now</span>
                    </a>
                  )}
                  
                  {activeGame.downloadLink && (
                    <a href={activeGame.downloadLink} className="gold-button group">
                      <span className="relative z-10">Download</span>
                    </a>
                  )}
                  
                  <Link to={`/games/${activeGame.id}`} className="px-4 py-2 bg-fantasy-purple/20 backdrop-blur-sm rounded border border-fantasy-purple/30 text-white hover:bg-fantasy-purple/30 transition-colors">
                    View Details & Updates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-72 bg-fantasy-purple/5 skew-y-6 z-0"></div>
    </section>
  );
};

export default GamesSection;
