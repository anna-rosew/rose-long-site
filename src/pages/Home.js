import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import StartButton from "../components/StartButton";

import GetInTouch from "../components/GetInTouch";
//import Courage from "../styles/imgs/icons/courage.svg";
//import Clarity from "../styles/imgs/icons/clarity.svg";
//import Presence from "../styles/imgs/icons/presence.svg";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
    };

    handleResize(); // Check the screen width on initial load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container Home">
      {isMobile ? (
        <div className="mobile-home-container">
          {/* Add your mobile-specific content here */}
          <h1>Rose Long</h1>
          <div className="hero-image-container"></div>
          <h2>Breath - Mind - Body</h2>

          <h3>Step Into</h3>
          <div className="journey-container"></div>
          <StartButton />
        </div>
      ) : (
        <div className="desktop">
          <GetInTouch link="/contact" />
          <h1>Rose Long</h1>
          <div className="hero-image-container">
            <div className="button-overlay">
              <StartButton />
            </div>
          </div>
          <h2>Breath - Mind - Body</h2>
        </div>
      )}
    </div>
  );
}

// <div className="journey-container courage">
// <img src={Courage} alt="Courage"></img>
//</div>
//<div className="journey-container clarity">
//<img src={Clarity} alt="Clarity"></img>
//</div>
//<div className="journey-container presence">
//<img src={Presence} alt="Presence"></img>
//</div>
