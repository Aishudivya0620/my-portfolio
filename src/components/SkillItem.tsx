import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

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
      className="flex flex-col items-center justify-center p-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <div 
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-3 shadow-md ${skill.color}`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-sm font-medium text-center text-gray-800 dark:text-gray-200">
        {skill.name}
      </h3>
      <div className="flex mt-2 space-x-1">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < skill.level 
                ? 'bg-primary-500 dark:bg-primary-400' 
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillItem;