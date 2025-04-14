import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1f0000] to-black opacity-80"></div>
        <motion.div 
          className="absolute top-0 right-0 w-3/4 h-3/4 bg-[#8b0000] opacity-10 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-white opacity-10 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-['Orbitron'] font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Advancing the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8b0000] to-[#a52a2a]">
                Nervos Network
              </span>{" "}
              Ecosystem
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Enthusiasts creating community tools to support and promote the growth of Nervos Network.
            </p>
            <div className="pt-4">
              <motion.a 
                href="#products"
                className="inline-block px-8 py-4 bg-black border-2 border-[#8b0000] rounded-lg font-medium text-[#8b0000] hover:bg-[#8b0000] hover:text-white transition-all duration-300 shadow-lg shadow-[#8b0000]/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Products
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="relative"
              animate={{ y: [-20, 0, -20] }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8b0000] to-white opacity-20 blur-xl rounded-full"></div>
              <div className="relative p-6 backdrop-blur-sm bg-black bg-opacity-50 rounded-2xl border border-white/10 before:absolute before:inset-[-2px] before:bg-gradient-to-r before:from-[#8b0000] before:to-white before:rounded-2xl before:-z-10">
                <div className="text-center p-8">
                  <div className="inline-block p-4 bg-black rounded-full mb-6">
                    <i className="ph ph-plugs-connected text-5xl text-[#8b0000]"></i>
                  </div>
                  <h3 className="font-['Orbitron'] text-2xl font-bold mb-4">Community Contribution</h3>
                  <p className="text-gray-300">
                    Supporting users with helpful tools that promote the potential of Nervos Network.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
