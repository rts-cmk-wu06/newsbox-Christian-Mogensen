import { useState } from "react";
import { settingData } from "../Data/HeaderData";
import Link from "next/link";

const Header = ({children}) => {

  return (


<header className="z-50 sticky top-0 header h-[60px] flex items-center shadow-sm bg-white  border-b w-full">
        <nav className="p-5 items-center grid Header__grid_column w-full place-self-center">
         {children}
        </nav>
      </header>
  );
};

export default Header;
