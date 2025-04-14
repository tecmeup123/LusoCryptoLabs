import { motion } from "framer-motion";

interface RoadmapItemProps {
  title: string;
  date: string;
  description: string;
  status: "completed" | "in-progress" | "upcoming" | "future";
  iconColor: string;
  icon: string;
  dateBgColor: string;
  dateTextColor: string;
  index: number;
}

const RoadmapItem = ({
  title,
  date,
  description,
  status,
  iconColor,
  icon,
  dateBgColor,
  dateTextColor,
  index,
}: RoadmapItemProps) => {
  return (
    <motion.div 
      className="relative pl-16 mb-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`absolute left-0 top-0 w-8 h-8 rounded-full ${iconColor} flex items-center justify-center z-10`}>
        <i className={`ph ${icon} text-xl text-[#060D20]`}></i>
      </div>
      <div className="bg-[#0A1128] rounded-2xl p-8 border border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h3 className="font-['Orbitron'] text-xl font-bold">{title}</h3>
          <span className={`px-4 py-1 ${dateBgColor} ${dateTextColor} rounded-full text-sm mt-2 md:mt-0`}>
            {date}
          </span>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-20 bg-[#060D20] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0A1128] to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Orbitron'] font-bold text-3xl md:text-4xl mb-6">Roadmap</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FFFF] to-[#784DFD] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our modest journey as enthusiasts supporting the Nervos Network ecosystem
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mt-16 relative">
          <div className="h-full w-2 bg-gradient-to-b from-[#00FFFF] via-[#784DFD] to-[#FF3DCD] absolute left-[15px] top-0"></div>
          
          <RoadmapItem
            title="Gamified Bot in Telmo Talks"
            date="Q3 2025 - Completed"
            description="Created a simple community bot for Telmo Talks that rewards members for chatting with points they can exchange for Nervos tokens."
            status="completed"
            iconColor="bg-[#3CC68A]"
            icon="ph-check-bold"
            dateBgColor="bg-[#3CC68A]/10"
            dateTextColor="text-[#3CC68A]"
            index={0}
          />
          
          <RoadmapItem
            title="Token Minter dApp Launch"
            date="April 2025"
            description="Working on a simple tool to help community members create tokens on Nervos Network with a friendly interface anyone can use."
            status="in-progress"
            iconColor="bg-[#00FFFF]"
            icon="ph-hourglass"
            dateBgColor="bg-[#00FFFF]/10"
            dateTextColor="text-[#00FFFF]"
            index={1}
          />
          
          <RoadmapItem
            title="DOB Minter Launch"
            date="May 2025"
            description="Planning a community tool for creating Digital Objects (DOBs) on Nervos Network, making it easier for everyone to use this NFT alternative."
            status="upcoming"
            iconColor="bg-[#784DFD]"
            icon="ph-clock"
            dateBgColor="bg-[#784DFD]/10"
            dateTextColor="text-[#784DFD]"
            index={2}
          />
          
          <RoadmapItem
            title="Future Developments"
            date="2026 & Beyond"
            description="Exploring more ideas for helpful community tools based on feedback from Nervos users. We're enthusiasts learning and contributing as we go."
            status="future"
            iconColor="bg-white/20"
            icon="ph-dots-three-outline"
            dateBgColor="bg-white/10"
            dateTextColor="text-white"
            index={3}
          />
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
