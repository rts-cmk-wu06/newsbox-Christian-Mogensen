// import Header from "../components/Header";
import Timeleft from "../components/Timeleft";
import Footer from "../components/Footer";
import "../styles/header.css";
import "../styles/footer.css";

import "../styles/styles.css";
import "../styles/ToggleSwitch.css";

function MyApp({ Component, pageProps }) {
  Timeleft();

  return (
    <>
      <div className="sm:max-w-md">
        <Timeleft />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
