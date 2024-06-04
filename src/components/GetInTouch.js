import React, { useState } from "react";
import defaultSvg from "../styles/imgs/icons/get-in-touch.svg";
import hoverSvg from "../styles/imgs/icons/get-in-touch-hover.svg";
import "../styles/imgs/icons/get-in-touch.svg"; // Import the CSS file

const GetInTouch = ({ link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      className="button-with-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? hoverSvg : defaultSvg} alt="button icon" />
    </a>
  );
};

export default GetInTouch;
