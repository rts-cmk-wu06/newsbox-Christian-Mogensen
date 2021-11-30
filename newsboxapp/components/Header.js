import { useState } from "react";
import { settingData } from "../Data/HeaderData";
import Link from "next/link";
import {motion}from 'framer-motion'

const Header = ({children}) => {

  return (


<motion.header 
initial={{y:-70}}
  animate={{y:0}}

className="z-50 sticky top-0 header h-[60px] flex items-center shadow-sm bg-white text-typografy-onyx dark:text-dark-secondary-three dark:bg-dark-primary-two border-b dark:border-primary-drab w-full">
        <nav className="p-5 items-center grid Header__grid_column w-full place-self-center">
         {children}
        </nav>
      </motion.header>
  );
};

export default Header;
