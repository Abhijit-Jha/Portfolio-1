import React from 'react';
import { ProjectCarousel } from './ui/ProjectCarousel';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="m-10 space-y-4"
      >
        <div className="flex justify-center items-center text-2xl font-bold">
          Projects
        </div>


        <motion.div
          className="flex justify-center items-center"
        >
          <ProjectCarousel />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
