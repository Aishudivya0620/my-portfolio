import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

export interface SkillProps {
  name: string;
  icon: LucideIcon;
  color: string;
  level: number; // 1-5
}

interface SkillItemProps {
  skill: SkillProps;
  index: number;
}

const SkillItem = ({ skill, index }: SkillItemProps) => {
  const Icon = skill.icon;
  
  return (
    <motion.div
      className="group relative flex flex-col items-center justify-center p-6 glow-card rounded-[2rem] border-white/10 transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${skill.color}`} />
      
      <div 
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${skill.color.replace('bg-', 'bg-')}/10`}
      >
        <Icon className={`w-8 h-8 ${skill.color.replace('bg-', 'text-')}`} />
      </div>

      <h3 className="text-sm font-bold text-center text-white tracking-wide">
        {skill.name}
      </h3>

      <div className="flex mt-4 gap-1.5">
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3 + (i * 0.1) }}
            className={`w-1.5 h-1.5 rounded-full ${
              i < skill.level 
                ? 'bg-primary-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]' 
                : 'bg-white/10'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillItem;