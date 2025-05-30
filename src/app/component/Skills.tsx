import React from 'react'
import SkillContainer from './ui/SkillContainer'
import { skills } from './utils/skills'
import { motion } from "framer-motion"
import Highlighter from './ui/Highlighter'
const Skills = () => {
    return (
        <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className=''>
            <div className='flex justify-center items-center'>
                <div>
                    <Highlighter>
                        <div className='text-lg md:text-4xl mb-0 text-black dark:text-white max-w-4xl flex justify-center items-center relative z-10'>
                            Tech Stack & Skills  { " " }
                        </div>
                    </Highlighter>
                    <div className='text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm text-center'>
                        What I am good at?
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center my-10'>
                <SkillsList />
            </div>
        </motion.div>
    )
}

const SkillsList = () => {
    return (
        <div className="w-auto  sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-4">
            {(Object.entries(skills).map(([skill, skillList]) => {
                return <SkillContainer key={skill} skillName={skill} skills={skillList} />;
            }))}
        </div>
    );
};


export default Skills
