import React from "react";
import "../styles/Home.css";
import HeroImg from "../styles/imgs/permanent/hero-image.jpg";

export default function Home() {
  return (
    <div className="Home">
      <h1>Rose Long</h1>
      <div className="hero-image">
        <img
          className="hero-img"
          src={HeroImg}
          alt="Woman doing child's pose on orange yoga matt holding hands in prayer above her head."
        />
      </div>
      <h2>Breath - Mind - Body</h2>
    </div>
  );
}
