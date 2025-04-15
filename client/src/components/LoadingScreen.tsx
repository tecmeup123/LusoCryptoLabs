import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - in a real app this would be based on actual resource loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Nervos Network logo animation
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 1.2,
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "afterChildren"
      }
    }
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-[#0A1128] flex flex-col items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={containerVariants.exit}
        >
          <motion.div
            className="w-24 h-24 mb-6 relative"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Animated circles */}
            <motion.div 
              className="absolute inset-0 border-4 border-[#00FFFF] rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div 
              className="absolute inset-2 border-4 border-[#784DFD] rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [360, 0, 360],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "linear",
                delay: 0.5
              }}
            />
            
            <motion.div 
              className="absolute inset-4 border-4 border-[#3CC68A] rounded-full"
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
            />
            
            {/* Core icon */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-8 h-8 bg-white rounded-lg"></div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h2 className="font-['Orbitron'] text-2xl font-bold mb-1">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] via-[#784DFD] to-[#3CC68A]">
                LusocryptoLabs
              </span>
            </h2>
            <p className="text-gray-400 text-sm">Loading awesome Nervos vibes... 🚀</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;