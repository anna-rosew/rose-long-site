import React from "react";
import "../styles/Blog.css";

export default function BlogBlock({ postInfo }) {
  return (
    <div
      className="large-block"
      style={{ backgroundImage: `url(${postInfo.img})` }}
    >
      <div className="overlay">
        <div className="large-blog-header">
          <h3>{postInfo.subtitle}</h3>
          <h2>{postInfo.title}</h2>
        </div>
        <div className="large-blog-content">
          <p>{postInfo.description}</p>
          <p>{postInfo.date}</p>
        </div>
      </div>
    </div>
  );
}
