import { useState, useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 bg-primary transition-all duration-300 ${scrolled ? 'bg-opacity-80 backdrop-blur-md shadow-lg' : 'bg-opacity-50'} border-b border-white/10`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="font-['Orbitron'] font-bold text-2xl md:text-3xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8b0000] to-[#a52a2a]">Luso</span>
            <span className="text-white">crypto</span>
            <span className="text-white">Labs</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a href="#overview" className="hover:text-[#8b0000] transition-colors">
                Overview
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#8b0000] transition-colors">
                Products
              </a>
            </li>
            <li>
              <a href="#roadmap" className="hover:text-[#8b0000] transition-colors">
                Roadmap
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <i className="ph ph-list text-2xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black absolute w-full border-b border-white/10 transition-all duration-300 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="py-4 px-4 space-y-4">
          <li>
            <a 
              href="#overview" 
              className="block py-2 hover:text-[#8b0000] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Overview
            </a>
          </li>
          <li>
            <a 
              href="#products" 
              className="block py-2 hover:text-[#8b0000] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </a>
          </li>
          <li>
            <a 
              href="#roadmap" 
              className="block py-2 hover:text-[#8b0000] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Roadmap
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
