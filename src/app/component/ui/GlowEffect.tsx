import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const GlowEffect = () => {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        setScreenWidth(window.innerWidth);

        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <motion.div
            initial={{ x: -100 }} 
            animate={{ x: screenWidth - 100 , boxShadow : "0px -300px 80px 100px rgba(255, 255, 255, .3) "}} 
            transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                bounce : 1
            }}
            className="w-20 h-16 blur-2xl bg-[#9729f2] dark:bg-blue-400 rounded-full absolute "
        ></motion.div>
    );
};

export default GlowEffect;