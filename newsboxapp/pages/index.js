import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Accordion from "../components/accordion";
import AccordionButton from "../components/AccordionButton";
import ButtonSetting from "../components/ButtonSetting";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
  props,
  isSetting,
}) {
  const business = dataBusiness.results
  const automobile = dataAutomobile.results
  const health = dataHealth.results
  const travel = dataTravel.results
  const sport  = dataSport.results
  const masterArray = []

  const [filterBusiness, setFilterBusiness] = useState([]);
  const [filterAutomobile, setFilterAutomobile] = useState([]);
  const [filterHealth, setFilterHealth] = useState([]);
  const [filterTravel, setFilterTravel] = useState([]);
  const [filterSport, setFilterSport] = useState([]);
  useEffect(() => {
    setFilterBusiness(business.filter((item) => item.section == 'business'));
    setFilterAutomobile(automobile.filter((item) => item.section == 'automobiles'));
    setFilterHealth(health.filter((item) => item.section == 'health'));
    setFilterTravel(travel.filter((item) => item.section == 'travel'));
    setFilterSport(sport.filter((item) => item.section == 'sports'));
  }, []);
  masterArray.push({title:"business", dataArr:filterBusiness})
  masterArray.push({title:"automobile", dataArr:filterAutomobile})
  masterArray.push({title:"health", dataArr:filterHealth})
  masterArray.push({title:"travel", dataArr:filterTravel})
  masterArray.push({title:"sport", dataArr:filterSport})
console.log(masterArray[0].dataArr);
  // const articleItems = masterArray.dataArr
  // console.log(articleItems)
  const truncate = (str, max, suffix) =>
  str.length < max ? str : `${str.substr(
    0,
    str.substr(0, max - suffix.length).lastIndexOf(" ")
    )}${suffix}`;
    
    const router = useRouter();
    
    return (
      
      <>
        {/* // Header -> need to look into how to change props dynamically */}
        <Header>
          <Link href="/archive" exact>
            <a>
              {/* <button onClick={() => router.back()}> */}
              <div className="w-full h-full flex justify-start items-center">
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
              </div>
              {/* </button> */}
            </a>
          </Link>
          <h1 className="Section__heading justify-self-center">Newsbox</h1>
          {/* <ButtonSetting /> */}
          <SettingModal />
        </Header>

        <Searchbar />
        {/* // content loaded from fetch */}
        <div>
        {masterArray.map((accordion) => (
        <>
            <div key={accordion.title}
              className={`contcat flex items-center bg-[color:var(--Secondary-clr-Ice)] h-[60px] border-b`}
            >
              <Accordion />
              <h2 className="Section__heading uppercase">{accordion.title}</h2>
              <AccordionButton />

            </div><div className="flex  justify-center flex-col">

              {accordion.dataArr.map((article) => (
                <a
                  key={article.title + article.url}
                  target="_blank"
                  href={article.url}
                >
                  {/* {console.log(article.multimedia[0].url)}{" "} */}
                  <article className="flex items-center border-b border-[color:var(--btn-clr-border)]">
                    <figure className="cover-img">
                      <img
                        className="article-img"
                        src={`${article.multimedia[0].url}`}
                        alt={article.title + " image"} />
                    </figure>
                    <div>
                      <h2 className="Card__title">
                        {truncate(article.title,20,'...')}
                      </h2>
                      <p className="Message__time_stamp">
                        {truncate(article.abstract,40,'...')}
                      </p>
                    </div>
                  </article>
                </a>
              ))}
            </div>
            </>
        ))}
        </div>
        <Footer />
      </>
  );

}
