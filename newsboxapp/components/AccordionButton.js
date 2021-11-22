import { useState } from "react";

const AccordionButton = (index) => {
  const [clicked, setClicked] = useState(false)

  const accordionToggle = index  => {
    if(clicked === index){
      console.log('test');
      return setClicked(true)
    }
    setClicked(index)
  }
    return ( 
        <div onClick={()=> accordionToggle(index)} className={`ml-auto mr-4 flex w-10 h-10 scale-100 rounded-full items-center justify-center active:bg-gray-200 active:transition active:scale-150 ${clicked === index ? 'transform:rotate(0deg)': 'transform:rotate(45deg)'}`}>
        <button>
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
        </button>
      </div>
     );
}
 
export default AccordionButton;