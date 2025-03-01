
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

  // Sample blog post that explains how to add new blog posts
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How to Add New Blog Posts to Your RemmoldGames Website",
      excerpt: "A step-by-step guide on how to add, edit, and manage blog posts for the RemmoldGames website.",
      content: `
To add new blog posts to your RemmoldGames website, follow these steps:

1. Open the src/pages/Blog.tsx file in your code editor.
2. Locate the blogPosts array in the Blog component.
3. Add a new blog post object with the following structure:

\`\`\`javascript
{
  id: [unique number],
  title: "Your Blog Post Title",
  excerpt: "A brief summary of your post",
  content: "The full content of your blog post...",
  image: "URL to an image (use royalty-free images)",
  date: "Month DD, YYYY",
  author: "Your Name",
  category: "Category",
  readTime: "X min"
}
\`\`\`

4. Make sure to assign a unique ID to each new blog post.
5. For images, you can:
   - Use locally stored images in your public folder
   - Use placeholder.com for testing
   - Use royalty-free images from sources like Unsplash (with attribution if required)
   
6. Save the file and rebuild your project.

Remember to avoid using copyrighted material without proper licensing, and consider adding a date sorting mechanism as your blog grows.
      `,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      date: "Current Date",
      author: "RemmoldGames",
      category: "Documentation",
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
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post) => (
              <div 
                key={post.id} 
                className={`fantasy-card group hover:shadow-fantasy transition-all duration-500 overflow-hidden ${
                  isLoaded ? 'animate-fade-in' : 'opacity-0'
                }`}
              >
                <div className="h-56 overflow-hidden relative">
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
                  
                  <h2 className="text-xl font-marcellus text-fantasy-gold mb-3">
                    {post.title}
                  </h2>
                  
                  <div className="text-white/70 mb-4 whitespace-pre-line">
                    <h3 className="text-fantasy-light-purple mb-2">Summary:</h3>
                    <p className="mb-4">{post.excerpt}</p>
                    
                    <h3 className="text-fantasy-light-purple mb-2">Full Guide:</h3>
                    <div className="prose prose-invert max-w-none">
                      {post.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-3">{paragraph}</p>
                      ))}
                    </div>
                  </div>
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
