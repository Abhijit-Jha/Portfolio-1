"use client";
import React from 'react'
import { motion } from "framer-motion"
import { ModeToggle } from './ui/ModeToggle';
import Button1 from './ui/Button';
const RESUME_LINK = "https://drive.google.com/file/d/1z3WdOp4GnX1sQ8Hja1L_ktPSmoQ_gs6n/view?usp=sharing"
const Header = () => {
    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "" }}
            className='h-18 sm:mx-20 mx-4 mt-8 bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border  border-black flex items-center p-4 justify-between  dark:border-slate-800 z-20 mb-8 sticky top-10'
        >
            <motion.div
                whileHover={{ scale: 0.95 }}
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
                className='font-bold text-xl cursor-pointer pl-4'
            >
                {"<Abhijit Jha/>"}
            </motion.div>
            <div className='flex space-x-3'>
                <ModeToggle />
                <div className='flex items-center'>
                    <Button1 text={"Hire Me"} link={RESUME_LINK}/>
                </div>
            </div>


        </motion.div>
    )
}

export default Header
