import React from "react";
import "../styles/Blog.css";

export default function BlogBlock({ postInfo }) {
  return (
    <div
      className="blog-block"
      style={{ backgroundImage: `url(${postInfo.img})` }}
    >
      <div className="overlay">
        <div className="block-header">
          <h3>{postInfo.subtitle}</h3>
          <h2>{postInfo.title}</h2>
        </div>
        <div className="block-content">
          <p>{postInfo.description}</p>
          <p>{postInfo.date}</p>
        </div>
      </div>
    </div>
  );
}
