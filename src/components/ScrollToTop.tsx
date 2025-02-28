
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <button 
        onClick={scrollToTop}
        className="p-3 bg-fantasy-purple bg-opacity-70 rounded-full backdrop-blur-sm border border-fantasy-purple shadow-fantasy hover:shadow-fantasy-hover text-white transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="text-white" />
      </button>
    </div>
  );
};

export default ScrollToTop;
