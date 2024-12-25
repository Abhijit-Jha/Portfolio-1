import React from 'react';
import { motion } from "framer-motion"
const data:String = `I am an Engineering Student, currently in my third year with expertise in both front-end and back-end technologies. Skilled in JavaScript, React.js, Next.js, and Node.js, I create dynamic, responsive web applications. I work with databases like PostgreSQL, MongoDB, and MySQL, using Prisma for efficient database management. Passionate about emerging technologies such as AI and blockchain, I’ve contributed to AI-driven automation and blockchain-based solutions. Strong in communication and collaboration, I thrive in team environments, always looking to learn and grow. My goal is to build impactful, scalable solutions that drive innovation and contribute to the success of every project.`;

const AboutMe = () => {
    return (
        <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className='flex justify-center'>
            <div className='my-4 w-full max-w-2xl p-4 text-gray-700 tracking-wide leading-relaxed'>
                <p className="md:text-lg text-sm">{data}</p>
            </div>
        </motion.div>
    );
}

export default AboutMe;
