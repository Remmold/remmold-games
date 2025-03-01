
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Calendar, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { useToast } from '../hooks/use-toast';

interface GameUpdate {
  id: number;
  title: string;
  content: string;
  date: string;
  links?: {
    url: string;
    label: string;
  }[];
}

interface Game {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  status: string;
  playLink?: string;
  downloadLink?: string;
  updates: GameUpdate[];
}

// This is example data - replace with your actual game data when available
const gamesData: Game[] = [
  {
    id: 4,
    title: "PixelJump",
    description: "A retro-inspired platformer with modern twists, challenging players with precise jumps and creative level designs.",
    longDescription: "PixelJump combines the charm of classic platformers with modern game design. Navigate through diverse worlds filled with unique obstacles, collect power-ups that transform gameplay, and discover hidden secrets in meticulously crafted pixel art environments. With responsive controls and a gradual difficulty curve, the game welcomes casual players while offering challenges for platformer veterans.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    status: "Released",
    playLink: "#",
    downloadLink: "#",
    updates: [
      {
        id: 1,
        title: "Example: How to Add Game Updates",
        content: "This is an example update showing how to add development updates for your game. Replace this with actual updates about PixelJump. Updates can include new features, bug fixes, community events, or any other news related to the game's development.",
        date: "Current Date",
        links: [
          { url: "#example-link", label: "Example Link" }
        ]
      }
    ]
  }
];

const GameDetail = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [game, setGame] = useState<Game | null>(null);
  
  useEffect(() => {
    // In a real application, fetch from an API
    const selectedGame = gamesData.find(g => g.id.toString() === gameId);
    
    if (selectedGame) {
      setGame(selectedGame);
    } else {
      toast({
        title: "Game not found",
        description: "We couldn't find the game you're looking for.",
        variant: "destructive"
      });
      navigate('/games');
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [gameId, navigate, toast]);
  
  if (!game) {
    return (
      <div className="min-h-screen bg-fantasy-dark">
        <Navbar />
        <div className="fantasy-container py-20 text-center">
          <div className="animate-pulse w-full max-w-3xl mx-auto">
            <div className="h-8 bg-fantasy-navy/50 rounded-full w-3/4 mx-auto mb-6"></div>
            <div className="h-64 bg-fantasy-navy/50 rounded-xl mb-6"></div>
            <div className="h-4 bg-fantasy-navy/50 rounded-full w-full mb-3"></div>
            <div className="h-4 bg-fantasy-navy/50 rounded-full w-5/6 mb-3"></div>
            <div className="h-4 bg-fantasy-navy/50 rounded-full w-4/6"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-fantasy-dark">
      <Navbar />
      
      <div className="mt-6 fantasy-container">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/70 hover:text-fantasy-gold transition-colors mb-6 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </button>
      </div>
      
      {/* Hero section with image and download button */}
      <section className="relative mb-12 fantasy-container">
        <div className="fantasy-card overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img 
                src={game?.image} 
                alt={game?.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-fantasy-dark/90 md:bg-gradient-to-r md:from-transparent md:to-fantasy-dark"></div>
            </div>
            
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between relative">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-fantasy-navy/60 text-xs text-fantasy-gold mb-3">
                  {game?.status}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-cinzel text-fantasy-gold mb-4">
                  {game?.title}
                </h1>
                
                <p className="text-white/80 mb-6">
                  {game?.longDescription || game?.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-4">
                {game?.downloadLink && (
                  <a href={game.downloadLink} className="fantasy-button group">
                    <span className="relative z-10 flex items-center gap-2">
                      <Download size={16} />
                      Download Game
                    </span>
                  </a>
                )}
                
                {game?.playLink && (
                  <a href={game.playLink} className="gold-button group">
                    <span className="relative z-10">Play Online</span>
                  </a>
                )}
                
                {!game?.playLink && !game?.downloadLink && (
                  <span className="px-4 py-2 bg-fantasy-navy/50 backdrop-blur-sm rounded border border-fantasy-purple/20 text-white/70">
                    {game?.status}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Updates section */}
      <section className="fantasy-container pb-20">
        <h2 className="section-title mb-8">Development Updates</h2>
        
        {game?.updates && game.updates.length > 0 ? (
          <div className="space-y-6">
            {game.updates.map((update) => (
              <div key={update.id} className="fantasy-card group hover:shadow-fantasy transition-all duration-500">
                <div className="p-6">
                  <div className="flex items-center gap-1 text-xs text-white/60 mb-3">
                    <Calendar size={12} />
                    <span>{update.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-marcellus text-fantasy-gold mb-3">
                    {update.title}
                  </h3>
                  
                  <p className="text-white/80 mb-4">
                    {update.content}
                  </p>
                  
                  {update.links && update.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {update.links.map((link, index) => (
                        <a 
                          key={index}
                          href={link.url}
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-full bg-fantasy-navy/50 text-fantasy-light-purple hover:text-fantasy-gold transition-colors"
                        >
                          <ExternalLink size={12} />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="fantasy-card p-8 text-center">
            <p className="text-white/70">No updates available yet. Check back soon!</p>
          </div>
        )}
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default GameDetail;
