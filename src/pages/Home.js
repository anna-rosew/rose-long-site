import React, { useState } from "react";
import "../styles/Home.css";
import HeroImg from "../styles/imgs/permanent/hero-image.jpg";
import HoverImg from "../styles/imgs/permanent/hero-img2.png";
import StartButton from "../components/StartButton";

//Try the same image but black and white

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container Home">
      <h1>Rose Long</h1>
      <div
        className="hero-image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="hero-img"
          src={isHovered ? HoverImg : HeroImg}
          alt="Woman doing child's pose on orange yoga matt holding hands in prayer above her head."
        />
        {isHovered && (
          <div className="button-overlay">
            <StartButton />
          </div>
        )}
      </div>
      <h2>Breath - Mind - Body</h2>
    </div>
  );
}
