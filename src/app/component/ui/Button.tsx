import React from "react";
import { motion } from "framer-motion";

interface ButtonTypes {
  text: string;
  link: string | URL | undefined;
  disabled?: boolean;
}

const Button1 = ({ text, link, disabled = false }: ButtonTypes) => {
  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      onClick={() => !disabled && link && window.open(link.toString(), "_blank")}
      disabled={disabled}
      className={`flex items-center justify-center px-3 py-1.5 rounded-sm text-sm font-medium transition duration-200
        ${disabled
          ? "bg-gray-300 cursor-not-allowed text-gray-500"
          : "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"}`}
    >
      {text}
    </motion.button>
  );
};

export default Button1;
