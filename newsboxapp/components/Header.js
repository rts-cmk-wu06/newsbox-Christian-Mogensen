import { useState } from "react";
import { settingData } from "../Data/HeaderData";
// import { ArrowRight } from "../public/Arrowright.JS";

const Header = () => {
  // const [header, setHeader] = useState(true) 
// const arr = []
// arr.push(settingData.iconleft)

// console.log(arr);
  return (


    <header className="sticky top-0 header h-[60px] flex items-center shadow-sm bg-white  border-b w-full">
      <nav className="p-5 items-center grid Header__grid_column w-full place-self-center">
        <div className='w-full h-full bg-gray-500 flex'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
</svg>
          </div>
        <h1 className='Section__heading justify-self-center'>News settings</h1>
        <div className='w-10 h-10 bg-red-600 justify-self-end opacity-0'></div>
      </nav>
    </header>
  );
};

export default Header;
