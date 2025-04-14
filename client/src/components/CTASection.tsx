import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0f0f0f] to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#1a0000] to-black p-4 rounded-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#8b0000]/10 to-[#a52a2a]/10"></div>
          <div className="relative z-10 p-8 text-center">
            <h2 className="font-['Orbitron'] font-bold text-3xl md:text-4xl mb-6">Join the Nervos Network Community</h2>
            <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
              Try out our simple community tools and be part of the growing Nervos ecosystem with us.
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Looking for similar products with your own branding? <a href="mailto:contact@lusocryptolabs.xyz" className="text-[#8b0000] hover:underline">Contact us</a> to discuss custom solutions.
            </p>
            <motion.a
              href="https://dapp.sitaminter.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#8b0000] text-white font-bold rounded-lg hover:bg-[#8b0000]/90 transition-colors duration-300 shadow-lg shadow-[#8b0000]/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Try Token Minter
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
