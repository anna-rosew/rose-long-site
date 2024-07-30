import React from "react";
import "../styles/Blog.css";
import arrowIcon from "../styles/imgs/icons/blog-arrow.svg";

export default function BlogBlock({ postInfo }) {
  return (
    <a href={postInfo.link} target="_blank" rel="noopener noreferrer">
      <div
        className={`${postInfo.className} blog-block`}
        style={{ backgroundImage: `url(${postInfo.img})` }}
      >
        <div className="overlay">
          <img
            src={postInfo.icon}
            className="blog-type-icon-block"
            alt={postInfo.postType}
          />
          <div className="block-header">
            <h3>{postInfo.subtitle}</h3>
            <h2>{postInfo.title}</h2>
          </div>
          <div className="block-content">
            <p className="description">{postInfo.description}</p>
            <h3 className="date">{postInfo.date}</h3>
          </div>
          <a
            className="blog-arrow-link"
            href={postInfo.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={arrowIcon} className="blog-arrow-icon" alt="Arrow" />
          </a>
        </div>
      </div>
    </a>
  );
}
