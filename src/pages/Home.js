import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Socials from "../components/Socials";
import StartButton from "../components/StartButton";

import GetInTouch from "../components/GetInTouch";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container Home">
      {isMobile ? (
        <div className="mobile-home-container">
          <h1>Rose Long</h1>
          <div className="image-container-mobile">
            <div className="hero-image-container"></div>
          </div>
          <h2>Breath - Mind - Body</h2>

          <h3>Step Into</h3>
          <div className="journey-container"></div>
          <StartButton />
        </div>
      ) : (
        <div className="desktop">
          <Socials />
          <GetInTouch link="/contact" />
          <div className="home-header">
            <h1>Rose Long</h1>
            <h3>Breath - Mind - Body</h3>
          </div>
          <div className="hero-image-container" />
          <StartButton />
        </div>
      )}
    </div>
  );
}
