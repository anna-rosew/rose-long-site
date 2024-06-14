import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/Groups.css";
import Online from "../styles/imgs/permanent/online-groups.png";
import InPerson from "../styles/imgs/permanent/in-person-groups.png";
import Retreats from "../styles/imgs/permanent/retreats.png";
import MorningBreathe from "../styles/imgs/permanent/morning-breathe.png";

export default function Groups() {
  return (
    <div className="container Groups-Page">
      <div className="intro">
        <h1>Groups.</h1>
      </div>
      <div className="grid grid-3-columns">
        <div className="online-groups">
          <Link to="/groups" className="card-links">
            <h2>Online Groups</h2>
            <h3 className="subtitle">YOGA | COMMUNITY</h3>
            <img
              src={Online}
              className="img-responsive img-hover"
              alt="Online Groups - art by Lynn Hanford-Day"
            />
          </Link>
        </div>
        <div className="inperson-groups">
          <Link to="/groups" className="card-links">
            <h2>In-Person Classes & Groups</h2>
            <h3 className="subtitle">CLASSES | WORKSHOPS | RETREATS</h3>
            <img
              src={InPerson}
              className="img-responsive img-hover"
              alt="In-Person Classes & Groups - art by Lynn Hanford-Day"
            />
          </Link>
        </div>
        <div className="retreats">
          <Link to="/groups" className="card-links">
            <h2>Retreats & Workshops</h2>
            <h3 className="subtitle">JOURNEYS | GROWTH | EXPLORATION</h3>
            <img
              src={Retreats}
              className="img-responsive img-hover"
              alt="Retreats & Workshops - art by Lynn Hanford-Day"
            />
          </Link>
        </div>
      </div>
      <div className="online-groups">
        <h2>Online Groups</h2>
        <div className="grid grid-4-columns">
          <div className="yoga-class">
            <Link to="/approach" className="card-link">
              <div className="yoga-image-container">
                <img
                  src={MorningBreathe}
                  className="yoga-image"
                  alt="My Approach - art by Lynn Hanford-Day"
                />
              </div>
              <h2>Morning Breathe</h2>
              <p className="class-details">
                WHEN: Every Wednesday at 7.15-7.45am
              </p>
              <p className="class-details">
                PRICE: Drop-In - £7 / Monthly Morning Bundle
              </p>
            </Link>
            <img src={MorningBreathe} alt="Good Morning Breathe"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
