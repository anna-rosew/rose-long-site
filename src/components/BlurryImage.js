import React, { useState } from "react";
import "../styles/BlurryImage.css";

const BlurryImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className={`blurry-image-container ${className} ${
        isLoaded ? "loaded" : "loading"
      }`}
    >
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className="blurry-image"
      />
    </div>
  );
};

export default BlurryImage;
