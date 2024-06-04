import React from "react";
import { Link } from "react-router-dom";
import "../styles/Work.css";
import "../styles/App.css";
import MyApproach from "../styles/imgs/permanent/my-approach.png";
import Groups from "../styles/imgs/permanent/groups.png"; //replace this image
import OneOnOnes from "../styles/imgs/permanent/one-on-one.png";

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
            <Link to="/approach" className="card-links">
              <h2>My Approach</h2>
              <h3 className="subtitle">YOUR SUBTITLE/DESCRIPTION HERE</h3>
              <img
                src={MyApproach}
                className="img-responsive img-hover"
                alt="My Approach - art by Lynn Hanford-Day"
              />
            </Link>
          </div>
          <div className="groups">
            <Link to="/groups" className="card-links">
              <h2>Groups</h2>
              <h3 className="subtitle">CLASSES | WORKSHOPS | RETREATS</h3>
              <img
                src={Groups}
                className="img-responsive img-hover"
                alt="Group - art by Lynn Hanford-Day"
              />
            </Link>
          </div>
          <div className="one-on-ones">
            <Link to="/onetoone" className="card-links">
              <h2>One-On-Ones</h2>
              <h3 className="subtitle">COACHING AND GUIDANCE</h3>
              <img
                src={OneOnOnes}
                className="img-responsive img-hover"
                alt="One-On-Ones - art by Lynn Hanford-Day"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
