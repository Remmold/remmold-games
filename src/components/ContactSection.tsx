
import { useState, useRef, useEffect } from 'react';
import { Mail, Send, Twitter, Github } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend or a service
    console.log('Form submitted:', formState);
    
    // Show success message
    setFormSubmitted(true);
    
    // Reset the form
    setFormState({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
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
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="fantasy-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact & Socials</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have questions or want to collaborate? Reach out to us or follow our journey on social media.
          </p>
        </div>
        
        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 opacity-0"
        >
          <div className="fantasy-card p-6 md:p-8">
            <h3 className="text-xl font-marcellus text-fantasy-gold mb-6 flex items-center gap-2">
              <Mail className="text-fantasy-light-purple" size={20} />
              <span>Send Us A Message</span>
            </h3>
            
            {formSubmitted ? (
              <div className="bg-green-900/20 border border-green-500/30 rounded-md p-4 text-center">
                <p className="text-green-400 font-medium">Message sent successfully!</p>
                <p className="text-white/70 text-sm mt-2">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white/80 mb-1 text-sm">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-fantasy-navy/50 rounded-md border border-fantasy-purple/20 text-white focus:outline-none focus:ring-2 focus:ring-fantasy-purple/50 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white/80 mb-1 text-sm">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-fantasy-navy/50 rounded-md border border-fantasy-purple/20 text-white focus:outline-none focus:ring-2 focus:ring-fantasy-purple/50 transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white/80 mb-1 text-sm">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-fantasy-navy/50 rounded-md border border-fantasy-purple/20 text-white focus:outline-none focus:ring-2 focus:ring-fantasy-purple/50 transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="fantasy-button-fixed w-full flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send size={16} className="hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            )}
          </div>
          
          <div>
            <div className="fantasy-card p-6 md:p-8 mb-6">
              <h3 className="text-xl font-marcellus text-fantasy-gold mb-6">Connect With Us</h3>
              
              <div className="space-y-4">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 bg-fantasy-navy/50 rounded-md hover:bg-fantasy-navy/80 transition-all duration-300 group"
                >
                  <div className="p-2 bg-[#1DA1F2]/10 rounded-full">
                    <Twitter size={22} className="text-[#1DA1F2]" />
                  </div>
                  <div>
                    <p className="font-medium text-white group-hover:text-fantasy-gold transition-colors">Twitter</p>
                    <p className="text-sm text-white/60">@RemmoldGames</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 bg-fantasy-navy/50 rounded-md hover:bg-fantasy-navy/80 transition-all duration-300 group"
                >
                  <div className="p-2 bg-[#6e5494]/10 rounded-full">
                    <Github size={22} className="text-[#6e5494]" />
                  </div>
                  <div>
                    <p className="font-medium text-white group-hover:text-fantasy-gold transition-colors">GitHub</p>
                    <p className="text-sm text-white/60">github.com/remmoldgames</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 bg-fantasy-navy/50 rounded-md hover:bg-fantasy-navy/80 transition-all duration-300 group"
                >
                  <div className="p-2 bg-[#FA5C5C]/10 rounded-full">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="22" 
                      height="22" 
                      viewBox="0 0 24 24" 
                      fill="#FA5C5C" 
                      className="lucide lucide-gamepad-2"
                    >
                      <path d="M6 11h4M8 9v4M15 12h.01M18 10h.01" />
                      <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.152A4 4 0 0 0 17.32 5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white group-hover:text-fantasy-gold transition-colors">Itch.io</p>
                    <p className="text-sm text-white/60">remmoldgames.itch.io</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="fantasy-card p-6 md:p-8">
              <h3 className="text-xl font-marcellus text-fantasy-gold mb-4">Newsletter</h3>
              <p className="text-white/70 text-sm mb-4">
                Subscribe to our newsletter for game updates, behind-the-scenes content, and special offers.
              </p>
              
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 bg-fantasy-navy/50 rounded-l-md border border-fantasy-purple/20 text-white focus:outline-none focus:ring-2 focus:ring-fantasy-purple/50 transition-all"
                />
                <button className="px-4 py-2 bg-fantasy-gold text-fantasy-dark font-medium rounded-r-md hover:bg-fantasy-amber transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-72 bg-fantasy-purple/5 skew-y-6 z-0"></div>
    </section>
  );
};

export default ContactSection;
