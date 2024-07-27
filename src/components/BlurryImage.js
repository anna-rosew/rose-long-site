import React, { useState, useEffect } from "react";
import "../styles/App.css";

const BlurryImage = ({ src, className, children, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  return (
    <div
      className={`blurry-background ${isLoaded ? "loaded" : ""} ${className}`}
      style={{ backgroundImage: `url(${src})` }}
      {...props}
    >
      {children}
    </div>
  );
};

export default BlurryImage;
