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
      className="bg-[#152747] rounded-2xl overflow-hidden border border-white/10 hover:border-[#00FFFF]/30 transition-all duration-300 shadow-xl"
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
            className="block w-full py-3 text-center bg-[#3CC68A] text-[#0A1128] font-medium rounded-lg hover:bg-[#2A9D6A] transition-colors duration-300"
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
            <div className="bg-[#060D20] hover:bg-[#152747] transition-colors duration-300 text-center py-3 px-6 rounded-lg font-medium">
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
          <h2 className="font-['Orbitron'] font-bold text-3xl md:text-4xl mb-6">Our Products</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFFF] to-[#784DFD] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Community-made tools designed to help the Nervos Network ecosystem grow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <ProductCard
            icon="ph-coins"
            title="Token Minter dApp"
            description="A simple web tool that lets anyone create their own custom tokens on Nervos Network using JoyID wallet. Uses RGB++ standard and supports multiple languages. Requires 500 CKB to mint tokens."
            status="coming-soon"
            statusText="Coming Soon"
            gradientFrom="[#00FFFF]"
            gradientTo="[#784DFD]"
            iconColor="text-[#00FFFF]"
            statusBgColor="bg-[#00FFFF]/10"
            statusTextColor="text-[#00FFFF]"
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
            description="A fan project in progress to simplify minting Digital Objects (DOBs), Nervos' alternative to NFTs, making it accessible to more users."
            status="in-development"
            statusText="In Development"
            gradientFrom="[#784DFD]"
            gradientTo="[#FF3DCD]"
            iconColor="text-[#784DFD]"
            statusBgColor="bg-[#784DFD]/10"
            statusTextColor="text-[#784DFD]"
            actionText="Coming May 2025"
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
          <h3 className="font-['Orbitron'] text-2xl font-bold mb-4">Future Plans</h3>
          <p className="text-gray-300">
            Our small team is working on more helpful community tools to support the Nervos Network ecosystem. Stay tuned for updates on new projects we're creating as enthusiasts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
