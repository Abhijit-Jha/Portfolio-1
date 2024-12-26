import React from 'react'
import { AccordionDemo } from './ui/Accordion'
import { motion } from "framer-motion"
const KnowMe = () => {
    return (
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ y: 100, opacity: 0 }}
            className=''
        >
            <div className='flex justify-center p-4 pt-8 md:text-3xl text-xl'>
                Know Me
            </div>
            <AccordionDemo />
        </motion.div>
    )
}

export default KnowMe
