import React from "react";
import "../styles/Header.css";

const Socials = () => {
  return (
    <div className="social-icons-container">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <img src="facebook-icon.png" alt="Facebook" />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <img src="twitter-icon.png" alt="Twitter" />
      </a>
    </div>
  );
};

export default Socials;
