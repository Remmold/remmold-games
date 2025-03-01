
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { ArrowLeft, Calendar, User, Tag, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

const Blog = () => {
  const [isLoaded, setIsLoaded] = useState(false);
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
    setIsLoaded(true);
    
    return () => {
      document.body.classList.remove('animate-page-fade-in');
    };
  }, []);

  // Sample blog posts data - these are just for demonstration purposes
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "[DEMO] PixelJump Development Update: New Levels and Power-ups",
      excerpt: "This is a demonstration post. In a real project, this would contain actual development updates for PixelJump.",
      content: "This is a demonstration post. In a real project, this would contain actual development progress for PixelJump. We've been hard at work on PixelJump, our retro-inspired platformer. The jungle world is now complete with 5 challenging levels, each with unique mechanics and hidden secrets.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      date: "June 15, 2023",
      author: "RemmoldGames",
      category: "Development",
      readTime: "4 min"
    },
    {
      id: 2,
      title: "[DEMO] Art Direction in Fantasy Games: Finding Our Visual Style",
      excerpt: "This is a demonstration post. In a real project, this would contain actual design insights.",
      content: "This is a demonstration post. In a real project, this would contain actual design insights. The art direction for our fantasy titles has been one of our most challenging and rewarding endeavors.",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1",
      date: "May 22, 2023",
      author: "RemmoldGames",
      category: "Art & Design",
      readTime: "6 min"
    },
    {
      id: 3,
      title: "[DEMO] Community Spotlight: Fan Art and Feedback",
      excerpt: "This is a demonstration post. In a real project, this would contain actual community highlights.",
      content: "This is a demonstration post. In a real project, this would contain actual community content. We've been blown away by the creativity of our community! Since releasing early concepts of our games, talented fans have created amazing artwork.",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
      date: "April 10, 2023",
      author: "RemmoldGames",
      category: "Community",
      readTime: "5 min"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="fantasy-container">
          {/* Blog Header */}
          <div className="mb-12 text-center">
            <button 
              onClick={() => navigate('/')} 
              className="inline-flex items-center gap-2 text-fantasy-gold/80 hover:text-fantasy-gold transition-colors duration-300 mb-6"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </button>
            
            <h1 className="fantasy-title text-center mb-6">Dev Updates & Blog</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Follow our journey in game development, read about our progress, design insights, and community highlights.
            </p>
            <div className="mt-4 inline-block px-3 py-1 rounded-full bg-fantasy-navy/60 text-xs text-fantasy-gold">
              Demo Content
            </div>
          </div>
          
          {/* Blog Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div 
                key={post.id} 
                className={`fantasy-card group hover:shadow-fantasy transition-all duration-500 overflow-hidden ${
                  isLoaded ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${200 * blogPosts.indexOf(post)}ms` }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fantasy-dark/90 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-3 text-xs text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag size={12} />
                      <span>{post.category}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-marcellus text-fantasy-gold mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-white/70 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <button className="animated-underline text-fantasy-light-purple hover:text-fantasy-gold transition-colors duration-300">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Newsletter Signup */}
          <div className="mt-20 fantasy-card p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-fantasy-purple/5 skew-x-12 transform translate-x-1/3"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-cinzel text-fantasy-gold mb-3">
                  Stay Updated
                </h3>
                <p className="text-white/70">
                  Subscribe to our newsletter for exclusive dev insights, early access opportunities, and special announcements.
                </p>
              </div>
              
              <div className="md:w-1/2">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-2 rounded-md bg-fantasy-dark/60 border border-fantasy-purple/20 text-white/90 focus:outline-none focus:ring-2 focus:ring-fantasy-purple/30 flex-grow"
                    required
                  />
                  <button 
                    type="submit" 
                    className="fantasy-button whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
