
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

  // Sample blog posts data (in a real app, this would come from a database)
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "PixelJump Development Update: New Levels and Power-ups",
      excerpt: "We're excited to share the progress on our latest platformer. Check out the new jungle levels and special abilities!",
      content: "We've been hard at work on PixelJump, our retro-inspired platformer. The jungle world is now complete with 5 challenging levels, each with unique mechanics and hidden secrets. We've also implemented four new power-ups that completely change how players navigate the environment.\n\nThe wall-jump ability gives players more vertical mobility, while the dash move allows for quick horizontal bursts perfect for avoiding traps. The shield power-up provides temporary invincibility, and the gravity flip turns the world upside down for some mind-bending puzzle sections.\n\nWe're currently playtesting these new features and plan to release a demo in the coming weeks. Stay tuned for more updates!",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      date: "June 15, 2023",
      author: "RemmoldGames",
      category: "Development",
      readTime: "4 min"
    },
    {
      id: 2,
      title: "Art Direction in Fantasy Games: Finding Our Visual Style",
      excerpt: "A look into our design process and how we developed the unique visual identity for our upcoming games.",
      content: "The art direction for our fantasy titles has been one of our most challenging and rewarding endeavors. We wanted to create worlds that felt familiar to fantasy fans but with distinct visual languages that set them apart.\n\nFor Enchanted Kingdoms, we drew inspiration from illuminated manuscripts and medieval art, combining rich colors with ornate borders and stylized characters. This gives the game a storybook quality that enhances its narrative-driven gameplay.\n\nIn contrast, Arcane Legacy embraces a more mysterious tone with its use of deep purples, shimmering magical effects, and ancient rune designs. The environments shift between reality and magical dimensions, which required us to develop specialized rendering techniques.\n\nWe're particularly proud of the character designs across both games. Each hero and villain has a unique silhouette that makes them instantly recognizable, even from a distance.\n\nIn future posts, we'll dive deeper into specific art techniques and share more concept art from our archives.",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1",
      date: "May 22, 2023",
      author: "RemmoldGames",
      category: "Art & Design",
      readTime: "6 min"
    },
    {
      id: 3,
      title: "Community Spotlight: Fan Art and Feedback",
      excerpt: "Celebrating our amazing community with a showcase of fan creations and addressing your feedback.",
      content: "We've been blown away by the creativity of our community! Since releasing early concepts of our games, talented fans have created amazing artwork, compositions, and even game mods inspired by our worlds.\n\nIn this post, we want to highlight some of our favorite fan creations and discuss how community feedback is shaping our development process. Your suggestions about inventory management in Enchanted Kingdoms led us to completely revamp the system, making it more intuitive and customizable.\n\nWe've also collected the most common questions from our community forums and provided detailed answers below. Topics include release dates, platform availability, and future content plans.\n\nThank you for your continued support and enthusiasm. We couldn't do this without you!",
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
