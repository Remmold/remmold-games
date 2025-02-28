
import { useRef, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Collaborator {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  githubUrl?: string;
  websiteUrl?: string;
}

const CollaboratorsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const collaborators: Collaborator[] = [
    {
      id: 1,
      name: "Elena Winters",
      role: "Character Artist",
      description: "Specializes in creating memorable characters with distinct personalities that bring the game world to life.",
      image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
      githubUrl: "#",
      websiteUrl: "#"
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Composer",
      description: "Creates atmospheric fantasy soundtracks that enhance the immersion and emotional impact of our games.",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838",
      githubUrl: "#",
      websiteUrl: "#"
    },
    {
      id: 3,
      name: "Sophia Martinez",
      role: "Story Writer",
      description: "Weaves intricate narratives and builds complex fantasy worlds with rich lore and compelling characters.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      githubUrl: "#",
      websiteUrl: "#"
    }
  ];
  
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
    <section id="collaborators" className="py-20 relative">
      <div className="fantasy-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">Friends & Collaborators</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Meet the talented individuals who help bring our magical worlds to life through their creativity and expertise.
          </p>
        </div>
        
        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0"
        >
          {collaborators.map((collaborator) => (
            <div key={collaborator.id} className="fantasy-card overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={collaborator.image} 
                  alt={collaborator.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fantasy-navy via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-marcellus text-fantasy-gold">{collaborator.name}</h3>
                    <p className="text-sm text-fantasy-light-purple/90">{collaborator.role}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {collaborator.githubUrl && (
                      <a 
                        href={collaborator.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1.5 bg-fantasy-navy rounded-full text-white/70 hover:text-white hover:bg-fantasy-purple/30 transition-colors duration-300"
                        aria-label={`${collaborator.name}'s GitHub`}
                      >
                        <Github size={16} />
                      </a>
                    )}
                    
                    {collaborator.websiteUrl && (
                      <a 
                        href={collaborator.websiteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1.5 bg-fantasy-navy rounded-full text-white/70 hover:text-white hover:bg-fantasy-purple/30 transition-colors duration-300"
                        aria-label={`${collaborator.name}'s Website`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-white/80 text-sm">{collaborator.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="inline-block gold-button">
            <span className="relative z-10">Join Our Team</span>
          </a>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-full h-72 bg-fantasy-purple/5 -skew-y-6 z-0"></div>
    </section>
  );
};

export default CollaboratorsSection;
