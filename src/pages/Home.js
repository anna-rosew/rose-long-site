import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/Home.css";
//import Socials from "../components/Socials";
//import GetInTouch from "../components/GetInTouch";
import BlogBlock from "../components/BlogBlock";
import BlurryBackgroundImage from "../components/BlurryBackgroundImg";
import "../styles/Blog.css";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const posts = [
    {
      title: "Yoga (with Rose Long)",
      subtitle: "RISE: EPISODE 30",
      className: "post-1",
      description:
        "Hosted by Elizabeth Vaughan and Julia Carson - a psychologist and a therapist who walked out of a bar and became good mates in sobriety.",
      icon: require("../styles/imgs/icons/podcast.png"),
      postType: "Podcast",
      link: "https://podcasts.apple.com/gb/podcast/episode-30-yoga-with-rose-long/id1654177454?i=1000654109809",
      date: "05/24",
      img: require("../styles/imgs/photos/woman-beach.png"),
    },
  ];

  const heroImageSrc = require("../styles/imgs/permanent/maze-hero.png");
  const heroImageOverlaySrc = require("../styles/imgs/permanent/hero-image-overlay.png");

  return (
    <div className="container Home">
      {isMobile ? (
        <div className="mobile-home-container">
          <div className="mobile-header">
            <h3>Breath - Mind - Body</h3>
          </div>

          <div className="image-container-mobile">
            <BlurryBackgroundImage
              src={heroImageSrc}
              overlaySrc={heroImageOverlaySrc}
              className="hero-image-container"
            />
          </div>
          <Link to="/work">
            <button className="general-button">Start Your Journey</button>
          </Link>
          <div className="journey-container"></div>
          <div className="blog-home">
            {posts.map((post, index) => (
              <div key={index} className="col-md-6">
                <BlogBlock postInfo={post} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="desktop">
          <div className="home-header">
            <h3>Breath - Mind - Body</h3>
          </div>
          <BlurryBackgroundImage
            src={heroImageSrc}
            overlaySrc={heroImageOverlaySrc}
            className="hero-image-container"
          />
          <div className="button-center">
            <Link to="/work">
              <button className="general-button">Start Your Journey</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// <Socials /> <GetInTouch link="/contact" />
