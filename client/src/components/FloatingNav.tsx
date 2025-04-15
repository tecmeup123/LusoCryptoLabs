import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SECTIONS = [
  { id: 'hero', label: 'Home', icon: 'ph-house' },
  { id: 'overview', label: 'Crew', icon: 'ph-users-three' },
  { id: 'products', label: 'Epic Gear', icon: 'ph-rocket' },
  { id: 'roadmap', label: 'Roadmap', icon: 'ph-map-trifold' }
];

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

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
      }).filter(Boolean);

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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-[#0A1128]/80 backdrop-blur-lg border border-white/10 py-2 px-4 rounded-full shadow-lg z-50"
        >
          <ul className="flex items-center space-x-2">
            {SECTIONS.map(({ id, label, icon }) => (
              <motion.li key={id}>
                <motion.button
                  onClick={() => scrollToSection(id)}
                  className={`relative flex flex-col items-center py-2 px-3 rounded-full transition-colors duration-300 ${
                    activeSection === id 
                      ? 'text-[#00FFFF]' 
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
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;