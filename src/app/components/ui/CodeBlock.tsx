import React, { act, useState } from "react";
import { motion } from "framer-motion";
import { contact } from "../utils/contactLinks";
enum Contacts {
    Github = "Github",
    Instagram = "Instagram",
    LinkedIn = "LinkedIn",
}

const commands = {
    Github: "git checkout Abhijit-Jha",
    LinkedIn: "yarn add LinkedIn",
    Instagram: "npm follow Instagram",
};

const CodeBlock = () => {
    const [activeTab, setActiveTab] = useState<Contacts>(Contacts.Github);
    const handleContact = ()=>{
        const link = contact.filter((element)=>{
            return element.platform == activeTab
        })
        window.open(link[0].link)
    }

    return (
        <motion.div
            initial={{ y: -1000 }}
            animate={{ y: -50 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: 0.5
            }} 
            className="sm:w-full w-fit sm:max-w-lg p-4 bg-gray-800 text-white rounded-lg shadow-lg absolute lg:top-1/ md:top-1/2 top-1/2 lg:left-1/3 md:left-1/4 sm:left-28 left-6 transform translate-x-1/2 translate-y-1/2 "
        >
            <div className="flex space-x-4">
                {Object.keys(commands).map((tab) => {
                    return (
                        <button
                            key={tab}
                            className={`px-4 py-2 font-medium ${activeTab === tab
                                ? "border-b-2 border-blue-500 text-blue-500"
                                : "text-gray-400 hover:text-white"
                                }`}
                            onClick={() => setActiveTab(tab as Contacts)}
                        >
                            {tab}
                        </button>
                    );
                })}
            </div>
            <div className="pt-4 flex justify-between">
                <code>{commands[activeTab]}</code>
                <button
                    onClick={handleContact}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 w-fit"
                >
                    Run
                </button>
            </div>
        </motion.div>
    );
};

export default CodeBlock;
