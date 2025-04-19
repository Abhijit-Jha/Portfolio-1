"use client";
import React from 'react'
import { motion } from "framer-motion"
import { ModeToggle } from './ui/ModeToggle';
import Button1 from './ui/Button';
const LINKEDIN_TEXT = "https://www.linkedin.com/messaging/compose/?recipient=abhijit-jha1&body=Hello%20Abhijit%2C%0A%0AI%20came%20across%20your%20profile%20and%20was%20impressed%20by%20your%20experience%20in%20full-stack%20development%2C%20especially%20with%20technologies%20like%20React%2C%20Node.js%2C%20and%20the%20MERN%20stack.%20We%20are%20currently%20looking%20for%20someone%20with%20your%20skills%20and%20would%20love%20to%20discuss%20potential%20opportunities.%0A%0ALooking%20forward%20to%20hearing%20from%20you."
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
                    <Button1 text={"Hire Me"} link={LINKEDIN_TEXT}/>
                </div>
            </div>


        </motion.div>
    )
}

export default Header
