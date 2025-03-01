
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import GamesSection from '../components/GamesSection';
import CollaboratorsSection from '../components/CollaboratorsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { ArrowRight, Calendar } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

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
  
  const recentPosts = [
    {
      id: 1,
      title: "How to Add Blog Posts to the RemmoldGames Website",
      date: "Current Date",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      gameId: 4
    }
  ];
  
  const handlePostClick = (post: typeof recentPosts[0]) => {
    if (post.gameId) {
      navigate(`/games/${post.gameId}`);
    } else {
      navigate('/blog');
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <GamesSection />
      <CollaboratorsSection />
      
      {/* Blog Preview Section */}
      <section id="blog-preview" className="py-20 relative">
        <div className="fantasy-container relative z-10">
          <div className="text-center mb-12">
            <h2 className="section-title">Latest Updates</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-10">
            {recentPosts.map((post) => (
              <div 
                key={post.id}
                className="fantasy-card group hover:shadow-fantasy transition-all duration-500 overflow-hidden cursor-pointer"
                onClick={() => handlePostClick(post)}
              >
                <div className="flex flex-col sm:flex-row h-full">
                  <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-xs text-white/60 mb-3">
                        <Calendar size={12} />
                        <span>{post.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-marcellus text-fantasy-gold mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                    
                    <div className="mt-4">
                      <span className="animated-underline text-fantasy-light-purple hover:text-fantasy-gold transition-colors duration-300 flex items-center gap-1 text-sm">
                        Read Post
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => navigate('/blog')}
              className="fantasy-button group"
            >
              <span className="relative z-10">View All Updates</span>
            </button>
          </div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-72 bg-fantasy-purple/5 -skew-y-6 z-0"></div>
      </section>
      
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
