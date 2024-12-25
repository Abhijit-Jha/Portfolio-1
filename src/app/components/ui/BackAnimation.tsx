import React from 'react';
import { motion } from 'framer-motion';
import Intro from '../Intro';

const FloatingCircles = () => {
  const shapes = [
    { size: '5vw', delay: 0, left: '25%' },
    { size: '2vw', delay: 2, left: '10%' },
    { size: '3vw', delay: 4, left: '70%' },
    { size: '4vw', delay: 0, left: '40%' },
    { size: '2vw', delay: 0, left: '65%' },
    { size: '6vw', delay: 3, left: '75%' },
    { size: '8vw', delay: 7, left: '35%' },
    { size: '3vw', delay: 15, left: '50%' },
    { size: '1.5vw', delay: 2, left: '20%' },
    { size: '10vw', delay: 0, left: '85%' },
  ];

  return (
    <div>
    <motion.div className="w-full relative h-screen min-h-screen  overflow-hidden">
      <div className="absolute inset-0 z-10">
        <Intro />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {shapes.map((circle, index) => (
          <motion.div
          key={index}
          initial={{ opacity: 0, y: '85vh' }}
          whileInView={{ opacity: 1 }} 
            viewport={{ once: false }} 
            animate={{
              y: 0, 
              rotate: 720, 
              opacity: 1, 
              borderRadius: `${Math.random() * (50 - 10) + 10}%`, 
            }}
            transition={{
              delay: circle.delay,
              duration: Math.random() * (30 - 10) + 10, 
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute bg-opacity-20 shadow-xl bg-[#9729f2] dark:bg-[rgba(255,255,255,0.2)]"
            style={{
              width: circle.size,
              height: circle.size,
              left: circle.left,
              background: '',
            }}
            ></motion.div>
          ))}
      </div>
    </motion.div>
    </div>
  );
};

export default FloatingCircles;
