import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button sooner on mobile devices
      const scrollThreshold = isMobile ? 300 : 500;
      if (window.pageYOffset > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isMobile]);

  // Scroll to top function with smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className={`fixed ${
            isMobile ? 'bottom-6 right-6 w-10 h-10' : 'bottom-8 right-8 w-12 h-12'
          } z-50 bg-[#152747] border-2 border-[#00FFFF] shadow-lg shadow-[#00FFFF]/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#00FFFF] hover:text-[#0A1128] text-[#00FFFF] transition-colors duration-300 active:scale-95`}
          aria-label="Back to top"
          style={{ touchAction: 'manipulation' }}
        >
          <i className={`ph ph-arrow-up ${isMobile ? 'text-xl' : 'text-2xl'}`}></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;