const Footer = () => {
  return (
    <footer className="py-12 bg-[#060D20] border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="font-['Orbitron'] font-bold text-2xl mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#784DFD]">Luso</span>
              <span className="text-white">crypto</span>
              <span className="text-[#3CC68A]">Labs</span>
            </h2>
            <p className="text-gray-400">Advancing the Nervos Network Ecosystem</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://t.me/telmotalks" className="text-gray-400 hover:text-[#00FFFF] transition-colors">
              <i className="ph ph-telegram-logo text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2025 LusocryptoLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
