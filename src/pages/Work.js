import React from "react";
import "../styles/App.css";
import "../styles/Work.css";
import "../styles/imgs/"

export default function Work() {
  return (
    <div className="Work-Page">
      <div className="intro">
        <h1>Work With Me.</h1>
        <p>
          When you are are stuck in unhelpful patterns rooted in the past, it
          shows up in your daily life.   The discomfort within you surfaces in
          different ways.  You may be emotionally overwhelmed and reactive, you
          may be experiencing restlessness and mental agitation, low energy and
          depression or physical symptoms.  All these states indicate it’s time
          for you turn your focus inwards and listen.
        </p>{" "}
        <p>
          <strong>Life is leading you on a journey of self discovery.</strong>
        </p>
      </div>
      <div className="work-cards">
        <div className="grid grid-3-columns">
          <div className="my-approach">
            <h2>My Approach</h2>
            <h3 className="subtitle">YOUR SUBTITLE/DESCRIPTION HERE</h3>
            <img
              src={MyApproach}
              href="/Approach"
              alt="My Approach - art by Lynn Hanford-Day"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
