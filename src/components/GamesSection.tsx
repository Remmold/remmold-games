
import { useRef, useEffect, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  
  const games: Game[] = [
    {
      id: 1,
      title: "Enchanted Kingdoms",
      description: "A tactical RPG where players lead a band of heroes through a world of ancient magic and forgotten kingdoms. Build your party, forge alliances, and uncover the secrets of the fallen empires.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      status: "Released",
      playLink: "#",
      downloadLink: "#"
    },
    {
      id: 2,
      title: "Arcane Legacy",
      description: "A magical puzzle adventure where you control elements to solve ancient mysteries. Master fire, water, earth and air as you explore the chambers of an ancient wizard's tower.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      status: "In Development",
      playLink: "#"
    },
    {
      id: 3,
      title: "Celestial Voyagers",
      description: "A space fantasy roguelike where players navigate a universe of floating islands, mythical beasts, and cosmic magic. Each run offers new challenges and discoveries.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      status: "Coming Soon"
    },
    {
      id: 4,
      title: "PixelJump",
      description: "A retro-inspired platformer with modern twists, challenging players with precise jumps and creative level designs.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      status: "Released",
      playLink: "#",
      downloadLink: "#"
    }
  ];
  
  const nextGame = () => {
    setActiveIndex((prev) => (prev === games.length - 1 ? 0 : prev + 1));
  };
  
  const prevGame = () => {
    setActiveIndex((prev) => (prev === 0 ? games.length - 1 : prev - 1));
  };
  
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
  
  const activeGame = games[activeIndex];
  
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
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fantasy-dark via-transparent to-transparent"></div>
                
                <div className="absolute top-4 right-4 bg-fantasy-navy/80 backdrop-blur-sm px-3 py-1 rounded-full border border-fantasy-purple/30">
                  <span className={`text-sm font-medium ${
                    activeGame.status === 'Released' ? 'text-green-400' : 
                    activeGame.status === 'In Development' ? 'text-fantasy-gold' : 
                    'text-fantasy-light-purple'
                  }`}>
                    {activeGame.status}
                  </span>
                </div>
                
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <button 
                    onClick={prevGame}
                    className="p-2 rounded-full bg-fantasy-navy/50 backdrop-blur-sm border border-white/10 text-white/90 hover:bg-fantasy-navy/80 transition-all duration-300 hover:scale-110"
                    aria-label="Previous game"
                  >
                    <ChevronLeft size={20} />
                  </button>
                </div>
                
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <button 
                    onClick={nextGame}
                    className="p-2 rounded-full bg-fantasy-navy/50 backdrop-blur-sm border border-white/10 text-white/90 hover:bg-fantasy-navy/80 transition-all duration-300 hover:scale-110"
                    aria-label="Next game"
                  >
                    <ChevronRight size={20} />
                  </button>
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
          
          <div className="mt-8 flex justify-center gap-2">
            {games.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-fantasy-gold w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`View game ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {games.map((game) => (
              <Link 
                key={game.id}
                to={`/games/${game.id}`}
                className={`fantasy-card group transition-all duration-500 ${
                  activeIndex === games.indexOf(game) 
                    ? 'ring-2 ring-fantasy-gold/50 shadow-gold' 
                    : 'hover:shadow-fantasy'
                }`}
              >
                <div className="h-40 overflow-hidden relative">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fantasy-dark/90 to-transparent"></div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-marcellus text-fantasy-gold mb-1 truncate">
                    {game.title}
                  </h4>
                  <p className="text-sm text-white/70 line-clamp-2">
                    {game.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-72 bg-fantasy-purple/5 skew-y-6 z-0"></div>
    </section>
  );
};

export default GamesSection;
