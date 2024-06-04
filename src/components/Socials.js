import React from "react";
import "../styles/Header.css";
import InstaIcon from "../styles/imgs/icons/insta_icon.svg";
import VimeoIcon from "../styles/imgs/icons/vimeo_icon.svg";

const Socials = () => {
  return (
    <div className="social-icons-container">
      <a
        href="https://www.instagram.com/lifechangesrose/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <img src={InstaIcon} alt="Instagram" />
      </a>
      <a
        href="https://www.roselong-lifechanges.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <img src={VimeoIcon} alt="Vimeo" />
      </a>
    </div>
  );
};

export default Socials;
