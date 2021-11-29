import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Accordion from "../components/accordion";
import AccordionButton from "../components/AccordionButton";
import ButtonSetting from "../components/ButtonSetting";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { LocalStorageContext } from "../components/localStorageContext";
import Searchbar from "../components/Searchbar";
import SettingModal from "../components/SettingModal";
import ToggleSwitch from "../components/toggleSwitch";
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
}) {
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

  // const [accordionBusiness, setAccordionBusiness] = useState(false);
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
    console.log(filterBusiness);
  }, []);
  masterArray.push({ title: "Business", dataArr: filterBusiness });
  masterArray.push({ title: "Automobile", dataArr: filterAutomobile });
  masterArray.push({ title: "Health", dataArr: filterHealth });
  masterArray.push({ title: "Travel", dataArr: filterTravel });
  masterArray.push({ title: "Sports", dataArr: filterSport });

  const [accordionBtnToggle, setAccordionBtnToggle] = useState({
    business: false,
    automobile: false,
    health: false,
    travel: false,
    sports: false,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay:0.125,
        delayChildren: 0.125,
        staggerChildren: 0.125
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x:0 },
    exit:{x:-20, opacity:0}
  }
const [isAcc, setAcc] = useState(false)
  return (
    <>
      <Header>
        <Link href="/archive" exact>
          <a>
            {/* <button onClick={() => router.back()}> */}
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.125 }}
              className="w-full h-full flex justify-start items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
            </motion.div>
            {/* </button> */}
          </a>
        </Link>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="Section__heading justify-self-center"
        >
          Newsbox
        </motion.h1>
        {/* <ButtonSetting /> */}
        <SettingModal />
      </Header>

      <Searchbar />
      {/* // content loaded from fetch */}
      <motion.div
      >
        <AnimatePresence>
          {masterArray.map((accordion, index) => {
            return (
              isToggled[accordion.title.toLowerCase()] && (
                <motion.div  transition={{ ease: "easeOut", duration: 2 }}>
                  <motion.div className={`contcat flex items-center bg-[color:var(--Secondary-clr-Ice)] h-[60px] border-b`}>
                    <Accordion />
                    <h2 className="Section__heading uppercase">
                      {accordion.title}{" "}
                    </h2>
                    <AccordionButton
                      isToggled={
                        accordionBtnToggle[accordion.title.toLowerCase()]
                      }
                      onClick={() => {
                        setAcc(!isAcc)
                        setAccordionBtnToggle({
                          ...accordionBtnToggle,
                          [accordion.title.toLowerCase()]:
                            !accordionBtnToggle[accordion.title.toLowerCase()],
                        });
                      }}
                    />
                  </motion.div>
                    <AnimatePresence>
                  <motion.ul variants={container}
                animate={isAcc ? "show" : "hidden"}
                initial={'hidden'}
                key={accordion.title} className="flex justify-center flex-col">

                    {accordionBtnToggle[accordion.title.toLowerCase()]
                      ? accordion.dataArr.map((article, index) => (
                          <a key={index} target="_blank" href={article.url}>
                            <motion.li
                              variants={item}
                              
                              className="flex items-center border-b border-[color:var(--btn-clr-border)]"
                            >
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
                              <div>
                                <h2 className="Card__title">
                                  {truncate(article.title, 20, "...")}
                                </h2>
                                <p className="Message__time_stamp">
                                  {truncate(article.abstract, 40, "...")}
                                </p>
                              </div>
                            </motion.li>
                          </a>
                        ))
                      : null}
                  </motion.ul>
                          </AnimatePresence>
                </motion.div>
              )
            );
          })}
        </AnimatePresence>
      </motion.div>
      <Footer />
    </>
  );
}
