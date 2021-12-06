import ToggleSwitch from "./toggleSwitch";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ButtonSetting from "./ButtonSetting";
import Footer from "./Footer";
import { motion } from "framer-motion";
import useDarkMode from "../hooks/useDarkMode";
import button from 'react-switch'

const SettingModal = (props, { section },root) => {
  const [colorTheme, setTheme] = useDarkMode();
  const [themeTxt, setThemeTxt] = useState(false);
  const router = useRouter();
  const [isSetting, setIsSetting] = useState(false);


  function showSetting(e) {
    setIsSetting(!isSetting);
  }

  function themeToggle () {
    setTheme(colorTheme)
    setThemeTxt(themeTxt)
    if (typeof window !== "undefined") {
      localStorage.setItem('theme', colorTheme)
     }
  }
  

  const modal = {
    hidden: { y: "-120vh" },
    show: { y: 0 },
    exit: { y: "-120vh" },
  };
  const settingTxt = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const settingBtn = {
    hidden: { x: -10, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };
  const settingBar = {
    hidden: { y: -100 },
    show: { y: 0 },
  };

  return (
    <>
      <ButtonSetting onClick={() => showSetting()} />

      {
        <div
          className={`modal z-[51] w-full absolute left-0 ${
            !isSetting ? "top-[-180vh]" : "top-0"
          } overflow-y-auto`}
        >
          {/* Header */}
          <motion.header
            variants={settingBar}
            initial={"hidden"}
            animate={isSetting ? "show" : "hidden"}
            transition={{ delay: 0.1 }}
            className="z-50 sticky header h-[60px] flex items-center shadow-sm bg-white  border-b w-full dark:text-dark-secondary-three dark:bg-dark-primary-two dark:border-primary-drab"
          >
            <nav className="p-5 items-center grid Header__grid_column w-full place-self-center">
              {/* <Link href='/'><a> */}
              <motion.button
                initial={"hidden"}
                animate={isSetting ? "show" : "hidden"}
                transition={{ delay: 0.3 }}
                onClick={() => setIsSetting(false)}
              >
                <motion.div
                  variants={settingBtn}
                  animate={isSetting ? "show" : "hidden"}
                  initial={"hidden"}
                  transition={{ delay: 0.5 }}
                  className="w-full h-full flex justify-start items-center"
                >
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
                </motion.div>
              </motion.button>
              {/* </a>
          </Link> */}
              <motion.h1
                variants={settingTxt}
                animate={isSetting ? "show" : "hidden"}
                initial={"hidden"}
                animate={isSetting ? "show" : "hidden"}
                transition={{ delay: 0.25 }}
                className="Section__heading justify-self-center"
              >
                News setting
              </motion.h1>
            </nav>
          </motion.header>
          {/* content */}
          <motion.main
            variants={modal}
            initial={"hidden"}
            animate={isSetting ? "show" : "hidden"}
            transition={{ ease: "easeOut", duration: 0.4 }}
            className="min-h-[calc(100vh-70px)] p-4 flex flex-col justify-between bg-[color:var(--Primary-clr-Setup)] dark:bg-dark-primary-one wrapper  overflow-y-auto"
          >
            <header className="Header__grafik-element text-center m-8 leading-tight">
              <h2 className="font-primary text-5xl font-bold text-primary-sage">Manage</h2>
              <h2 className="Sub__title">Categories</h2>
            </header>
            <div className="rounded-3xl bg-[color:var(--Typografy-clr-Snow)] shadow-lg dark:bg-dark-primary-three">
              <ToggleSwitch toggleValue="business" />
              <ToggleSwitch toggleValue="automobile" />
              <ToggleSwitch toggleValue="health" />
              <ToggleSwitch toggleValue="sports" />
              <ToggleSwitch toggleValue="travel" />
            </div>
            <div className="flex justify-center">
              <button
                onClick={themeToggle}
                className="font-secondary uppercase px-8 py-2 border border-secondary-fossil mt-10 rounded-3xl hover:bg-black hover:text-white transition-all hover:border-transparent dark:hover:bg-primary-sage"
              >
                {`toggle ${colorTheme} button`}
              </button>
            </div>
          <Footer />
          </motion.main>
        </div>
      }
    </>
  );
};

export default SettingModal;
