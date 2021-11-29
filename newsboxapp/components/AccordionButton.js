
import { motion } from "framer-motion";
const AccordionButton = ({onClick, isToggled, isAcc}) => {

  // animate={isAcc ? "show" : "hidden"}
  // initial={'hidden'}
  const buttonRotate={
    active:{
      rotate: '0deg'
    },
    inactive:{
      rotate: '-90deg'
    }
  }

    return ( 
      
        <motion.button 
        variants={buttonRotate}
        animate={isToggled ? 'active':'inactive'} initial={'inactive'} className={`ml-auto mr-4 flex w-10 h-10 scale-100 rounded-full items-center justify-center active:bg-gray-200 active:transition active:scale-150`} onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.button>
      
     );
}
 
export default AccordionButton;