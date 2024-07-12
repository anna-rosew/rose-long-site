import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Socials from "../components/Socials";
import StartButton from "../components/StartButton";
import GetInTouch from "../components/GetInTouch";
import BlogBlock from "../components/BlogBlock";

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
      img: require("../styles/imgs/photos/beach-cove.png"),
    },
  ];

  return (
    <div className="container Home">
      {isMobile ? (
        <div className="mobile-home-container">
          <div className="mobile-header">
            <h1>Rose Long</h1>
            <h3>Breath - Mind - Body</h3>
          </div>
          <div className="image-container-mobile">
            <div className="hero-image-container"></div>
          </div>

          <StartButton />

          <div className="journey-container"></div>
          {posts.map((post, index) => (
            <div key={index} className="col-md-6">
              <BlogBlock postInfo={post} />
            </div>
          ))}
        </div>
      ) : (
        <div className="desktop">
          <Socials />
          <GetInTouch link="/contact" />
          <div className="home-header">
            <h1>Rose Long</h1>
            <h3>Breath - Mind - Body</h3>
          </div>
          <div className="hero-image-container" />
          <div className="button-center">
            <StartButton />
          </div>
        </div>
      )}
    </div>
  );
}
