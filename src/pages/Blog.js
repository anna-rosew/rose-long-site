import React from "react";
import "../styles/Blog.css";
import mindOverMatter from "../styles/imgs/photos/maze.png";

export default function Blog() {
  return (
    <div className="Blog">
      <div className="container">
        <h1>Blog</h1>
        <div className="blog-container-grid grid">
          <div className="blog-block">
            <img
              src={mindOverMatter}
              alt="Mind Over Matter Podcast: Episode 4"
            ></img>
          </div>
          <div className="side-block grid grid-horizontal">
            <div className="blog-block">
              <img
                src={mindOverMatter}
                alt="Mind Over Matter Podcast: Episode 4"
              ></img>
            </div>
            <div className="blog-block">
              <img
                src={mindOverMatter}
                alt="Mind Over Matter Podcast: Episode 4"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
