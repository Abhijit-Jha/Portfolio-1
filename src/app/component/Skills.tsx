import React from 'react'
import SkillContainer from './ui/SkillContainer'
import { skills } from './utils/skills'
import { motion } from "framer-motion"
const Skills = () => {
    return (
        <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className=''>
            <div className='flex justify-center items-center text-4xl my-2 '>
                My Skills
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
