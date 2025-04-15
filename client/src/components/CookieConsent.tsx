import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  
  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsented = localStorage.getItem('cookieConsent');
    
    // Show banner after a short delay if consent not given yet
    if (!hasConsented) {
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };
  
  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div 
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-[#152747] border border-[#00FFFF]/30 p-5 rounded-lg shadow-lg z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="flex items-start mb-4">
            <div className="mr-4 flex-shrink-0 mt-1">
              <motion.div
                animate={{ rotate: [0, 15, 0, -15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 5 }}
              >
                <i className="ph ph-cookie text-[#00FFFF] text-3xl"></i>
              </motion.div>
            </div>
            <div>
              <h3 className="font-['Orbitron'] text-lg font-bold mb-2">Cookie Monster Alert! 🍪</h3>
              <p className="text-gray-300 text-sm mb-3">
                We use cookies to make your experience more awesome! Nothing sketchy, just some digital magic to remember your cool preferences.
              </p>
              <div className="flex flex-wrap gap-2">
                <motion.button
                  onClick={acceptCookies}
                  className="px-4 py-2 bg-[#00FFFF] text-[#0A1128] font-medium rounded-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Accept the Cookies! 
                </motion.button>
                <motion.button
                  onClick={acceptCookies}
                  className="px-4 py-2 bg-transparent border border-gray-500 text-gray-300 font-medium rounded-md"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Maybe Later
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;