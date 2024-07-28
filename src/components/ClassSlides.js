import React from "react";
import "../styles/ClassSlide.css";
import MorningBreathe from "../styles/imgs/icons/morning-breath.svg";
import { Link } from "react-router-dom";
//import MorningBreathe from "../styles/imgs/icons/morning-breath.svg";

export default function ClassSlides() {
  return (
    <div className="class-slide">
      <div className="class-header">
        <img
          src={MorningBreathe}
          alt="Good Morning Breath"
          className="class-icon"
        />
        <h1>Good Morning Breath</h1>
      </div>
      <p>
        If you're looking for a fast way to regenerate your body, mind and
        spirit, come and experience the magic of the breath.
      </p>
      <p>You can join this class anywhere in the world on Zoom</p>
      <div className="bottom-grid">
        <div className="table">
          <div className="column">
            <h3>Class Dates</h3>
            <p>Wed 5th August</p>
          </div>
          <div className="column">
            <h3>Time</h3>
            <p>7-7:30am GMT</p>
          </div>
        </div>
        <div className="prices">
          <h3>Prices</h3>
          <div className="price-grid">
            <ul>
              <li>Dro-In Price</li>
              <li>Montntly £15</li>
            </ul>
            <div>
              <h3>Monthly Membership</h3>
              <p>
                Join all classes and access replays for £50 (from £86). Please
                get-in-touch for more details.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/book">
        <button>BOOK NOW</button>
      </Link>
    </div>
  );
}
