import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github,View,SquareArrowOutUpRight } from 'lucide-react';
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image"
interface ProjectTypes {
  title : string
  description : string,
  image : StaticImageData,
  source_code : string,
  live_demo : string
}
const ProjectCard = ({ title, description, image,source_code,live_demo }: ProjectTypes) => {
  return (
    <div className="p-1">
      <Card className="shadow-md rounded-lg p-4">
        <CardContent className="relative flex flex-col items-center justify-center p-6">
          <div className="w-full flex justify-end size-1 cursor-pointer" onClick={() => window.open(live_demo || source_code)}>
            <SquareArrowOutUpRight className="size-4 " />
          </div>
          <div className="w-full h-80 overflow-hidden flex justify-center">
            <Image
              src={image}
              alt="Project Image"
              className="md:w-5/6 h-52 w-full object-contain rounded-md"
            />
          </div>
          <div className="absolute bottom-28 text-cyan-50 md:text-xl sm:p-2 p-5 text-sm font-bold text-nowrap">
            {title}
          </div>
          <div className="absolute bottom-20  md:text-[18px] text-xs pl-2 text md:pl-10">
            {description}
          </div>
          <div className="flex justify-between w-full">
            <ButtonWithIcon link={source_code}><Github className="size-4"/> <p>Source code</p></ButtonWithIcon>
            <ButtonWithIcon link={live_demo}><View className="size-4" /><p>Live demo</p></ButtonWithIcon>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface ButtonTypes{
  children : React.ReactNode,
  link : string
}

export const ButtonWithIcon = ({ children,link}: ButtonTypes ) => {
  return <motion.button
    whileHover={{ background: "#2680F3" }}
    onClick={()=>window.open(link)}
    className='bg-buttonColor-primary  border-slate-600 p-1 rounded-lg text-sm shadow-md drop-shadow-lg dark:border-white dark: dark:shadow-sm w-20  text-nowrap min-w-fit flex items-center justify-center space-x-1'>
    {children}
  </motion.button>

}

export default ProjectCard;
