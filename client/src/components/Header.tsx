import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Determine active section for mobile navigation
      const sections = ["hero", "overview", "products", "roadmap"];
      const currentPos = window.scrollY + 300;
      
      for (const id of sections) {
        const element = document.getElementById(id);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        
        if (currentPos >= top && currentPos <= bottom) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);
  
  const menuItems = [
    { id: "overview", label: "The Crew", icon: "ph-users-three" },
    { id: "products", label: "Epic Gear", icon: "ph-rocket" },
    { id: "roadmap", label: "Roadmap", icon: "ph-map-trifold" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0A1128]/80 backdrop-blur-md shadow-lg' : 'bg-[#0A1128]/50'
    } border-b border-white/10`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
          <h1 className="font-['Orbitron'] font-bold text-xl md:text-3xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#784DFD]">SiTa</span>
            <span className="text-white"> by </span>
            <span className="text-[#3CC68A]">LusoCryptoLabs</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {menuItems.map(({ id, label }) => (
              <li key={id}>
                <a 
                  href={`#${id}`} 
                  className={`relative hover:text-[#00FFFF] transition-colors py-2 px-1 ${
                    activeSection === id ? 'text-[#00FFFF]' : 'text-white'
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <motion.div
                      layoutId="activeNavItem"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00FFFF]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none menu-button z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <motion.div
            animate={mobileMenuOpen ? "open" : "closed"}
            className="relative w-6 h-6"
          >
            <motion.i 
              className={`ph ${mobileMenuOpen ? 'ph-x' : 'ph-list'} text-2xl`}
              initial={false}
              variants={{
                open: { rotate: 90, scale: 1.1 },
                closed: { rotate: 0, scale: 1 }
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu - Full Screen with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden mobile-menu fixed inset-0 top-16 bg-[#0A1128]/95 backdrop-blur-lg z-40 flex flex-col justify-start pt-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4">
              <motion.ul 
                className="flex flex-col space-y-6"
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.1 } },
                  closed: {}
                }}
              >
                {menuItems.map(({ id, label, icon }) => (
                  <motion.li 
                    key={id}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 }
                    }}
                  >
                    <a 
                      href={`#${id}`} 
                      className={`flex items-center py-3 px-4 rounded-lg ${
                        activeSection === id 
                          ? 'bg-[#152747] text-[#00FFFF] shadow-lg shadow-[#00FFFF]/10' 
                          : 'text-white hover:bg-[#152747]/50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <i className={`${icon} text-2xl mr-3`}></i>
                      <span className="text-lg font-medium">{label}</span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
              
              {/* Quick social links in mobile menu */}
              <motion.div
                className="mt-12 border-t border-white/10 pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-white/70 text-sm mb-4">Connect with us:</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://t.me/telmotalks" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-[#152747] rounded-full hover:bg-[#00FFFF]/20 transition-colors"
                  >
                    <i className="ph ph-telegram-logo text-2xl"></i>
                  </a>
                  <a 
                    href="https://t.me/telmotalks" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-[#152747] rounded-full hover:bg-[#00FFFF]/20 transition-colors"
                  >
                    <i className="ph ph-twitter-logo text-2xl"></i>
                  </a>
                  <a 
                    href="https://t.me/telmotalks" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-[#152747] rounded-full hover:bg-[#00FFFF]/20 transition-colors"
                  >
                    <i className="ph ph-github-logo text-2xl"></i>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
