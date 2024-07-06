import React from "react";
import "../styles/Blog.css";

export default function SmallBlock(props) {
  return (
    <div className="small-block">
      <div className="small-blog-header">
        <h3>{props.subtitle}</h3>
        <h2>{props.title}</h2>
      </div>
      <div className="small-blog-content">
        <p>{props.description}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
}
