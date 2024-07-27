import React, { useState } from "react";

const BlurryImage = ({ src, alt, className = "", ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${loaded ? "loaded" : "blurred"}`}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
};

export default BlurryImage;
