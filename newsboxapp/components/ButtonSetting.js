import { useState } from "react";
import {motion} from 'framer-motion'
const ButtonSetting = ({onClick}) => {
    


    return (
  <motion.button 

  initial={{x:10, opacity:0}}
  animate={{x:0, opacity:1}}
  transition={{ delay: 0.125 }}
  
  onClick={onClick}>
    <div className="w-full h-full flex justify-end items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    </div>
  </motion.button>
  )
};
export default ButtonSetting;
