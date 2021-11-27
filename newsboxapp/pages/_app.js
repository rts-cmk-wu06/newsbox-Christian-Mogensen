import Header from "../components/Header";
import Timeleft from "../components/Timeleft";
import Footer from "../components/Footer";
import "../styles/header.css";
import "../styles/footer.css";

import "../styles/styles.css";
import "../styles/ToggleSwitch.css";
import { LocalStorageContext } from "../components/localStorageContext";
import { useEffect, useState, useMemo } from "react";

function MyApp({ Component, pageProps }) {
  Timeleft();
  const [isToggled, setIsToggled] = useState(false);
  const value = useMemo(()=>({isToggled, setIsToggled}),[isToggled, setIsToggled])

  if (typeof window !== "undefined") {
    useEffect(()=> {
      setIsToggled(JSON.parse(localStorage.getItem('categoryToggle')) || {})
      console.log(isToggled);
  }, [])
  useEffect(()=> {
    localStorage.setItem('categoryToggle', JSON.stringify(isToggled))
}, [isToggled])
}

  return (
    <>
      <div className={`sm:max-w-[420px]`}>
        <Timeleft />
        <LocalStorageContext.Provider value={value}>
        <Component {...pageProps} />
        </LocalStorageContext.Provider>
      </div>
    </>
  );
}

export default MyApp;
