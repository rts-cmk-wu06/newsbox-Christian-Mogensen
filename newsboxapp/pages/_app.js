import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../styles/header.css";
import "../styles/footer.css";

import "../styles/styles.css";
import "../styles/ToggleSwitch.css";
import { LocalStorageContext } from "../Components/LocalStorageContext";
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


if (typeof window !== "undefined") {
const root = window.document.documentElement
let theme;
if (localStorage) {
theme = localStorage.getItem("theme")
root.classList.add(localStorage.theme);
}
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
