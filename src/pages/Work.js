import React from "react";
import { Link } from "react-router-dom";
import "../styles/Work.css";
import "../styles/App.css";
import MyApproach from "../styles/imgs/permanent/my-approach.png";
import Groups from "../styles/imgs/permanent/groups.png";
import OneToOnes from "../styles/imgs/permanent/one-on-one.png";
import OverlaySVG from "../styles/imgs/icons/sunshine_white.svg";

export default function Work() {
  return (
    <div className="Work-Page">
      <div className="intro">
        <h1>Work With Me.</h1>
        <p>
          When you are stuck in unhelpful patterns rooted in the past, it shows
          up in your daily life. The discomfort within you surfaces in different
          ways. You may be emotionally overwhelmed and reactive, you may be
          experiencing restlessness and mental agitation, low energy and
          depression or physical symptoms. All these states indicate it’s time
          for you turn your focus inwards and listen.
        </p>{" "}
        <p>
          <strong>Life is leading you on a journey of self-discovery.</strong>
        </p>
      </div>
      <div className="work-cards">
        <div className="grid grid-3-columns">
          <div className="card">
            <Link to="/approach" className="card-link">
              <h2>My Approach</h2>
              <h3 className="subtitle">YOUR SUBTITLE/DESCRIPTION HERE</h3>
              <div className="image-container">
                <img
                  src={MyApproach}
                  className="img-responsive img-hover"
                  alt="My Approach - art by Lynn Hanford-Day"
                />
                <div className="overlay">
                  <p>
                    The ancients knew the power of the{" "}
                    <strong>mind, body and the breath,</strong> and modern
                    research is proving what the ancients knew.   
                  </p>
                  <img
                    src={OverlaySVG}
                    className="overlay-svg"
                    alt="Overlay SVG"
                  />
                  <p>
                    You have the capacity to{" "}
                    <strong>transform yourself from the inside out.</strong>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="card">
            <Link to="/groups" className="card-link">
              <h2>Groups</h2>
              <h3 className="subtitle">CLASSES | WORKSHOPS | RETREATS</h3>
              <div className="image-container">
                <img
                  src={Groups}
                  className="img-responsive img-hover"
                  alt="Group - art by Lynn Hanford-Day"
                />
                <div className="overlay">
                  <p>
                    The ancients knew the power of the{" "}
                    <strong>mind, body and the breath,</strong> and modern
                    research is proving what the ancients knew.   
                  </p>
                  <img
                    src={OverlaySVG}
                    className="overlay-svg"
                    alt="Overlay SVG"
                  />
                  <p>
                    You have the capacity to{" "}
                    <strong>transform yourself from the inside out.</strong>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="card">
            <Link to="/onetoone" className="card-link">
              <h2>One-To-Ones</h2>
              <h3 className="subtitle">COACHING AND GUIDANCE</h3>
              <div className="image-container">
                <img
                  src={OneToOnes}
                  className="img-responsive img-hover"
                  alt="One-To-Ones - art by Lynn Hanford-Day"
                />
                <div className="overlay">
                  <p>
                    The ancients knew the power of the{" "}
                    <strong>mind, body and the breath,</strong> and modern
                    research is proving what the ancients knew.   
                  </p>
                  <img
                    src={OverlaySVG}
                    className="overlay-svg"
                    alt="Overlay SVG"
                  />
                  <p>
                    You have the capacity to{" "}
                    <strong>transform yourself from the inside out.</strong>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
