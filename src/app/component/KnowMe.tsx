import React from 'react'
import { AccordionDemo } from './ui/Accordion'
import { motion } from "framer-motion"
import Highlighter from './ui/Highlighter'

const KnowMe = () => {
    return (
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ y: 100, opacity: 0 }}
            className=''
        >
            <div className='flex flex-col items-center p-4 pt-8'>
                <Highlighter>
                    <h2 className='relative z-10 md:text-3xl text-xl font-semibold'>
                        Know Me
                    </h2>
                </Highlighter>
                <p className='mt-2 text-center text-neutral-700 dark:text-neutral-300 text-base md:text-lg italic'>
                    Who am I?
                </p>
            </div>
            <AccordionDemo />
        </motion.div>
    )
}

export default KnowMe
