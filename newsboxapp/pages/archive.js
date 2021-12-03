import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import { useContext, useEffect, useRef, useState } from "react";
import { LocalStorageContext } from "../components/localStorageContext";
import { motion, AnimatePresence, animate } from "framer-motion";
import SettingModal from "../components/SettingModal";

const truncate = (str, max, suffix) =>
  str.length < max
    ? str
    : `${str.substr(
        0,
        str.substr(0, max - suffix.length).lastIndexOf(" ")
      )}${suffix}`;



const DELETE_BTN_WIDTH = 5;

const abstract_DELETE_ANIMATION = { height: 0, opacity: 0 };
const abstract_DELETE_TRANSITION = {
  opacity: {
    transition: {
      duration: 0,
    },
  },
};

const archive = (theme) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      let theme;
      if (localStorage) {
        theme = localStorage.getItem("theme");
        root.classList.add(localStorage.theme);
      }
    }
  }, [theme]);
  const { isToggled, setIsToggled } = useContext(LocalStorageContext);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.125,
        delayChildren: 0.125,
        staggerChildren: 0.125,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
    exit: { x: -20, opacity: 0 },
  };

  const archiveMasterArr = [];
  if (typeof window !== "undefined") {
    const archiveLcl = localStorage.getItem("archiveItem");
    const archiveParse = JSON.parse(archiveLcl);
    archiveMasterArr = archiveParse;
  }
  const [articlesList, setarticlesList] = useState(archiveMasterArr);
  console.log(archiveMasterArr);

  const handleDragEnd = (info, articleTitle) => {
    if (typeof window !== "undefined") {
      setarticlesList(
        articlesList.filter((article) => article.title !== articleTitle),
        localStorage.setItem("archiveItem", JSON.stringify(articlesList))
      );
    }
  };

  return (
    <div className="dark:bg-black">
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
      <ul className="mt-3 min-h-[calc(100vh-202px)]">
        <AnimatePresence>
          {archiveMasterArr.map((article, index) => (
            <motion.li
              className="relative"
              key={index}
              exit={abstract_DELETE_ANIMATION}
              transition={abstract_DELETE_TRANSITION}
            >
              <motion.div
                onTap={(_, info) => handleDragEnd(info, article.title)}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => handleDragEnd(info, article.title)}
                className="relative z-20 bg-secondary-ice flex items-center border-b border-white dark:border-dark-primary-three dark:text-dark-secondary-three dark:bg-dark-primary-one"
              >
                <figure className="cover-img">
                  <img
                    className="article-img"
                    src={article.img}
                    alt={article.title + " image"}
                    loading="lazy"
                    width="70px"
                    height="70px"
                  />
                </figure>

                <div className="abstract-text">
                  <h3 className="Card__title">
                    {truncate(article.title, 20, "...")}
                    {/* {article.title} */}
                  </h3>
                  <p className="abstract__time_stamp">
                    {truncate(article.abstract, 40, "...")}
                    {/* {article.abstract} */}
                  </p>
                </div>
              </motion.div>
              <div className="w-full z-10 top-1/2 right-0 absolute h-[calc(100%-2px)] bg-red-400 flex justify-end items-center -translate-y-1/2">
                <div className="w-12 h-12 flex justify-center items-center m-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
                </div>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <Footer />
    </div>
  );
};

export default archive;
