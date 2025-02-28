
import { useCallback, useEffect, useRef } from 'react';

interface ParticleProps {
  color?: string;
  particleCount?: number;
  className?: string;
}

const ParticleBackground = ({ 
  color = 'rgba(126, 87, 194, 0.7)', 
  particleCount = 50,
  className = '',
}: ParticleProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const particles = useRef<any[]>([]);
  const animationFrameId = useRef<number | null>(null);

  // Initialize the canvas and particles
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvasCtxRef.current = canvas.getContext('2d');
    particles.current = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.25,
      });
    }
  }, [particleCount]);

  // Draw particles and animate them
  const animate = useCallback(() => {
    const ctx = canvasCtxRef.current;
    const canvas = canvasRef.current;
    
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw and update particles
    particles.current.forEach((particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = color.replace(')', `, ${particle.opacity})`);
      ctx.fill();
      
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Boundaries check
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX = -particle.speedX;
      }
      
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY = -particle.speedY;
      }
    });
    
    // Gentle pulse effect
    particles.current.forEach((particle) => {
      particle.opacity += Math.random() * 0.02 - 0.01;
      particle.opacity = Math.max(0.1, Math.min(0.7, particle.opacity));
    });
    
    animationFrameId.current = requestAnimationFrame(animate);
  }, [color]);
  
  useEffect(() => {
    initCanvas();
    animate();
    
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        initCanvas();
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [animate, initCanvas]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  );
};

export default ParticleBackground;
