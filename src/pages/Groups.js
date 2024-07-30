import React from "react";
import { Link } from "react-router-dom";

import OnlineGroups from "../components/OnlineGroups";

import "../styles/App.css";
import "../styles/Groups.css";
import Online from "../styles/imgs/permanent/online-groups.png";
import InPerson from "../styles/imgs/permanent/in-person-groups.png";
import Retreat from "../styles/imgs/permanent/retreats.png";
import Retreats from "../styles/imgs/photos/retreat1.png";
import MorningBreathe from "../styles/imgs/icons/morning-breath.svg";
import EveningChill from "../styles/imgs/icons/evening-chill.svg";
import Lunar from "../styles/imgs/icons/lunar.svg";
import Kundalini from "../styles/imgs/icons/kundalini.svg";
import OverlaySVG from "../styles/imgs/icons/sunshine_white.svg";
import Workshop from "../styles/imgs/photos/groups.png";
import Location from "../styles/imgs/icons/location_line.svg";
import Calender from "../styles/imgs/icons/calander_white.svg";

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
            <OnlineGroups />
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

        <div className="grid grid-4-columns section-spacing">
          <div className="yoga-class">
            <h2>Morning Breath</h2>

            <img
              src={MorningBreathe}
              className="yoga-image"
              alt="Morning Breath"
            />

            <p className="class-details">
              WHEN: 7.15-7.45am GMT Every Weds Morning
            </p>
            <p className="class-details">
              PRICE: Drop-In - £7 / Monthly Morning Bundle
            </p>
            <Link to="/contact" className="card-links">
              <button className="journey-link button-hover book-btn">
                Book
              </button>
            </Link>
          </div>
          <div className="yoga-class">
            <h2>Evening Chill-Out</h2>
            <img
              src={EveningChill}
              className="yoga-image"
              alt="Evening Chill-Out"
            />

            <p className="class-details">
              WHEN: 8.00-9.00pm GMT Every Thurs Evening
            </p>
            <p className="class-details">
              PRICE: Drop-In - £10 / Monthly Evening Bundle
            </p>
            <Link to="/contact" className="card-links">
              <button className="journey-link button-hover book-btn">
                Book
              </button>
            </Link>
          </div>
          <div className="yoga-class">
            <h2>Lunar Cycle</h2>
            <img src={Lunar} className="yoga-image " alt="Lunar Cycle" />

            <p className="class-details">WHEN: Evening Every Full-Moon</p>
            <p className="class-details">
              PRICE: Drop-In - £12 / Monthly Lunar Bundle
            </p>
            <Link to="/contact" className="card-links">
              <button className="journey-link button-hover book-btn-two">
                Book
              </button>
            </Link>
          </div>
          <div className="yoga-class">
            <h2>Kundalini Magic</h2>
            <img src={Kundalini} className="yoga-image" alt="Kundalini Magic" />

            <p className="class-details">Two Saturdays each month</p>
            <p className="class-details">
              PRICE: Drop-In - £10 / Monthly Kundalini Bundle
            </p>
            <Link to="/contact" className="card-links">
              <button className="journey-link button-hover book-btn-two">
                Book
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="retreats" id="inPerson">
        <h2 className="section-heading hr-lines">In-Person Sessions</h2>
        <div className="grid grid-2-columns section-spacing">
          <div className="retreat-card">
            <Link to="/workshops" className="card-link">
              <div className="retreat-img-container">
                <img src={Retreats} className="retreat-image" alt="Retreat" />
                <div className="retreat-overlay">
                  <img src={OverlaySVG} alt="icon" className="overlay-svg" />
                  <h3>Upcoming Workshop:</h3>
                  <h2>My Heart is For The Whole</h2>
                  <p>
                    Immerse yourself in a weekend of yoga and breath work,
                    rediscovering wholeness within.
                  </p>
                  <span>
                    <img src={Location} alt="icon" className="overlay-svg2" />
                    <p>Patrick Brompton Hall, Yorkshire Dales, UK</p>
                  </span>
                  <span>
                    <img src={Calender} alt="icon" className="overlay-svg2" />
                    <p>1st - 7th May 2024</p>
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="retreat-card">
            <Link to="/workshops" className="card-link">
              <div className="retreat-img-container">
                <img src={Workshop} className="retreat-image" alt="Retreat" />
                <div className="retreat-overlay">
                  <img src={OverlaySVG} alt="icon" className="overlay-svg" />
                  <h3>Upcoming Workshop:</h3>
                  <h2>My Heart is For The Whole</h2>
                  <p>
                    Immerse yourself in a weekend of yoga and breath work,
                    rediscovering wholeness within.
                  </p>
                  <span>
                    <img src={Location} alt="icon" className="overlay-svg2" />
                    <p>Patrick Brompton Hall, Yorkshire Dales, UK</p>
                  </span>
                  <span>
                    <img src={Calender} alt="icon" className="overlay-svg2" />
                    <p>1st - 7th May 2024</p>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="retreats" id="retreats">
        <h2 className="section-heading hr-lines">Retreats</h2>
        <div className="grid grid-2-columns section-spacing">
          <div className="retreat-card">
            <Link to="/retreats" className="card-link">
              <div className="retreat-img-container">
                <img src={Retreats} className="retreat-image" alt="Retreat" />
                <div className="retreat-overlay">
                  <img src={OverlaySVG} alt="icon" className="overlay-svg" />
                  <h3>Upcoming Retreat:</h3>
                  <h2>My Heart is For The Whole</h2>
                  <p>
                    Immerse yourself in a weekend of yoga and breath work,
                    rediscovering wholeness within.
                  </p>
                  <span>
                    <img src={Location} alt="icon" className="overlay-svg2" />
                    <p>Patrick Brompton Hall, Yorkshire Dales, UK</p>
                  </span>
                  <span>
                    <img src={Calender} alt="icon" className="overlay-svg2" />
                    <p>1st - 7th May 2024</p>
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="retreat-card">
            <Link to="/retreats" className="card-link">
              <div className="retreat-img-container">
                <img src={Workshop} className="retreat-image" alt="Retreat" />
                <div className="retreat-overlay">
                  <img src={OverlaySVG} alt="icon" className="overlay-svg" />
                  <h3>Upcoming Retreat:</h3>
                  <h2>My Heart is For The Whole</h2>
                  <p>
                    Immerse yourself in a weekend of yoga and breath work,
                    rediscovering wholeness within.
                  </p>
                  <span>
                    <img src={Location} alt="icon" className="overlay-svg2" />
                    <p>Patrick Brompton Hall, Yorkshire Dales, UK</p>
                  </span>
                  <span>
                    <img src={Calender} alt="icon" className="overlay-svg2" />
                    <p>1st - 7th May 2024</p>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
