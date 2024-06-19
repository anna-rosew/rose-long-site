import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/Groups.css";
import Online from "../styles/imgs/permanent/online-groups.png";
import InPerson from "../styles/imgs/permanent/in-person-groups.png";
import Retreat from "../styles/imgs/permanent/retreats.png";
import Retreats from "../styles/imgs/photos/retreat1.png";
import MorningBreathe from "../styles/imgs/permanent/morning-breathe.png";
import EveningChill from "../styles/imgs/permanent/evening-chillout.png";
import Lunar from "../styles/imgs/permanent/lunar-cycles.png";
import Kundalini from "../styles/imgs/permanent/kundali-magic.png";
import OverlaySVG from "../styles/imgs/icons/sunshine.svg";

import Workshop from "../styles/imgs/photos/groups.png";
import Location from "../styles/imgs/icons/location.svg";
import Calender from "../styles/imgs/icons/calender.svg";

export default function Groups() {
  return (
    <div className="container Groups-Page">
      <div className="intro">
        <h1>Groups.</h1>
      </div>
      <div className="group-cards">
        <div className="grid grid-3-columns">
          <div className="card online-groups">
            <Link to="/groups" className="card-links">
              <h2>Online Groups</h2>
              <h3 className="subtitle">YOGA | COMMUNITY</h3>
              <div className="group-image-container">
                <img
                  src={Online}
                  className="img-responsive"
                  alt="Online Groups - art by Lynn Hanford-Day"
                />
              </div>
            </Link>
          </div>
          <div className="card inperson-groups">
            <Link to="/groups" className="card-links">
              <h2>In-Person Classes & Groups</h2>
              <h3 className="subtitle">CLASSES | WORKSHOPS | RETREATS</h3>
              <div className="group-image-container">
                <img
                  src={InPerson}
                  className="img-responsive"
                  alt="In-Person Classes & Groups - art by Lynn Hanford-Day"
                />
              </div>
            </Link>
          </div>
          <div className="card retreats">
            <Link to="/groups" className="card-links">
              <h2>Retreats & Workshops</h2>
              <h3 className="subtitle">JOURNEYS | GROWTH | EXPLORATION</h3>
              <div className="group-image-container">
                <img
                  src={Retreat}
                  className="img-responsive"
                  alt="Retreats & Workshops - art by Lynn Hanford-Day"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="online-groups">
        <h2 className="section-heading">Online Groups:</h2>
        <div className="grid grid-4-columns">
          <div className="yoga-class">
            <Link to="/approach" className="card-link">
              <div className="yoga-image-container">
                <img
                  src={MorningBreathe}
                  className="yoga-image"
                  alt="My Approach - art by Lynn Hanford-Day"
                />
                <div className="overlay">
                  <p>
                    Deeply detoxifying, revitalising and balancing, the practice
                    of Pranayama has deep and lasting benefits.
                    <img
                      src={OverlaySVG}
                      alt="sunshine-icon"
                      className="overlay-svg"
                    ></img>
                  </p>
                </div>
              </div>
              <h2>Morning Breathe</h2>
              <p className="class-details">
                WHEN: 7.15-7.45am GMT Every Weds Morning
              </p>
              <p className="class-details">
                PRICE: Drop-In - £7 / Monthly Morning Bundle
              </p>
            </Link>
          </div>
          <div className="yoga-class">
            <Link to="/approach" className="card-link">
              <div className="yoga-image-container">
                <img
                  src={EveningChill}
                  className="yoga-image"
                  alt="Evening Chill-Out"
                />
                <div className="overlay">
                  <p>
                    Take an hour to unwind and relax, a deeply restorative way
                    to care for your health in these stressful times.
                    <img
                      src={OverlaySVG}
                      alt="sunshine-icon"
                      className="overlay-svg"
                    ></img>
                  </p>
                </div>
              </div>
              <h2>Evening Chill-Out</h2>
              <p className="class-details">
                WHEN: 8.00-9.00pm GMT Every Thurs Evening
              </p>
              <p className="class-details">
                PRICE: Drop-In - £10 / Monthly Evening Bundle
              </p>
            </Link>
          </div>
          <div className="yoga-class">
            <Link to="/approach" className="card-link">
              <div className="yoga-image-container">
                <img src={Lunar} className="yoga-image " alt="Lunar Cycle" />
                <div className="overlay">
                  <p>
                    With each New Moon, we set intentions; during the Full Moon,
                    we reflect and prepare for new possibilities as it rises
                    again.
                    <img
                      src={OverlaySVG}
                      alt="sunshine-icon"
                      className="overlay-svg"
                    ></img>
                  </p>
                </div>
              </div>
              <h2>Lunar Cycle</h2>
              <p className="class-details">WHEN: Evening Every Full-Moon</p>
              <p className="class-details">
                PRICE: Drop-In - £12 / Monthly Lunar Bundle
              </p>
            </Link>
          </div>
          <div className="yoga-class">
            <Link to="/approach" className="card-link">
              <div className="yoga-image-container">
                <img
                  src={Kundalini}
                  className="yoga-image"
                  alt="Kundalini Magic"
                />
                <div className="overlay">
                  <p>
                    These 90-minute classes blend movement, breath, and sound
                    for an intense workout and expanded awareness. Kundalini
                    Yoga offers a rapid path to altered states of
                    consciousness—without substances!
                    <img
                      src={OverlaySVG}
                      alt="sunshine-icon"
                      className="overlay-svg"
                    ></img>
                  </p>
                </div>
              </div>
              <h2>Kundalini Magic</h2>
              <p className="class-details">Two Saturdays each month</p>
              <p className="class-details">
                PRICE: Drop-In - £10 / Monthly Kundalini Bundle
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="retreats">
        <div className="grid grid-2-columns">
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
