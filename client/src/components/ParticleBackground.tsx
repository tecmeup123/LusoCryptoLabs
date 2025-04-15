import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
}

interface ParticleBackgroundProps {
  className?: string;
  lowPerformance?: boolean;
}

const ParticleBackground = ({ className = '', lowPerformance = false }: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const frameCountRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const [fps, setFps] = useState<number>(60); // Target FPS
  
  // Colors that match our theme
  const colors = ['#00FFFF', '#784DFD', '#3CC68A', '#47BDFD'];
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    
    // Performance settings based on device capabilities
    const isMobile = window.innerWidth < 768;
    const isLowPower = lowPerformance || isMobile;
    
    // Settings adjustment based on performance level
    const particleDensity = isLowPower ? 25000 : 15000; // Higher number = fewer particles
    const minParticles = isLowPower ? 15 : 30;
    const maxParticles = isLowPower ? 50 : 100;
    const connectionDistance = isLowPower ? 70 : 100;
    const targetFps = isLowPower ? 30 : 60; // Target FPS
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const initParticles = () => {
      particles.current = [];
      const particleCount = Math.min(
        Math.max(Math.floor(window.innerWidth * window.innerHeight / particleDensity), minParticles), 
        maxParticles
      );
      
      // Create particles
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.4 + 0.2
        });
      }
    };
    
    // Use throttling to maintain consistent animation rate across devices
    const throttledAnimate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      
      const deltaTime = timestamp - lastTimeRef.current;
      const interval = 1000 / fps;
      
      if (deltaTime >= interval) {
        // Update FPS calculation
        frameCountRef.current++;
        if (timestamp - lastTimeRef.current >= 1000) {
          setFps(Math.round(frameCountRef.current * 1000 / (timestamp - lastTimeRef.current)));
          frameCountRef.current = 0;
          lastTimeRef.current = timestamp;
        }
        
        // Clear canvas with a slight optimization
        ctx.globalCompositeOperation = 'source-over';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Process particles in batch for efficiency
        for (let i = 0; i < particles.current.length; i++) {
          const particle = particles.current[i];
          
          // Update position
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) {
            particle.speedX *= -1;
          }
          
          if (particle.y < 0 || particle.y > canvas.height) {
            particle.speedY *= -1;
          }
          
          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color + Math.floor(particle.alpha * 255).toString(16).padStart(2, '0');
          ctx.fill();
        }
        
        // Optimized connection drawing (skip some frames on low power)
        if (!isLowPower || frameCountRef.current % 2 === 0) {
          ctx.globalCompositeOperation = 'lighter';
          for (let i = 0; i < particles.current.length; i++) {
            const particle = particles.current[i];
            
            // Only connect to a subset of particles for efficiency
            const limit = isLowPower ? Math.min(i + 5, particles.current.length) : particles.current.length;
            for (let j = i + 1; j < limit; j++) {
              const otherParticle = particles.current[j];
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < connectionDistance) {
                ctx.beginPath();
                const opacity = Math.floor((1 - distance / connectionDistance) * 30).toString(16).padStart(2, '0');
                ctx.strokeStyle = particle.color + opacity;
                ctx.lineWidth = isLowPower ? 0.3 : 0.5;
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
              }
            }
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(throttledAnimate);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Start animation with requested animation frame
    animationRef.current = requestAnimationFrame(throttledAnimate);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [lowPerformance]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 -z-10 ${className}`} 
    />
  );
};

export default ParticleBackground;