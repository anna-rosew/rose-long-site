import React from "react";
import { Link } from "react-router-dom";

import OnlineGroupsSlider from "../components/OnlineGroupsSlider";

import "../styles/App.css";
import "../styles/Groups.css";
import Online from "../styles/imgs/permanent/online-groups.png";
import InPerson from "../styles/imgs/permanent/in-person-groups.png";
import Retreat from "../styles/imgs/permanent/retreats.png";
import Workshop1 from "../styles/imgs/photos/workshop3.png";
import Workshop2 from "../styles/imgs/photos/home-studio3.png";

import Location from "../styles/imgs/icons/location_line.svg";
import Calender from "../styles/imgs/icons/calander_white.svg";
import LocationBlack from "../styles/imgs/icons/location_black.svg";
import CalenderBlack from "../styles/imgs/icons/calender_black.svg";

export default function Groups() {
  const onClick = () => {
    window.location.href = "#onlineGroups";
  };
  const onClick2 = () => {
    window.location.href = "#inPerson";
  };
  const onClick3 = () => {
    window.location.href = "#retreats";
  };

  return (
    <div className="container Groups-Page">
      <div className="intro">
        <h1>Groups.</h1>
      </div>

      <div className="group-cards">
        <div className="grid grid-3-columns">
          <div className="card online-groups">
            <button onClick={onClick} className="card-links">
              <h2>Online Groups</h2>
              <h3 className="subtitle">YOGA | COMMUNITY</h3>
              <div className="group-image-container">
                <img
                  src={Online}
                  className="img-responsive"
                  alt="Online Groups - art by Lynn Hanford-Day"
                />
              </div>
            </button>
          </div>
          <div className="card inperson-groups">
            <button onClick={onClick2} className="card-links">
              <h2>In-Person Sessions</h2>
              <h3 className="subtitle">CLASSES | WORKSHOPS</h3>
              <div className="group-image-container">
                <img
                  src={InPerson}
                  className="img-responsive"
                  alt="In-Person Classes & Groups - art by Lynn Hanford-Day"
                />
              </div>
            </button>
          </div>
          <div className="card retreats">
            <button onClick={onClick3} className="card-links">
              <h2>Retreats</h2>
              <h3 className="subtitle">JOURNEYS | GROWTH | EXPLORATION</h3>
              <div className="group-image-container">
                <img
                  src={Retreat}
                  className="img-responsive"
                  alt="Retreats & Workshops - art by Lynn Hanford-Day"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="online-groups" id="onlineGroups">
        <h2 className="section-heading hr-lines">Online Groups</h2>
        <OnlineGroupsSlider />
      </div>

      <div className="in-person-sessions" id="inPerson">
        <h2 className="section-heading hr-lines">In-Person Sessions</h2>
        <div className="grid grid-2-columns section-spacing">
          <div className="in-person-card">
            <Link to="/workshops" className="card-link">
              <div className="in-person-img-container">
                <img
                  src={Workshop1}
                  className="in-person-image"
                  alt="In-Person Session"
                />
                <div className="in-person-overlay">
                  <h3>Upcoming Workshop:</h3>
                  <h2>Moving Beyond Separation: The Power of The Breath.</h2>
                  <p>
                    This workshop uses movement and breathwork to experience
                    unity through conscious breathing. Followed by a{" "}
                    <strong>shared lunch.</strong>
                  </p>
                  <span>
                    <img src={Location} alt="icon" className="overlay-svg2" />
                    <p>Home Studio, Liverpool. UK</p>
                  </span>
                  <span>
                    <img src={Calender} alt="icon" className="overlay-svg2" />
                    <p>Mon 26 Aug, 10.00 - 12.30 am</p>
                  </span>
                </div>
              </div>
              <div className="in-person-info-mobile">
                <h3>Upcoming Workshop:</h3>
                <h2>Moving Beyond Separation: The Power of The Breath.</h2>
                <p>
                  This workshop uses movement and breathwork to experience unity
                  through conscious breathing. Followed by a{" "}
                  <strong>shared lunch.</strong>
                </p>
                <span>
                  <img
                    src={LocationBlack}
                    alt="icon"
                    className="overlay-svg2"
                  />
                  <p>Home Studio, Liverpool. UK</p>
                </span>
                <span>
                  <img
                    src={CalenderBlack}
                    alt="icon"
                    className="overlay-svg2"
                  />
                  <p>Mon 26 Aug, 10.00 - 12.30 am</p>
                </span>
              </div>
            </Link>
          </div>

          <div className="in-person-card">
            <Link to="/workshops" className="card-link">
              <div className="in-person-img-container">
                <img
                  src={Workshop2}
                  className="in-person-image"
                  alt="In-Person Session"
                />
                <div className="in-person-overlay">
                  <h3>Upcoming Workshop:</h3>
                  <h2>Return to the Heart.</h2>
                  <p>
                    Join us for a morning focused on the heart: a cacao
                    ceremony, heart-centered breathwork, and yoga nidra. All are
                    welcome.
                  </p>
                  <span>
                    <img src={Location} alt="icon" className="overlay-svg2" />
                    <p>Home Studio, Liverpool. UK</p>
                  </span>
                  <span>
                    <img src={Calender} alt="icon" className="overlay-svg2" />
                    <p>Mon 26 August 10.00am - 12.30 pm</p>
                  </span>
                </div>
              </div>
              <div className="in-person-info-mobile">
                <h3>Upcoming Workshop:</h3>
                <h2>Return to the Heart.</h2>
                <p>
                  Join us for a morning focused on the heart: a cacao ceremony,
                  heart-centered breathwork, and yoga nidra. All are welcome.
                </p>
                <span>
                  <img
                    src={LocationBlack}
                    alt="icon"
                    className="overlay-svg2"
                  />
                  <p>Home Studio, Liverpool. UK</p>
                </span>
                <span>
                  <img
                    src={CalenderBlack}
                    alt="icon"
                    className="overlay-svg2"
                  />
                  <p>Mon 26 August 10.00am - 12.30 pm</p>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="retreats" id="retreats">
        <h2 className="section-heading hr-lines">Retreats</h2>
        <p>
          There are currently no retreats planned but be sure to{" "}
          <Link to="/contact" className="word-link">
            <strong>sign-up to the newsletter</strong>
          </Link>{" "}
          to stay posted.
        </p>
      </div>
    </div>
  );
}
