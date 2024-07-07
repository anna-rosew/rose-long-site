import React from "react";
import "../styles/Blog.css";
import video from "../styles/imgs/icons/video-icon.svg";
import BlogBlock from "../components/BlogBlock";

//Make responsive

export default function Blog() {
  const posts = [
    {
      title: "Yoga (with Rose Long)",
      subtitle: "RISE: EPISODE 30",
      className: "post-1",
      description:
        "Hosted by Elizabeth Vaughan and Julia Carson - a psychologist and a therapist who walked out of a bar and became good mates in sobriety.",
      icon: require("../styles/imgs/icons/podcast.png"),
      postType: "Podcast",
      link: "https://blender-rookie.netlify.app",
      date: "05/24",
      img: require("../styles/imgs/photos/buddah.png"),
    },
  ];

  return (
    <div className="blog-page">
      <div className="container">
        <h1 className="blog-heading">Blog</h1>
        <div className="cover-post">
          <div className="cover-content">
            <img src={video} className="blog-type-icon" alt="Youtube Video" />
            <h3>MIND OVER MATTER: EPISODE 4</h3>
            <h1>Life Changes with Rose Long.</h1>
            <h3 className="date">05/24</h3>
            <div className="bottom-grid">
              <button
                className="action-button "
                href="https://www.youtube.com/watch?v=QdZIW0etTkA"
              >
                LISTEN
              </button>
              <p>
                Explore Rose Long's remarkable journey of profound
                transformation and alignment with the earth's rhythm on the Mind
                Over Matter Podcast, where her story serves as a beacon of
                inspiration for all seeking deeper connection and truth.
              </p>
            </div>
          </div>
        </div>
        <div className="grid blog-grid">
          {posts.map((post, index) => (
            <div key={index} className="col-md-6">
              <BlogBlock postInfo={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
