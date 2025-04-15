import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useScrollAnimation } from '../hooks/use-scroll-animation';

const SECTIONS = [
  { id: 'hero', label: 'Home', icon: 'ph-house' },
  { id: 'overview', label: 'Crew', icon: 'ph-users-three' },
  { id: 'products', label: 'Epic Gear', icon: 'ph-rocket' },
  { id: 'roadmap', label: 'Roadmap', icon: 'ph-map-trifold' }
];

interface FloatingParticle {
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  opacity: number;
}

// Generate random floating particles
const generateParticles = (count: number): FloatingParticle[] => {
  return Array.from({ length: count }).map(() => ({
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 10 + 10,
    opacity: Math.random() * 0.5 + 0.1
  }));
};

// Random floating particles for visual effect - disabled
const particles: FloatingParticle[] = [];

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const { scrollProgress } = useScrollAnimation();
  const navRef = useRef<HTMLDivElement>(null);
  
  // Create parallax effect based on scroll position
  const { scrollY } = useScroll();
  const navY = useTransform(scrollY, [0, 1000], [0, 15]);
  const navRotate = useTransform(scrollY, [0, 1000], [0, 2]);
  
  // Show nav when scrolled a bit down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Detect active section
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset + 300; // Offset for better UX

      // Check which section is currently visible
      const sections = SECTIONS.map(({ id }) => {
        const element = document.getElementById(id);
        if (!element) return null;

        const rect = element.getBoundingClientRect();
        const top = rect.top + window.pageYOffset;
        const bottom = top + rect.height;

        return {
          id,
          top,
          bottom
        };
      }).filter(Boolean) as { id: string; top: number; bottom: number }[];

      // Find the current active section
      for (const section of sections) {
        if (section && currentScrollPos >= section.top && currentScrollPos <= section.bottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('scroll', handleScroll);
    
    // Initial call
    toggleVisibility();
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Color based on scroll progress
  const progressColor = {
    r: Math.round(0 + (120 * scrollProgress)),
    g: Math.round(255 - (55 * scrollProgress)),
    b: Math.round(255 - (150 * scrollProgress))
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={navRef}
          style={{ y: navY, rotate: navRotate }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
          {/* Floating particles around nav */}
          {particles.map((particle, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-[#00FFFF]"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                opacity: particle.opacity,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 10, 0],
                scale: [1, 1.2, 1],
                opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay
              }}
            />
          ))}
          
          <motion.nav
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-[#0A1128]/80 backdrop-blur-lg border border-white/10 py-2 px-4 rounded-full shadow-lg"
            style={{
              boxShadow: `0 0 20px rgba(${progressColor.r}, ${progressColor.g}, ${progressColor.b}, 0.2)`,
              borderColor: `rgba(${progressColor.r}, ${progressColor.g}, ${progressColor.b}, 0.3)`
            }}
          >
            <ul className="flex items-center space-x-2">
              {SECTIONS.map(({ id, label, icon }) => (
                <motion.li key={id}>
                  <motion.button
                    onClick={() => scrollToSection(id)}
                    className={`relative flex flex-col items-center py-2 px-3 rounded-full transition-colors duration-300 ${
                      activeSection === id 
                        ? `text-[rgb(${progressColor.r},${progressColor.g},${progressColor.b})]` 
                        : 'text-gray-400 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={`${icon} text-xl mb-1`}></i>
                    <span className="text-xs font-medium">{label}</span>
                    
                    {activeSection === id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-white/5 rounded-full -z-10"
                        initial={false}
                        transition={{ type: "spring", duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
            
            {/* Progress bar */}
            <motion.div 
              className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-[#00FFFF] via-[#784DFD] to-[#3CC68A] rounded-full"
              style={{ 
                width: `${scrollProgress * 100}%`,
                opacity: scrollProgress > 0.02 ? 1 : 0
              }}
            />
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;