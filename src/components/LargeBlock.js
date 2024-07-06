import React from "react";
import "../styles/Blog.css";

export default function LargeBlock(props) {
  return (
    <div className="large-block">
      <div className="large-blog-header">
        <h3>{props.subtitle}</h3>
        <h2>{props.title}</h2>
      </div>
      <div className="large-blog-content">
        <p>{props.description}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
}
