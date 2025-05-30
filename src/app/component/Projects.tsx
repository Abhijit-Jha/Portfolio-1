import React from 'react';
import { ProjectCarousel } from './ui/ProjectCarousel';
import { motion } from 'framer-motion';
import Highlighter from './ui/Highlighter';

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
        <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-10 max-w-7xl mx-auto text-center">
          <div className=''>
            <Highlighter>
              <h2 className="text-lg md:text-4xl  text-black dark:text-white max-w-4xl relative z-10  inline-block">
                Projects
              </h2>
            </Highlighter>
            <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm text-center pt-4">
              What have I built?
            </div>
          </div>
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
