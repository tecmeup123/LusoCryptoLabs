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
      className="bg-black rounded-2xl overflow-hidden border border-white/10 hover:border-[#8b0000]/50 transition-all duration-300 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className={`h-48 bg-gradient-to-br from-${gradientFrom}/20 to-${gradientTo}/20 relative`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <i className={`ph ${icon} text-6xl ${iconColor}`}></i>
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-['Orbitron'] text-2xl font-bold">{title}</h3>
          <span className={`px-3 py-1 ${statusBgColor} ${statusTextColor} text-xs font-bold rounded-full`}>
            {statusText}
          </span>
        </div>
        <p className="text-gray-300 mb-6">{description}</p>
        
        {isDisabled ? (
          <button disabled className="block w-full py-3 text-center bg-gray-700 text-gray-400 font-medium rounded-lg cursor-not-allowed">
            {actionText}
          </button>
        ) : status === 'active' ? (
          <a 
            href={actionLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full py-3 text-center bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300"
          >
            {actionText}
          </a>
        ) : (
          <a 
            href={actionLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block w-full py-3 gradient-border rounded-lg"
          >
            <div className="bg-black hover:bg-[#1a1a1a] transition-colors duration-300 text-center py-3 px-6 rounded-lg font-medium border border-[#8b0000]">
              {actionText}
            </div>
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0f0f0f] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#060D20] to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Orbitron'] font-bold text-3xl md:text-4xl mb-6">Our Products</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b0000] to-[#a52a2a] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Community-made tools designed to help the Nervos Network ecosystem grow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <ProductCard
            icon="ph-coins"
            title="Token Minter dApp"
            description="A simple web tool that lets anyone create their own custom tokens on Nervos Network using JoyID or UTXO Global wallets. Uses RGB++ standard and supports multiple languages for the community."
            status="coming-soon"
            statusText="Coming Soon"
            gradientFrom="[#8b0000]"
            gradientTo="[#a52a2a]"
            iconColor="text-[#8b0000]"
            statusBgColor="bg-[#8b0000]/10"
            statusTextColor="text-[#8b0000]"
            actionText="Visit Token Minter"
            actionLink="https://dapp.sitaminter.xyz"
          />
          
          <ProductCard
            icon="ph-game-controller"
            title="Gamified Community Bot"
            description="A recently launched bot in the Telmo Talks community, rewarding user interactions with points redeemable for native Nervos tokens."
            status="active"
            statusText="Active"
            gradientFrom="white" 
            gradientTo="white"
            iconColor="text-white"
            statusBgColor="bg-white/10"
            statusTextColor="text-white"
            actionText="Join Community"
            actionLink="https://t.me/telmotalks"
          />
          
          <ProductCard
            icon="ph-cube"
            title="DOB Minter"
            description="A fan project in progress to simplify minting Digital Objects (DOBs), Nervos' alternative to NFTs, making it accessible to more users."
            status="in-development"
            statusText="In Development"
            gradientFrom="black"
            gradientTo="#333"
            iconColor="text-[#8b0000]"
            statusBgColor="bg-[#8b0000]/10"
            statusTextColor="text-[#8b0000]"
            actionText="Coming May 2025"
            isDisabled={true}
          />
        </div>

        <motion.div 
          className="mt-16 bg-black rounded-2xl p-8 border border-[#8b0000]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-['Orbitron'] text-2xl font-bold mb-4">Future Plans</h3>
          <p className="text-gray-300">
            We're working on more helpful community tools to support the Nervos Network ecosystem. Stay tuned for updates on new projects we're creating as enthusiasts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
