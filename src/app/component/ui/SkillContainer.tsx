import React from 'react';
import SkillTag from './SkillTag';
import { motion } from "framer-motion";

const SkillContainer = ({
  skillName,
  skills,
}: {
  skillName: string;
  skills: string[];
}) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, scale: 0.8 }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: 0, 
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 300,
        delay: 0.1,
      }}
      className="bg-transparent text-gray-900 min-h-24 shadow-xl rounded-lg p-6 border border-black dark:border-gray-300 my-4"
    >
      <div className="md:text-lg font-bold mb-4 text-blue-600 dark:text-blue-300 text-xs">
        {skillName}
      </div>
      <motion.div
        className="grid lg:grid-cols-6  grid-cols-3 gap-4"
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
        }}
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.1 }} 
      >
        {skills.map((skill, index) => {
          return <SkillTag key={index} skill={skill} />;
        })}
      </motion.div>
    </motion.div>
  );
};

export default SkillContainer;
