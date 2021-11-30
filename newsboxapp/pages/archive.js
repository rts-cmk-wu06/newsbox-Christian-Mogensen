import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import { useContext, useEffect } from "react";
import { LocalStorageContext } from "../components/localStorageContext";
import { motion } from "framer-motion";
import SettingModal from "../components/SettingModal";

const archive = (theme) => {
  useEffect(()=>{
  if (typeof window !== "undefined") {
    const root = window.document.documentElement
    let theme;
    if (localStorage) {
    theme = localStorage.getItem("theme")
    root.classList.add(localStorage.theme);
    }
    }
  },[theme])
  const { isToggled, setIsToggled } = useContext(LocalStorageContext);
  return (
    <>
      {/* // Header -> need to look into how to change props dynamically */}
      <Header>
        <Link href="/" exact>
          <a>
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.125 }}
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
          </a>
        </Link>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="Section__heading justify-self-center"
        >
          Archive
        </motion.h1>
        <SettingModal />
      </Header>
      <Searchbar />

      {/* // content loaded from fetch */}
      <div className="min-h-[calc(100vh-190px)]"></div>
      <Footer />
    </>
  );
};

export default archive;
