import { useState } from "react";

const Header = () => {
 
 
  const [isArchive, setArchive] = useState(false);

  const [isNewsBox, setNewsBox] = useState(false);

  const [isSetting, setSetting] = useState(false);

 
  
  return (


    <header className="header h-[60px] flex items-center  border-b w-full">
      <nav className="p-5 items-center grid Header__grid_column w-full">
        <div>
        {/* <svg
  xmlns="http://www.w3.org/2000/svg"
  width="10.823"
  height="16.857"
  viewBox="0 0 10.823 16.857"
>
  <g id="icn_back" transform="translate(41.596 42.892) rotate(180)">
    <line
      id="Line_17"
      data-name="Line 17"
      y1="6.981"
      x2={8}
      transform="translate(32.185 34.5)"
      fill="none"
      stroke="#324755"
      strokelinecap="round"
      strokewidth={2}
    />
    <path
      id="Path_44"
      data-name="Path 44"
      d="M1.079-.035,9,7"
      transform="translate(31.185 27.481)"
      fill="#324755"
      stroke="#334856"
      strokelinecap="round"
      strokwidth={2}
    />
  </g>
</svg> */}
          </div>
        <h1 className='Section__heading justify-self-center'>News settings</h1>
        <div className='w-10 h-10 bg-red-600 justify-self-end opacity-0'></div>
      </nav>
    </header>
  );
};

export default Header;
