import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/Groups.css";
import Online from "../styles/imgs/permanent/online-groups.png";
import InPerson from "../styles/imgs/permanent/in-person-groups.png";
import Retreats from "../styles/imgs/permanent/retreats.png";

export default function Groups() {
  return (
    <div className="Groups-Page">
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
    </div>
  );
}
