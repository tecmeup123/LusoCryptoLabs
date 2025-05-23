import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A1128] opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128] via-[#152747] to-[#0A1128] opacity-80"></div>
        
        {/* Particle background - only show on non-mobile for better performance */}
        {!isMobile && <ParticleBackground />}
        
        {/* Main background blobs */}
        <motion.div 
          className="absolute top-0 right-0 w-3/4 h-3/4 bg-[#784DFD] opacity-10 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4"
          animate={{ 
            scale: isMobile ? [1, 1.05, 1] : [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
            x: isMobile ? [0, 10, 0] : [0, 20, 0],
            y: isMobile ? [0, -10, 0] : [0, -20, 0]
          }}
          transition={{ 
            duration: isMobile ? 6 : 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-[#00FFFF] opacity-10 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4"
          animate={{ 
            scale: isMobile ? [1, 1.1, 1] : [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: isMobile ? [0, -10, 0] : [0, -20, 0],
            y: isMobile ? [0, 10, 0] : [0, 20, 0]
          }}
          transition={{ 
            duration: isMobile ? 8 : 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Additional floating elements - simplified for mobile */}
        {!isMobile && (
          <>
            <motion.div 
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#3CC68A] opacity-10 blur-2xl rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.05, 0.1, 0.05],
                y: [0, -30, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.div 
              className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#FF3DCD] opacity-10 blur-xl rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.05, 0.15, 0.05],
                y: [0, 40, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
            />
          </>
        )}
        
        {/* Subtle grid overlay - visible on all devices */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNMzAgMEM0Ni41NyAwIDYwIDEzLjQzIDYwIDMwIDYwIDQ2LjU3IDQ2LjU3IDYwIDMwIDYwIDEzLjQzIDYwIDAgNDYuNTcgMCAzMCAwIDEzLjQzIDEzLjQzIDAgMzAgMHptMCA4QzE3Ljg1IDggOCAxNy44NSA4IDMwYzAgMTIuMTUgOS44NSAyMiAyMiAyMiAxMi4xNSAwIDIyLTkuODUgMjItMjIgMC0xMi4xNS05Ljg1LTIyLTIyLTIyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 z-10 py-10 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          >
            <motion.h1 
              className="font-['Orbitron'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="inline-block md:inline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Advancing the{" "}
              </motion.div>
              <motion.div 
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] via-[#784DFD] to-[#3CC68A] inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Nervos Network
              </motion.div>{" "}
              <motion.div
                className="inline-block md:inline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Ecosystem
              </motion.div>
            </motion.h1>
            <motion.p 
              className="font-['Orbitron'] font-bold text-xl sm:text-2xl md:text-3xl px-2 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#784DFD]">SiTa</span>
              <span className="text-white text-xs sm:text-sm align-text-top"> by </span>
              <span className="text-[#3CC68A] text-xs sm:text-sm align-text-top">LusoCryptoLabs</span>
            </motion.p>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-300 px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              Enthusiasts creating community tools to support and promote the growth of Nervos Network.
            </motion.p>
            <motion.div 
              className="pt-2 md:pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <motion.a 
                href="#products"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#152747] border-2 border-[#00FFFF] rounded-lg font-medium text-[#00FFFF] hover:bg-[#00FFFF] hover:text-[#0A1128] transition-all duration-300 shadow-lg shadow-[#00FFFF]/20"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Epic Gear
              </motion.a>
            </motion.div>
            
            {/* Mobile-specific down arrow for scrolling */}
            {isMobile && (
              <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ 
                  opacity: [0.4, 1, 0.4],
                  y: [0, 10, 0]
                }}
                transition={{
                  duration: 2, 
                  repeat: Infinity,
                  delay: 1.5
                }}
              >
                <a href="#overview" aria-label="Scroll down">
                  <i className="ph ph-arrow-down text-3xl text-[#00FFFF]"></i>
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
