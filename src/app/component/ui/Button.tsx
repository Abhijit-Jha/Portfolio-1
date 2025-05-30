import React from 'react'
import { motion } from "framer-motion"
interface ButtonTypes {
    text : string,
    link : string | URL | undefined 
}
const Button1 = ({ text , link } : ButtonTypes ) => {
    return (
        <motion.button
            onClick={()=>window.open(link)}
            whileHover={{ background: "#2680F3" }}
            className='bg-buttonColor-primary  border-slate-600 p-1 rounded-lg text-sm shadow-md drop-shadow-lg dark:border-white dark: dark:shadow-sm w-20 text-neutral-200'>
            {text}
        </motion.button>
    )
}

export default Button1
