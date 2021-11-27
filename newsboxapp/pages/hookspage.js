import { useState } from "react";

import Toggle from "../components/test.Toggle";

export const getStaticProps = async () => {
  const business = await fetch("https://randomuser.me/api/?results=10");
  const automobile = await fetch("https://randomuser.me/api/?results=10");
  const health = await fetch("https://randomuser.me/api/?results=10");
  const travel = await fetch("https://randomuser.me/api/?results=10");
  const sports = await fetch("https://randomuser.me/api/?results=10");

  return {
    props: {
      business: await business.json(),
      automobile: await automobile.json(),
      health: await health.json(),
      travel: await travel.json(),
      sports: await sports.json(),
    },
  };
};

const masterArr = [];
const HooksPage = ({ business, automobile, health, travel, sports }) => {
  const { results: businessData } = business;
  const { results: automobileData } = automobile;
  const { results: healthData } = health;
  const { results: travelData } = travel;
  const { results: sportsData } = sports;

  const [businessToggled, setBusinessToggled] = useState(false);
  const [automobileToggled, setAutomobileToggled] = useState(false);
  const [healthToggled, setHealthToggled] = useState(false);
  const [travelToggled, setTravelToggled] = useState(false);
  const [sportsToggled, setSportsToggled] = useState(false);

  const [accordionBtnToggleBusiness, setAccordionBtnToggleBusiness] =
  // const [accordionBtnToggle, setAccordionBtnToggle] =
    useState(false);
  const [accordionBtnToggleAutomobile, setAccordionBtnToggleAutomobile] =
    useState(false);
  //   const [isClicked, setIsClicked] = useState(false);
  //   const [isClicked, setIsClicked] = useState(false);
  //   const [isClicked, setIsClicked] = useState(false);
  masterArr.push({ title: "business", businessData });
  masterArr.push({ title: "automobile", automobileData });
  console.log(masterArr);
  return (
    <main>
      <Toggle
        toggleValue="Business"
        isToggled={businessToggled}
        setIsToggled={setBusinessToggled}
      />
      <Toggle
        toggleValue="Automobile"
        isToggled={automobileToggled}
        setIsToggled={setAutomobileToggled}
      />
      <Toggle
        toggleValue="Health"
        isToggled={healthToggled}
        setIsToggled={setHealthToggled}
      />
      <Toggle
        toggleValue="Travel"
        isToggled={travelToggled}
        setIsToggled={setTravelToggled}
      />
      <Toggle
        toggleValue="Sports"
        isToggled={sportsToggled}
        setIsToggled={setSportsToggled}
      />
      {businessToggled && (
        <div className="flex bg-green-400 justify-between">
          <h1>Business</h1>
          <button
            className={`text-black
          ${
            accordionBtnToggleBusiness ? "rotate-90" : "-rotate-90"
          } transition-all`}
            onClick={() =>
              setAccordionBtnToggleBusiness(!accordionBtnToggleBusiness)
            }
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}

      {accordionBtnToggleBusiness
        ? businessToggled &&
          businessData.map((article) => (
            <p key={article.phone}>{article.name.first}</p>
          ))
        : null}

      {automobileToggled && (
        <div className="flex bg-green-400 justify-between">
          <h1>Automobile</h1>
          <button
            className={`text-black relate ${
              accordionBtnToggleAutomobile ? "rotate-90" : "-rotate-90"
            } transition-all`}
            onClick={() =>
              setAccordionBtnToggleAutomobile(!accordionBtnToggleAutomobile)
            }
          >
            <div>
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>
      )}
      {accordionBtnToggleAutomobile
        ? automobileToggled &&
          automobileData.map((article) => (
            <p key={article.phone}>{article.name.last}</p>
          ))
        : null}
      {/* {healthToggled &&
        healthData.map((article) => (
          <p key={article.phone}>{article.name.last}</p>
        ))}
      {travelToggled &&
        travelData.map((article) => (
          <p key={article.phone}>{article.name.last}</p>
        ))}
      {sportsToggled &&
        sportsData.map((article) => (
          <p key={article.phone}>{article.name.last}</p>
        ))} */}
    </main>
  );
};
export default HooksPage;
