import React from 'react';
import Head from 'next/head';
import { motion } from "framer-motion";

const data: string = `Hi, I'm Abhijit Jha — an Engineering Student currently in my third year with a strong focus on full-stack web and mobile development. I specialize in technologies like JavaScript, React.js, Next.js, Node.js, and React Native with Expo for building cross-platform mobile apps. 

My experience spans both front-end and back-end development, and I work with databases such as PostgreSQL, MongoDB, and MySQL using Prisma for efficient data management. I’m also deeply interested in cutting-edge technologies like blockchain, and I’ve contributed to decentralized solutions that drive innovation.

Beyond coding, I’m a stock market investor and a tech enthusiast who’s always exploring new possibilities in automation and smart systems. `;

const AboutMe = () => {
    return (
        <>
            <Head>
                <title>Abhijit Jha | Full-Stack Developer & Engineer</title>
                <meta name="description" content="Official website of Abhijit Jha — full-stack web developer with expertise in React, Node.js, AI, and Blockchain. Visit abhijit.website for portfolio and projects." />
                <meta name="keywords" content="Abhijit Jha, abhijit.website, Full Stack Developer, React Developer, AI Developer, Blockchain Developer, Engineering Student" />
                <meta name="author" content="Abhijit Jha" />
            </Head>
            <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className='flex justify-center'>
                <div className='my-4 w-full max-w-2xl p-4 text-gray-700 dark:text-gray-100 tracking-wide leading-relaxed'>
                    <p className="md:text-lg text-sm whitespace-pre-line">{data}</p>
                </div>
            </motion.div>
        </>
    );
};

export default AboutMe;
