import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useContext, useEffect, useState, useRef } from "react";
import Accordion from "../components/Accordion";
import AccordionButton from "../components/AccordionButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {LocalStorageContext} from "../pages/_app";
import Searchbar from "../components/Searchbar";
import SettingModal from "../components/SettingModal";

// import Image from 'next/image'
const apiKey = process.env.NYT_API_KEY;
const apiAutoMobileUrl =
  "https://api.nytimes.com/svc/topstories/v2/automobiles.json?api-key=";
const apiHealthUrl =
  "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=";
const apiSportUrl =
  "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=";
const apiBusinessUrl =
  "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=";
const apiTravelUrl =
  "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=";

export const getStaticProps = async () => {
  const resBusiness = await fetch(apiBusinessUrl + apiKey);
  const resAutomobile = await fetch(apiAutoMobileUrl + apiKey);
  const resHealth = await fetch(apiHealthUrl + apiKey);
  const resTravel = await fetch(apiTravelUrl + apiKey);
  const resSport = await fetch(apiSportUrl + apiKey);

  const dataBusiness = await resBusiness.json();
  const dataAutomobile = await resAutomobile.json();
  const dataHealth = await resHealth.json();
  const dataTravel = await resTravel.json();
  const dataSport = await resSport.json();
  return {
    props: {
      dataBusiness,
      dataAutomobile,
      dataHealth,
      dataTravel,
      dataSport,
    },
  };
};
export default function Home({
  dataBusiness,
  dataAutomobile,
  dataHealth,
  dataTravel,
  dataSport,
  theme,
}) {
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
  const { isToggled } = useContext(LocalStorageContext);

  const truncate = (str, max, suffix) =>
    str.length < max
      ? str
      : `${str.substr(
          0,
          str.substr(0, max - suffix.length).lastIndexOf(" ")
        )}${suffix}`;

  const business = dataBusiness.results;
  const automobile = dataAutomobile.results;
  const health = dataHealth.results;
  const travel = dataTravel.results;
  const sport = dataSport.results;
  const masterArray = [];
  const [filterBusiness, setFilterBusiness] = useState([]);
  const [filterAutomobile, setFilterAutomobile] = useState([]);
  const [filterHealth, setFilterHealth] = useState([]);
  const [filterTravel, setFilterTravel] = useState([]);
  const [filterSport, setFilterSport] = useState([]);

  const [isAcc, setAcc] = useState(false);
  // filtering logic that cleans up the data from fetch, so no broken links appear and the section genre is specific to the value
  useEffect(() => {
    setFilterBusiness(
      business.filter((item) => item.section == "business" && !!item.multimedia)
    );

    setFilterAutomobile(
      automobile.filter(
        (item) => item.section == "automobiles" && !!item.multimedia
      )
    );
    setFilterHealth(
      health.filter((item) => item.section == "health" && !!item.multimedia)
    );
    setFilterTravel(
      travel.filter((item) => item.section == "travel" && !!item.multimedia)
    );
    setFilterSport(
      sport.filter((item) => item.section == "sports" && !!item.multimedia)
    );
    // console.log(filterBusiness);
  }, []);
  // masterarray logic that stores all of the data fetched and toggled in settings
  masterArray.push({ title: "Business", dataArr: filterBusiness });
  masterArray.push({ title: "Automobile", dataArr: filterAutomobile });
  masterArray.push({ title: "Health", dataArr: filterHealth });
  masterArray.push({ title: "Travel", dataArr: filterTravel });
  masterArray.push({ title: "Sports", dataArr: filterSport });

  // accordion usestate
  const [accordionBtnToggle, setAccordionBtnToggle] = useState({
    business: false,
    automobile: false,
    health: false,
    travel: false,
    sports: false,
  });

  // framer motion variants
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

  const DELETE_BTN_WIDTH = 5;

  const abstract_DELETE_ANIMATION = { height: 0, opacity: 0 };
  const abstract_DELETE_TRANSITION = {
    opacity: {
      transition: {
        duration: 0,
      },
    },
  };
  const valueRef = useRef(null);
  const [abstractsList, setabstractsList] = useState(false);
  const masterArchiveArr = [];
  const handleDragEnd = (info, abstractId, index, article, value) => {
    console.log(valueRef.current)
    
    // if (typeof window !== "undefined") {
    //   setabstractsList(
    //     localStorage.setItem("archive", JSON.stringify()),
    //     );
    //   }
    };
  return (
    <div>
      <div className="dark:bg-dark-primary-one overflow-x-hidden">
        <Header>
          <Link href="/archive" exact>
            <a>
              {/* <button onClick={() => router.back()}> */}
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.125 }}
                className=" w-full h-full flex justify-start items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={"currentColor"}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </motion.div>
              {/* </button> */}
            </a>
          </Link>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="Section__heading justify-self-center "
          >
            Newsbox
          </motion.h1>
          {/* <ButtonSetting /> */}
          <SettingModal />
        </Header>

        <Searchbar />
        {/* // content loaded from fetch */}
        <motion.main className="min-h-[calc(100vh-190px)] ">
          {/* <AnimatePresence> */}
          {masterArray.map((accordion, index) => {
            return (
              isToggled[accordion.title.toLowerCase()] && (
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, ease: "easeOut", duration: 0.125 }}
                >
                  <motion.div
                    className={`contcat flex items-center bg-secondary-ice dark:bg-dark-primary-two dark:text-dark-secondary-three h-[60px] border-b dark:border-dark-primary-one `}
                  >
                    <Accordion />
                    <h2 className="Section__heading uppercase dark:text-darkTsecondaryTwo">
                      {accordion.title}{" "}
                    </h2>
                    <AccordionButton
                      isToggled={
                        accordionBtnToggle[accordion.title.toLowerCase()]
                      }
                      onClick={() => {
                        setAcc(!isAcc);
                        setAccordionBtnToggle({
                          ...accordionBtnToggle,
                          [accordion.title.toLowerCase()]:
                            !accordionBtnToggle[accordion.title.toLowerCase()],
                        });
                      }}
                    />
                  </motion.div>
                  {/* <AnimatePresence> */}
                  <motion.ul
                    variants={container}
                    animate={isAcc ? "show" : "hidden"}
                    initial={"hidden"}
                    key={accordion.title}
                    className="flex justify-center flex-col"
                  >
                    {accordionBtnToggle[accordion.title.toLowerCase()]
                      ? accordion.dataArr.map((article, index) => (
                          <motion.li
                            variants={item}
                            className="relative"
                            key={article.id}
                            exit={abstract_DELETE_ANIMATION}
                            transition={abstract_DELETE_TRANSITION}

                          >
                            <motion.div
                              // onTap={(_, info) =>
                              //   handleDragEnd(info, article.id)
                              // }
                              ref={valueRef}
                              drag="x"
                              dragConstraints={{ left: 0, right: 0 }}
                              onDragEnd={(_, info) =>{
                                handleDragEnd(info, article.id)
                                if(masterArchiveArr)
                                masterArchiveArr.push({"title":article.title,'abstract':article.abstract,'img':article.multimedia[0].url,'url':article.url})
                                console.log(masterArchiveArr)
                                localStorage.setItem('archiveItem', JSON.stringify(masterArchiveArr))
                                console.log(localStorage)
                              }
                              }
                              
                               
                            
                              value={article.title}
                              className="relative z-20 bg-secondary-ice flex items-center border-b border-white dark:border-dark-primary-three dark:text-dark-secondary-three dark:bg-dark-primary-one"
                            >
                              <a target="_blank" href={article.url}>
                                <figure className="cover-img">
                                  <img
                                    className="article-img"
                                    src={`${article.multimedia[0].url}`}
                                    alt={article.title + " image"}
                                    loading="lazy"
                                    width="70px"
                                    height="70px"
                                  />
                                </figure>
                              </a>

                              <div className="abstract-text">
                                <h3 className="Card__title">
                                  {truncate(article.title, 20, "...")}
                                </h3>
                                <p className="abstract__time_stamp">
                                  {truncate(article.abstract, 40, "...")}
                                </p>
                              </div>
                            </motion.div>
                            <div className="w-full z-10 top-1/2 right-0 absolute h-[calc(100%-2px)] bg-green-400 flex justify-end items-center -translate-y-1/2">
                              <div className="w-12 h-12 flex justify-center items-center m-10 text-secondary-ice dark:text-black">
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
                                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                  />
                                </svg>
                              </div>
                            </div>
                          </motion.li>
                        ))
                      : null}
                  </motion.ul>
                  {/* </AnimatePresence> */}
                </motion.div>
              )
            );
          })}
          {/* </AnimatePresence> */}
        </motion.main>
        <Footer />
      </div>
    </div>
  );
}
