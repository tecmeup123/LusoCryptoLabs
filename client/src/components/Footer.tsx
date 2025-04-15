import { motion } from "framer-motion";

const Footer = () => {
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
    <footer className="bg-[#060D20] py-12 relative overflow-hidden border-t border-white/10">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 mb-8">
          <motion.div 
            className="order-1 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-['Orbitron'] font-bold text-2xl mb-4 text-center md:text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#784DFD]">Luso</span>
              <span className="text-white">crypto</span>
              <span className="text-[#3CC68A]">Labs</span>
            </h2>
            <p className="text-gray-400 mb-4 text-center md:text-left">
              Community-made tools and vibes to level up the Nervos Network ecosystem! 🎮 Built by fans, for fans!
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <motion.a 
                href="https://t.me/telmotalks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00FFFF] transition-all"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="ph ph-telegram-logo text-2xl"></i>
              </motion.a>
              <motion.a 
                href="https://github.com/nervosnetwork"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#00FFFF] transition-all"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="ph ph-github-logo text-2xl"></i>
              </motion.a>
              <motion.a 
                href="https://twitter.com/NervosNetwork"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#00FFFF] transition-all"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="ph ph-twitter-logo text-2xl"></i>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-3 md:order-2 mb-6"
          >
            <h3 className="font-['Orbitron'] text-xl font-bold mb-4 text-center md:text-left">Navigation</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-3 md:block md:space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-400 hover:text-[#00FFFF] transition-colors flex items-center group bg-[#152747]/50 px-3 py-1 rounded-full md:bg-transparent md:px-0 md:py-0"
              >
                <i className="ph ph-caret-right mr-2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline"></i>
                Home
              </button>
              <button 
                onClick={() => scrollToSection('overview')}
                className="text-gray-400 hover:text-[#00FFFF] transition-colors flex items-center group bg-[#152747]/50 px-3 py-1 rounded-full md:bg-transparent md:px-0 md:py-0"
              >
                <i className="ph ph-caret-right mr-2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline"></i>
                The Crew
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-gray-400 hover:text-[#00FFFF] transition-colors flex items-center group bg-[#152747]/50 px-3 py-1 rounded-full md:bg-transparent md:px-0 md:py-0"
              >
                <i className="ph ph-caret-right mr-2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline"></i>
                Epic Gear
              </button>
              <button 
                onClick={() => scrollToSection('roadmap')}
                className="text-gray-400 hover:text-[#00FFFF] transition-colors flex items-center group bg-[#152747]/50 px-3 py-1 rounded-full md:bg-transparent md:px-0 md:py-0"
              >
                <i className="ph ph-caret-right mr-2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline"></i>
                Roadmap
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 md:order-3"
          >
            <h3 className="font-['Orbitron'] text-xl font-bold mb-4 text-center md:text-left">Get in Touch</h3>
            <p className="text-gray-400 mb-4 text-center md:text-left">
              Have questions or want to join the community? Hit us up on Telegram! 💬
            </p>
            <div className="flex justify-center md:justify-start">
              <motion.a 
                href="https://t.me/telmotalks"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 bg-[#152747] border border-[#00FFFF]/30 rounded-lg text-[#00FFFF] hover:bg-[#00FFFF]/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="ph ph-telegram-logo mr-2"></i>
                Join Community
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="mb-2">&copy; 2025 LusocryptoLabs. All rights reserved.</p>
          <p className="text-sm">
            <a href="https://t.me/telmotalks" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00FFFF] transition-colors">Contact us</a> for custom-branded solutions. Built with 💙 for Nervos Network.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
