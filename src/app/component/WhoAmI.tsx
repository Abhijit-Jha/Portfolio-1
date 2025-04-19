import React from 'react'
import Carousell from './ui/Carousel'
import AboutMe from './ui/AboutMe'
import { motion } from "framer-motion"

const WhoAmI = () => {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}  
      initial={{ y: 100, opacity: 0 }}   
      transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      className='m-4 '
    >
      <Carousell />
      <AboutMe />
    </motion.div>
  )
}

export default WhoAmI
