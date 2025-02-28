
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Games', href: '#games' },
    { name: 'Collaborators', href: '#collaborators' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
        ? 'bg-fantasy-dark bg-opacity-90 backdrop-blur-md shadow-md py-2'
        : 'bg-transparent py-4'
      }`}
    >
      <div className="fantasy-container flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="relative">
            <span className="text-fantasy-gold font-cinzel text-xl md:text-2xl tracking-wider font-bold relative z-10">
              RemmoldGames
            </span>
            <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-fantasy-gold/80 to-transparent"></div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="animated-underline text-white/90 hover:text-fantasy-gold transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/90 hover:text-fantasy-gold transition-colors duration-300"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-fantasy-dark bg-opacity-95 backdrop-blur-lg transition-transform duration-300 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-20`}
      >
        <div className="flex flex-col items-center gap-6 p-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 hover:text-fantasy-gold transition-colors duration-300 text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
