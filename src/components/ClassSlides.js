import React from "react";
import "../styles/ClassSlide.css";
import MorningBreathe from "../styles/imgs/icons/morning-breath.svg";
import { Link } from "react-router-dom";

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
      <div className="class-description">
        <p>
          If you're looking for a fast way to regenerate your body, mind and
          spirit, come and experience the magic of the breath.
        </p>
        <p className="permanent-description">
          You can join this class anywhere in the world on Zoom
        </p>
      </div>
      <div className="class-bottom-grid">
        <div className="details-table">
          <div className="dates-column">
            <h3>Class Dates</h3>
            <ul>
              <li>
                <p>Wed 5th August</p>
              </li>
              <li>
                <p>Wed 5th August</p>
              </li>{" "}
              <li>
                <p>Wed 5th August</p>
              </li>
            </ul>
          </div>
          <div className="time-column">
            <h3>Time</h3>
            <ul>
              <li>
                <p>7-7:30am</p>
              </li>
              <li>
                <p>7-7:30am</p>
              </li>
              <li>
                <p>7-7:30am</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="prices">
          <h3>Prices</h3>
          <div className="price-grid">
            <ul>
              <li>
                <p>Dro-In Price</p>
              </li>
              <li>
                <p>Dro-In Price</p>
              </li>
            </ul>
            <div className="membership">
              <h3>Monthly Membership</h3>
              <p>
                Join all classes and access replays for £50 (from £86). Please
                get-in-touch for more details.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/contact">
        <button className="book-button">BOOK NOW</button>
      </Link>
    </div>
  );
}
