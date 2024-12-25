import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CodeBlock from "./ui/CodeBlock";
import { Code } from "lucide-react";

const aboutme = [
    "Software Engineer.",
    "Full Stack Developer"
];

const Intro = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % aboutme.length);
        }, 3000);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div>
            <motion.div
                className="absolute top-1/4 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2 cursor-text space-y-2 sm:left-24 left-10"
                initial={{
                    y: -1200,
                }}
                animate={{
                    y: 0,
                }}
                transition={{
                    delay: 0.2,
                    ease: "linear",
                    duration: 0.5,
                    type: "spring",
                }}
            >
                <motion.h1
                    transition={{ type: "spring", stiffness: 300 }}
                    className="md:text-5xl text-xl sm:text-4xl"
                >
                    I am Abhijit Jha, a {" "}
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={currentIndex}
                            className="text-blue-500 "
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {aboutme[currentIndex].split("").map((letter, letterIndex) => (
                                <motion.span
                                    key={`${currentIndex}-${letterIndex}`}
                                    className="text-blue-700 inline-block text-lg sm:text-4xl lg:text-5xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: letterIndex * 0.1 }}
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </motion.span>
                            ))}
                        </motion.span>
                    </AnimatePresence>
                </motion.h1>
                <h2 className="text-extralight font-extralight md:ml-28 text-center sm:text-left">
                    Turning Your 'I Don't Know How This Works' Into 'Wow, It Actually Works!'
                </h2>
            </motion.div>
            <CodeBlock />
        </div>
    );
};

export default Intro;
