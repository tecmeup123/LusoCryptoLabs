import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[#152747] border-2 border-[#00FFFF] shadow-lg shadow-[#00FFFF]/20 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#00FFFF] hover:text-[#0A1128] text-[#00FFFF] transition-colors duration-300"
          aria-label="Back to top"
          role="button"
          tabIndex={0}
        >
          <i className="ph ph-arrow-up text-2xl"></i>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;