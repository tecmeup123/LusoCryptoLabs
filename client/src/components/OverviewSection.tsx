import { motion } from "framer-motion";

const OverviewCard = ({ 
  icon, 
  title, 
  description, 
  iconColor 
}: { 
  icon: string; 
  title: string; 
  description: string; 
  iconColor: string; 
}) => {
  return (
    <motion.div 
      className="bg-[#0A1128] p-8 rounded-2xl border border-white/10 hover:border-[#00FFFF]/50 transition-all duration-300 shadow-lg shadow-[#060D20]/50"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center mb-6">
        <div className={`w-16 h-16 flex items-center justify-center bg-[#152747] rounded-full`}>
          <i className={`ph ${icon} text-3xl ${iconColor}`}></i>
        </div>
      </div>
      <h3 className="font-['Orbitron'] text-xl font-bold text-center mb-4">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </motion.div>
  );
};

const OverviewSection = () => {
  return (
    <section id="overview" className="py-20 bg-[#152747]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Orbitron'] font-bold text-3xl md:text-4xl mb-6">Who We Are</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFFF] to-[#784DFD] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            LusocryptoLabs is a team of three passionate enthusiasts creating tools and activities to support the Nervos Network. Our goal is to help grow the Nervos ecosystem through simple community tools and engaging initiatives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <OverviewCard
            icon="ph-rocket-launch"
            iconColor="text-[#00FFFF]"
            title="Mission"
            description="Contribute to the growth of the Nervos ecosystem through community tools and fan-created initiatives."
          />
          <OverviewCard
            icon="ph-eye"
            iconColor="text-[#784DFD]"
            title="Vision"
            description="Help more users discover and enjoy the Nervos Network through accessible community-built tools."
          />
          <OverviewCard
            icon="ph-chart-line-up"
            iconColor="text-[#3CC68A]"
            title="Growth"
            description="Encouraging community participation and education to support Nervos Network's adoption."
          />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
