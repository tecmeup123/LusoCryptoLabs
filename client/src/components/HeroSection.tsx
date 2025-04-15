import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A1128] opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128] via-[#152747] to-[#0A1128] opacity-80"></div>
        <motion.div 
          className="absolute top-0 right-0 w-3/4 h-3/4 bg-[#784DFD] opacity-10 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4"
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
          className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-[#00FFFF] opacity-10 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4"
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
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-['Orbitron'] font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Advancing the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#784DFD]">
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
                className="inline-block px-8 py-4 bg-[#152747] border-2 border-[#00FFFF] rounded-lg font-medium text-[#00FFFF] hover:bg-[#00FFFF] hover:text-[#0A1128] transition-all duration-300 shadow-lg shadow-[#00FFFF]/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Products
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
