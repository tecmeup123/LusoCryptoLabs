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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-['Orbitron'] font-bold text-2xl mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#784DFD]">Luso</span>
              <span className="text-white">crypto</span>
              <span className="text-[#3CC68A]">Labs</span>
            </h2>
            <p className="text-gray-400 mb-4">
              Community-made tools and vibes to level up the Nervos Network ecosystem! 🎮 Built by fans, for fans!
            </p>
            <div className="flex space-x-4">
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
            className="mb-6 md:mb-0"
          >
            <h3 className="font-['Orbitron'] text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-[#00FFFF] transition-colors flex items-center group"
                >
                  <i className="ph ph-caret-right mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('overview')}
                  className="text-gray-400 hover:text-[#00FFFF] transition-colors flex items-center group"
                >
                  <i className="ph ph-caret-right mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  The Crew
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-gray-400 hover:text-[#00FFFF] transition-colors flex items-center group"
                >
                  <i className="ph ph-caret-right mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  Our Epic Gear
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('roadmap')}
                  className="text-gray-400 hover:text-[#00FFFF] transition-colors flex items-center group"
                >
                  <i className="ph ph-caret-right mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  Roadmap
                </button>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-['Orbitron'] text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-4">
              Have questions or want to join the community? Hit us up on Telegram! 💬
            </p>
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
