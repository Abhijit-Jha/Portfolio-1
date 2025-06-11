import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github, SquareArrowOutUpRight, Globe } from 'lucide-react';
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface ProjectTypes {
  title: string;
  description: string;
  image?: StaticImageData;
  source_code?: string;
  live_demo?: string;
}

const ProjectCard = ({ title, description, image, source_code, live_demo }: ProjectTypes) => {
  return (
    <div className="p-1 max-w-full ">
      <Card className="rounded-2xl p-4 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 shadow-md hover:shadow-lg transition-shadow duration-300 min-h-[450px] flex flex-col ">
        <div className="flex justify-end mb-2">
          <SquareArrowOutUpRight
            className="w-5 h-5 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            onClick={() => window.open(live_demo || source_code, "_blank")}
            aria-label="Open project live demo or source code"
            role="button"
          />
        </div>
        <div className="w-full h-48 overflow-hidden flex justify-center mb-4 rounded-md">
          <Image
            src={image || "https://dummyimage.com/512x512/cccccc/000000&text=Image+Not+Available"}
            alt={`${title} project image`}
            className="w-full h-full object-cover"
            width={200}
            height={200}
            priority
          />
        </div>
        <CardContent className="flex flex-col flex-1 justify-between items-center text-center p-0">
          <div>
            <h3 className="font-semibold text-lg text-black dark:text-white mb-2">{title}</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4 px-2 line-clamp-3">
              {description}
            </p>
          </div>
          <div className="mt-auto flex justify-center gap-3">
            <ButtonWithIcon link={source_code} disabled={!source_code}>
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">Source</span>
            </ButtonWithIcon>
            <ButtonWithIcon link={live_demo} disabled={!live_demo}>
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">Demo</span>
            </ButtonWithIcon>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface ButtonTypes {
  children: React.ReactNode;
  link?: string;
  disabled?: boolean;
}

export const ButtonWithIcon = ({ children, link, disabled = false }: ButtonTypes) => {
  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      onClick={() => !disabled && window.open(link, "_blank")}
      disabled={disabled}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition duration-200
        ${disabled
          ? "bg-gray-300 cursor-not-allowed text-gray-500"
          : "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"}`}
    >
      {children}
    </motion.button>
  );
};

export default ProjectCard;
