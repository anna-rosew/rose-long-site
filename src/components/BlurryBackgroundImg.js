import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/App.css"; // Assuming you have a CSS file for these components

const BlurryBackgroundImg = ({ src, className = "", alt = "", ...props }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <div
      className={`${className} ${loaded ? "loaded" : "blurry"}`}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      role="img"
      aria-label={alt}
      {...props}
    ></div>
  );
};

BlurryBackgroundImg.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default BlurryBackgroundImg;
