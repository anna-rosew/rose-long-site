import React from "react";
import "../styles/Groups.css";
import "../styles/App.css";
import Online from "../styles/imgs/permanent/online-groups.png";
import InPerson from "../styles/imgs/permanent/in-person-groups.png";
import Retreats from "../styles/imgs/permanent/retreats.png";

export default function Groups() {
  return (
    <div className="Groups-Page">
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
      <div className="groups-cards">
        <div className="grid grid-3-columns">
          <div className="online-groups">
            <h2>Online Groups</h2>
            <h3 className="subtitle">YOGA | COMMUNITY</h3>
            <img
              src={Online}
              class="img-responsive"
              href="/"
              alt="Online Groups - art by Lynn Hanford-Day"
            ></img>
          </div>
          <div className="inperson-groups">
            <h2>In-Person Classes & Groups</h2>
            <h3 className="subtitle">CLASSES | WORKSHOPS | RETREATS</h3>
            <img
              src={InPerson}
              class="img-responsive"
              href="/"
              alt="In-Person Classes & sGroups - art by Lynn Hanford-Day"
            ></img>
          </div>
          <div className="Retreats">
            <h2>Retreats & Workshops</h2>
            <h3 className="subtitle">JOURNEYS | GROWTH | EXPLORATION</h3>
            <img
              src={Retreats}
              class="img-responsive"
              href="/"
              alt="Retreats & Workshops - art by Lynn Hanford-Day"
            ></img>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
