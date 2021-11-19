import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ButtonSetting from "../components/ButtonSetting";
import Footer from "../components/Footer";
import Header from "../components/Header";
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

  const emptyArr = [];
  const filterArrBusiness = [];
  const urlLinkArr = [];

  const [filterBusiness, setFilterBusiness] = useState([]);
  const [filterAutomobile, setFilterAutomobile] = useState([]);
  const [filterHealth, setFilterHealth] = useState([]);
  const [filterTravel, setFilterTravel] = useState([]);
  const [filterSport, setFilterSport] = useState([]);
  useEffect(() => {
    setFilterBusiness(business.filter((item) => item.multimedia));
    setFilterAutomobile(automobile.filter((item) => item.multimedia));
    setFilterHealth(health.filter((item) => item.multimedia));
    setFilterTravel(travel.filter((item) => item.multimedia));
    setFilterSport(sport.filter((item) => item.multimedia));
    console.log(filterBusiness);
    console.log(filterAutomobile);
    console.log(filterHealth);
    console.log(filterTravel);
    console.log(filterSport);
  }, []);
  // business.results.forEach((corr) => {
  //   if (corr.section === "business" && corr.multimedia) {
  //     filterArrBusiness.push(corr);
  //     console.log(corr);
  //   }
  // });

  const truncate = (str, max, suffix) =>
    str.length < max
    ? str
      : `${str.substr(
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

        {/* // content loaded from fetch */}
        <div
          className={`contcat flex items-center bg-[color:var(--Secondary-clr-Ice)] h-[60px] border-b`}
        >
          <div className="ml-4 mr-3 h-10 w-10 flex justify-center items-center bg-white shadow-lg rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18.914}
              height={18.914}
            >
              <defs>
                <clipPath id="prefix__a">
                  <path fill="none" d="M0 0h18.914v18.914H0z" />
                </clipPath>
              </defs>
              <g
                data-name="Group 65"
                fill="none"
                stroke="#d97d54"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={2}
                clipPath="url(#prefix__a)"
              >
                <path
                  data-name="Rectangle 102"
                  d="M.707 9.243L9.669.701l8.542 8.963-8.962 8.541z"
                  strokeWidth={2.00028}
                />
                <path
                  data-name="Path 106"
                  d="M1.182 8.9a7.685 7.685 0 004.984-.85c1.4-.8 2.525-2.3 5.383-1.65a2.6 2.6 0 00-1.263 1.1c-.465 1.05 1.13 1.5 2.193 1.6A39.289 39.289 0 0017.33 9"
                />
              </g>
            </svg>
          </div>
          <h2 className="Section__heading">{articles.section}</h2>

          <div className="ml-auto mr-4 flex w-10 h-10 scale-100 rounded-full items-center justify-center active:bg-gray-200 active:transition active:scale-150">
            <button>
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex  justify-center flex-col">
          {filterBusiness.map((article) => (
            <a
              key={article.title + article.url}
              target="_blank"
              href={article.url}
            >
              {/* {console.log(article.multimedia[0].url)} */}{" "}
              <div className="flex items-center border-b border-[color:var(--btn-clr-border)]">
                <div className="cover-img">
                  <img
                    className="article-img"
                    src={`${article.multimedia[0].url}`}
                    alt={article.title + " image"}
                  />
                </div>
                <div>
                  <h2 className="Card__title">
                    {truncate(article.title, 20, "...")}
                  </h2>
                  <p className="Message__time_stamp">
                    {truncate(article.abstract, 40, "...")}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <Footer />
      </>
  );
}
