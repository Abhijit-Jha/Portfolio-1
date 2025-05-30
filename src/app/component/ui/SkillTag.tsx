import React from 'react';
import { motion } from 'framer-motion';

const SkillTag = ({ skill }: { skill: string }) => {
    return (
        <motion.div
            whileHover={{ backgroundColor: "blue" }}
            className="bg-blue-600 rounded-xl px-4 py-2 m-1 mx-0 text-xs text-center min-w-24  h-8 transition-colors duration-300 cursor-pointer hover:bg-#38bdf8 text-nowrap text-neutral-200 "
        >
            {skill}
        </motion.div>
    );
};

export default SkillTag;
