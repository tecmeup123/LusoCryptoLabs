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
      className="bg-[#0A1128] p-8 rounded-2xl border border-white/10 hover:border-[#00FFFF]/50 transition-all duration-300 shadow-lg shadow-[#060D20]/50 relative overflow-hidden"
      whileHover={{ 
        y: -8, 
        boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.15)",
        transition: { duration: 0.3, type: "spring", stiffness: 300 } 
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Background gradient that animates on hover */}
      <motion.div 
        className="absolute -inset-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transform rotate-45"
        initial={{ x: "-100%" }}
        whileHover={{ 
          x: "100%", 
          opacity: 1,
          transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 } 
        }}
      />
      
      <div className="flex justify-center mb-6 relative z-10">
        <motion.div 
          className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#152747] to-[#0A1128] rounded-full border-2 border-${iconColor.split('-')[1]}/30`}
          whileHover={{ 
            scale: 1.1,
            boxShadow: `0 0 20px rgba(${iconColor.includes('00FFFF') ? '0, 255, 255' : iconColor.includes('3CC68A') ? '60, 198, 138' : '120, 77, 253'}, 0.3)` 
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.i 
            className={`ph ${icon} text-4xl ${iconColor}`}
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          ></motion.i>
        </motion.div>
      </div>
      
      <motion.h3 
        className="font-['Orbitron'] text-2xl font-bold text-center mb-4 relative z-10"
        whileHover={{ scale: 1.05, color: iconColor.split('text-')[1] }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {title}
      </motion.h3>
      
      <p className="text-gray-300 text-center relative z-10">
        {description}
      </p>
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
          <h2 className="font-['Orbitron'] font-bold text-3xl md:text-4xl mb-6">The Crew Behind the Magic</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFFF] to-[#784DFD] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            LusocryptoLabs is a crew of Nervos Network superfans 🚀 building cool stuff for the community. We're not pro devs - just enthusiasts crafting simple tools to make the Nervos ecosystem more awesome! Let's grow this thing together! 💪
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <OverviewCard
            icon="ph-rocket-launch"
            iconColor="text-[#00FFFF]"
            title="Mission"
            description="To smash out sick tools that make Nervos more accessible! 🚀 We're all about that DIY spirit - building stuff that helps the community level up!"
          />
          <OverviewCard
            icon="ph-eye"
            iconColor="text-[#784DFD]"
            title="Vision"
            description="Dreaming of a world where everyone can easily jump into the Nervos ecosystem. No gatekeeping, just fun tools that anyone can use! 👁️‍🗨️"
          />
          <OverviewCard
            icon="ph-chart-line-up"
            iconColor="text-[#3CC68A]"
            title="Growth"
            description="Helping the community grow by making dope stuff that gets people hyped about Nervos! The more of us, the merrier! 📈 Let's go to the moon together!"
          />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
