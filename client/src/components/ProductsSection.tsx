import { motion } from "framer-motion";

interface ProductCardProps {
  icon: string;
  title: string;
  description: string;
  status: 'active' | 'coming-soon' | 'in-development';
  statusText: string;
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
  statusBgColor: string;
  statusTextColor: string;
  actionText: string;
  actionLink?: string;
  isDisabled?: boolean;
}

const ProductCard = ({
  icon,
  title,
  description,
  status,
  statusText,
  gradientFrom,
  gradientTo,
  iconColor,
  statusBgColor,
  statusTextColor,
  actionText,
  actionLink,
  isDisabled
}: ProductCardProps) => {
  return (
    <motion.div 
      className="bg-[#152747] rounded-2xl overflow-hidden border border-white/10 hover:border-[#00FFFF]/30 transition-all duration-300 shadow-xl h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.98 }}
      whileHover={{ 
        y: -8, 
        boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.15)",
        borderColor: "rgba(0, 255, 255, 0.5)",
        transition: { duration: 0.3, type: "spring", stiffness: 300 } 
      }}
    >
      <div className={`h-32 sm:h-48 bg-gradient-to-br from-${gradientFrom}/20 to-${gradientTo}/20 relative`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <i className={`ph ${icon} text-5xl sm:text-6xl ${iconColor}`}></i>
        </div>
      </div>
      <div className="p-5 sm:p-8 flex-grow flex flex-col">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
          <h3 className="font-['Orbitron'] text-xl sm:text-2xl font-bold">{title}</h3>
          <span className={`px-3 py-1 ${statusBgColor} ${statusTextColor} text-xs font-bold rounded-full self-start sm:self-auto`}>
            {statusText}
          </span>
        </div>
        <p className="text-gray-300 mb-6 text-sm sm:text-base flex-grow">{description}</p>
        
        <div className="mt-auto">
          {isDisabled ? (
            <button disabled className="block w-full py-3 text-center bg-gray-700 text-gray-400 font-medium rounded-lg cursor-not-allowed">
              {actionText}
            </button>
          ) : status === 'active' ? (
            <motion.a 
              href={actionLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full py-3 text-center bg-[#3CC68A] text-[#0A1128] font-medium rounded-lg hover:bg-[#2A9D6A] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {actionText}
            </motion.a>
          ) : (
            <motion.a 
              href={actionLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full gradient-border rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-[#060D20] hover:bg-[#152747] transition-colors duration-300 text-center py-3 px-6 rounded-lg font-medium">
                {actionText}
              </div>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-[#0A1128] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#152747] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#060D20] to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Orbitron'] font-bold text-3xl md:text-4xl mb-6">Our Epic Gear</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFFF] to-[#784DFD] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Community-made tools designed to help the Nervos Network ecosystem grow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          <ProductCard
            icon="ph-coins"
            title="Token Minter dApp"
            description="A simple web tool that lets anyone create their own custom tokens on Nervos Network using JoyID or UTXO Global wallets. Uses RGB++ standard and supports multiple languages for the community."
            status="active"
            statusText="Active"
            gradientFrom="[#3CC68A]"
            gradientTo="[#784DFD]"
            iconColor="text-[#3CC68A]"
            statusBgColor="bg-[#3CC68A]/10"
            statusTextColor="text-[#3CC68A]"
            actionText="Visit Token Minter"
            actionLink="https://dapp.sitaminter.xyz"
          />
          
          <ProductCard
            icon="ph-game-controller"
            title="Gamified Community Bot"
            description="A recently launched bot in the Telmo Talks community, rewarding user interactions with points redeemable for native Nervos tokens."
            status="active"
            statusText="Active"
            gradientFrom="[#3CC68A]" 
            gradientTo="[#784DFD]"
            iconColor="text-[#3CC68A]"
            statusBgColor="bg-[#3CC68A]/10"
            statusTextColor="text-[#3CC68A]"
            actionText="Join Community"
            actionLink="https://t.me/telmotalks"
          />
          
          <ProductCard
            icon="ph-cube"
            title="DOB Minter"
            description="Currently developing a fan project to simplify minting Digital Objects (DOBs), Nervos' alternative to NFTs, making it accessible to more users with an intuitive interface."
            status="in-development"
            statusText="In Development"
            gradientFrom="[#784DFD]"
            gradientTo="[#FF3DCD]"
            iconColor="text-[#784DFD]"
            statusBgColor="bg-[#784DFD]/10"
            statusTextColor="text-[#784DFD]"
            actionText="Coming Q2 2025"
            isDisabled={true}
          />
        </div>

        <motion.div 
          className="mt-16 bg-[#152747]/50 rounded-2xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-['Orbitron'] text-2xl font-bold mb-4">What's Next: Q3 2025 & Beyond</h3>
          <p className="text-gray-300">
            We're cooking up some dope community tools to level up the Nervos Network vibe. Keep your eyes peeled for fresh projects dropping from us fans after we complete the DOB Minter! 😎
          </p>
        </motion.div>
        <motion.div 
          className="mt-16 bg-[#152747]/50 rounded-2xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-['Orbitron'] text-2xl font-bold mb-4">Open Collaboration</h3>
          <p className="text-gray-300">
            We're always down to team up with anyone who's excited about making Nervos Network awesome! Got ideas or skills? 
            <a href="https://t.me/telmotalks" className="text-[#00FFFF] hover:underline ml-1">Hit us up</a> and let's build something epic together!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
