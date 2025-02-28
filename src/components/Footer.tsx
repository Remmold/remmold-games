
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-fantasy-purple/20 relative">
      <div className="fantasy-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <span className="text-fantasy-gold font-cinzel text-xl tracking-wider">
                RemmoldGames
              </span>
            </div>
            <p className="text-white/60 text-sm mt-1">
              Forging Worlds, One Game at a Time
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} RemmoldGames. All rights reserved.
            </p>
            <div className="text-fantasy-purple/80 animate-pulse-glow">
              <Heart size={16} fill="currentColor" />
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-fantasy-purple/10 text-center">
          <p className="text-white/50 text-xs">
            RemmoldGames is an independent game development studio creating immersive fantasy worlds and memorable gaming experiences.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-fantasy-purple/40 via-fantasy-gold/40 to-transparent"></div>
    </footer>
  );
};

export default Footer;
