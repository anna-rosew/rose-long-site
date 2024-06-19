import React from "react";
import "../styles/CreditsFooter.css";

export default function CreditsFooter() {
  return (
    <div className="CreditsFooter">
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
  );
}
