import React from "react";
import "../../styles/App.css";
import "../../styles/Article.css";
import BlurryImage from "../../components/BlurryImage";
import FoodImg from "../../styles/imgs/blog/food_blog.png";
import arrow from "../../styles/imgs/icons/arrow-next.svg";

export default function BlogArticleTemp() {
  return (
    <div className="container">
      <div className="blog-article">
        <h3 className="subtitle">
          <strong>ARTICLE: </strong>LONG READ
        </h3>
        <h1>Learning to Make Healthy Choices Around Food</h1>
        <p className="article-summary">
          Explore Rose Long's remarkable journey of profound transformation and
          alignment with the earth's rhythm on the Mind Over Matter Podcast,
          where her story serves as a beacon of inspiration for all seeking
          deeper connection and truth.{" "}
        </p>
        <div className="article-cover-container">
          <BlurryImage
            src={FoodImg}
            className="blog-cover-img"
            alt="Woman doing tree pose outside at sunrise."
          />
          <div className="overlay-row">
            <div style={{ display: "flex" }}>
              <div className="column" style={{ marginRight: "20px" }}>
                <p>Written by</p>
                <p>
                  <strong>Rose Long</strong>
                </p>
              </div>
              <div className="column">
                <p>Published on</p>
                <p>
                  <strong>01 Aug 2024</strong>
                </p>
              </div>
            </div>
            <div className="button-column">
              <button className="general-button">COPY LINK</button>
            </div>
          </div>
        </div>
        <div className="article-intro">
          <div className="contents">
            <h3>CONTENTS:</h3>
            <ul>
              <li className="contents-link">
                <span>
                  <button>Introduction</button>
                  <img src={arrow} alt="arrow" />
                </span>
              </li>
            </ul>
          </div>
          <div className="article-intro-text">
            <h2 className="article-subheading">Introduction</h2>
            <p>
              Awareness is the key - being aware of your thoughts and emotions,
              being aware of your energy levels, how you feel in your body, all
              of this will bring a deeper awareness of your cravings and your
              choices.
            </p>
            <p>
              This relates to what you eat and drink, but also what you take in
              and digest at other levels - what you feed your mind effects your
              emotions (directly through the nervous system and endocrine
              system).  And in a more abstract way, what you feed your soul
              effects how you feel in your own skin (think how different you
              feel walking in nature to sitting at your computer, or scrolling
              on your phone).
            </p>
            <p>
              Health is a relationship with yourself - and like all healthy
              relationships it requires time, and the willingness to listen,
              even when it's uncomfortable.  Get to know yourself, there's a lot
              more going on than meets the eye!
            </p>
          </div>
        </div>
        <div className="main-article">
          <p>
            The breath will carry you through - when in doubt, breathe.  When
            you're struggling, breathe.  When you're craving to eat something
            you know you want to let go of, breathe.  When you're feeling
            difficult emotions, breathe.  When your thoughts are driving you
            crazy, breathe.  When you don't think you have time to do this,
            breathe.  The breath is your greatest ally in life, experience its
            power for yourself.
          </p>
          <p>
            When you feel stuck breathe deeply and ask yourself, 'what small
            steps can I take today?’.
          </p>
        </div>
        <div className="article-section">
          <h2 className="article-subheading">
            The Challenge of Deepening your Self Awareness
          </h2>
        </div>
      </div>
    </div>
  );
}
