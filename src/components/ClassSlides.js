import React from "react";
import { Link } from "react-router-dom";
import "../styles/ClassSlide.css";

export default function ClassSlides({
  icon,
  classType,
  description,
  permanentDescription,
  dates = [],
  times = [],
  dropInPrice,
  monthlyPrice,
}) {
  console.log("Props:", {
    icon,
    classType,
    description,
    permanentDescription,
    dates,
    times,
    dropInPrice,
    monthlyPrice,
  });

  return (
    <div className="class-slide">
      <div className="class-header">
        <img src={icon} alt={classType} className="class-icon" />
        <h1>{classType}</h1>
      </div>
      <div className="class-description">
        <p>{description}</p>
        <p className="permanent-description">{permanentDescription}</p>
      </div>
      <div className="class-bottom-grid">
        <div className="details-table">
          <div className="dates-column">
            <h3>Class Dates</h3>
            <ul>
              {dates.map((date, index) => (
                <li key={index}>
                  <p>{date}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="time-column">
            <h3>Time</h3>
            <ul>
              {times.map((time, index) => (
                <li key={index}>
                  <p>{time}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="prices">
          <h3>Prices</h3>
          <div className="price-grid">
            <ul>
              <li>
                <p>Drop-In Price: {dropInPrice}</p>
              </li>
              <li>
                <p>Monthly: {monthlyPrice}</p>
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
