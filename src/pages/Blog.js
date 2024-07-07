import React from "react";
import "../styles/Blog.css";

import BlogBlock from "../components/BlogBlock";

//Large editable cover project
//Make responsive
//Grid below for other content

export default function Blog() {
  const posts = [
    {
      title: "Life Changes with Rose Long",
      subtitle: "MIND OVER MATTER: EPISODE 4",
      className: "post-1",
      description:
        "Explore Rose Long's remarkable journey of profound transformation and alignment with the earth's rhythm on the Mind Over Matter Podcast, where her story serves as a beacon of inspiration for all seeking deeper connection and truth.",
      icon: ["Website", "React.js", "3D", "NPM"],
      link: "https://blender-rookie.netlify.app",
      date: "05/24",
      img: require("../styles/imgs/photos/buddah.png"),
    },
    {
      title: "second post",
      subtitle: "Complete Guide to Learning Blender",
      className: "project-1",
      description: "Blender Rookie Web App",
      icon: ["Website", "React.js", "3D", "NPM"],
      link: "https://blender-rookie.netlify.app",
      date: "Jun 2024",
      image: require("../styles/imgs/photos/buddah.png"),
    },
    {
      title: "Third post",
      subtitle: "Complete Guide to Learning Blender",
      className: "project-1",
      description: "Blender Rookie Web App",
      icon: ["Website", "React.js", "3D", "NPM"],
      link: "https://blender-rookie.netlify.app",
      date: "Jun 2024",
      image: require("../styles/imgs/photos/buddah.png"),
    },
  ];
  return (
    <div className="blog-page">
      <div className="container">
        <h1>Blog</h1>
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
