import ToggleSwitch from "../components/toggleSwitch";
import Link from 'next/link'
import { useRouter } from 'next/router'
import {useState} from 'react'
import ButtonSetting from "./ButtonSetting";
import Footer from "./Footer";


const SettingModal = (props) => {
  const router = useRouter()
  const [isSetting, setIsSetting] = useState(false)
    function showSetting(e){
        setIsSetting( !isSetting )
    
    }
  return (
    <>
<ButtonSetting onClick={(e)=>showSetting()} />

    {<div className={`modal z-[51] w-full absolute left-0 ${!isSetting ? 'top-[-120vh]' : 'top-0'} max-h-screen overflow-y-auto`}>
    {/* Header */}
      <header className="z-50 sticky header h-[60px] flex items-center shadow-sm bg-white  border-b w-full">
        <nav className="p-5 items-center grid Header__grid_column w-full place-self-center">
          {/* <Link href='/'><a> */}
          <button onClick={() => setIsSetting(false)}>
            <div className="w-full h-full flex justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          </button>
          {/* </a>
          </Link> */}
          <h1 className="Section__heading justify-self-center">News setting</h1>
        </nav>
      </header>
      {/* content */}
        <main className="h-full p-4 flex flex-col justify-between bg-[color:var(--Primary-clr-Setup)] wrapper">
          <header className="Header__grafik-element text-center m-8 leading-tight">
            <h2 className="Primary__heading spc-clr-h1">Manage</h2>
            <h2 className="Sub__title">Categories</h2>
          </header>
          <div className="rounded-3xl bg-[color:var(--Typografy-clr-Snow)] shadow-lg">

              <ToggleSwitch section='Business' />

              <ToggleSwitch section='Automobile' />

              <ToggleSwitch section='Health' />

              <ToggleSwitch section='Sports' />

              <ToggleSwitch section='Travel' />

          </div>
          <div className="flex justify-center">
            <button className="Secondary__font Secondary__font_hover px-8 py-2 border border-[color:var(--Secondary-clr-Fossil)] mt-10 rounded-3xl hover:bg-black hover:text-white] transition-all hover:border-transparent">
              TOGGLE DARK MODE
            </button>
          </div>
        </main>
        <Footer />
      </div>}
    </>

  );
};

export default SettingModal;
