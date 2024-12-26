import React from 'react'
import {motion} from "framer-motion"
import { useScroll, useSpring } from "framer-motion";
const ScrollEffect = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
  return (
    <div>
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#2680F3",
          zIndex : 999
        }}
      />
    </div>
  )
}

export default ScrollEffect
