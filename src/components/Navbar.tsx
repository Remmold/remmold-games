
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gamesDropdownOpen, setGamesDropdownOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleBlogClick = () => {
    navigate('/blog');
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { 
      name: 'Games', 
      href: '#games',
      hasDropdown: true,
      dropdownItems: [
        { name: 'PixelJump', href: '#games' },
        { name: 'Enchanted Kingdoms', href: '#games' },
        { name: 'Arcane Legacy', href: '#games' },
        { name: 'Celestial Voyagers', href: '#games' }
      ]
    },
    { name: 'Collaborators', href: '#collaborators' },
    { name: 'Blog', onClick: handleBlogClick },
    { name: 'Contact', href: '#contact' }
  ];

  const toggleGamesDropdown = () => {
    setGamesDropdownOpen(!gamesDropdownOpen);
  };

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
            <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-fantasy-gold to-transparent"></div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.hasDropdown ? (
                <div className="flex items-center cursor-pointer">
                  <button 
                    onClick={toggleGamesDropdown}
                    className="animated-underline text-white/90 hover:text-fantasy-gold transition-colors duration-300 font-medium flex items-center gap-1"
                  >
                    {link.name}
                    <ChevronDown size={16} className={`transition-transform duration-300 ${gamesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Games Dropdown */}
                  <div 
                    className={`absolute top-full left-0 w-48 mt-2 p-2 bg-fantasy-navy bg-opacity-95 backdrop-blur-md border border-fantasy-purple/20 rounded-md shadow-fantasy z-50 transition-all duration-300 ${
                      gamesDropdownOpen ? 'opacity-100 transform translate-y-0 visible' : 'opacity-0 transform -translate-y-2 invisible'
                    }`}
                  >
                    {link.dropdownItems?.map((item) => (
                      <a 
                        key={item.name} 
                        href={item.href} 
                        className="block w-full text-left px-3 py-2 text-white/90 hover:text-fantasy-gold hover:bg-fantasy-dark/60 rounded transition-colors duration-200"
                        onClick={() => setGamesDropdownOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                link.onClick ? (
                  <button
                    onClick={link.onClick}
                    className="animated-underline text-white/90 hover:text-fantasy-gold transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="animated-underline text-white/90 hover:text-fantasy-gold transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>
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
            <div key={link.name} className="w-full">
              {link.hasDropdown ? (
                <div className="w-full">
                  <button 
                    onClick={() => setGamesDropdownOpen(!gamesDropdownOpen)}
                    className="w-full text-center text-white/90 hover:text-fantasy-gold transition-colors duration-300 text-lg font-medium flex items-center justify-center gap-1"
                  >
                    {link.name}
                    <ChevronDown size={16} className={`transition-transform duration-300 ${gamesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {gamesDropdownOpen && (
                    <div className="mt-2 mb-4 py-2 px-4 w-full bg-fantasy-navy/50 rounded-md">
                      {link.dropdownItems?.map((item) => (
                        <a 
                          key={item.name} 
                          href={item.href} 
                          className="block w-full text-center py-2 text-white/80 hover:text-fantasy-gold transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                link.onClick ? (
                  <button
                    onClick={link.onClick}
                    className="w-full text-center text-white/90 hover:text-fantasy-gold transition-colors duration-300 text-lg font-medium"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center block text-white/90 hover:text-fantasy-gold transition-colors duration-300 text-lg font-medium"
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
