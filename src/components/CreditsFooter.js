import React from "react";
import "../styles/CreditsFooter.css";
import Logo from "../styles/imgs/icons/logo_white.svg";

export default function CreditsFooter() {
  return (
    <div className="CreditsFooter">
      <div className="logo">
        <div className="logo">
          <a href="/" className="site-logo">
            <img src={Logo} alt="Rose Long Logo" className="site-logo" />
          </a>
        </div>
      </div>
      <div className="credits">
        <p>
          Website built by{" "}
          <a
            href="https://www.sacredintuitiveart.com/about"
            alt="Anna-Rose Wain | Front-end Developer"
          >
            {" "}
            Anna-Rose Wain{" "}
          </a>{" "}
          | Artwork by{" "}
          <a
            href="https://www.sacredintuitiveart.com/about"
            alt="Sacred Intuitive Art"
          >
            Lynn Hanford Day - Sacred Intuitive Art
          </a>
        </p>
      </div>
      <div className="all-pages"></div>
    </div>
  );
}
