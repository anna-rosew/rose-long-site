import React from "react";
import { Link } from "react-router-dom";

const ClassSlides = ({
  icon,
  classType,
  description,
  dates,
  times,
  dropInPrice,
  monthlyPrice,
}) => {
  <div className="ClassSlide">
    <div className="header">
      <img src={icon} alt={`${classType} icon`} className="icon" />
      <h1>{classType}</h1>
    </div>
    <p>{description}</p>
    <div className="bottom-grid">
      <div className="table">
        <div className="column">
          <h3>Class Dates</h3>
          {dates.map((date, index) => (
            <p key={index}>{date}</p>
          ))}
        </div>
        <div className="column">
          <h3>Time</h3>
          {times.map((time, index) => (
            <p key={index}>{time}</p>
          ))}
        </div>
      </div>
      <div className="prices">
        <h3>Prices</h3>
        <div className="price-grid">
          <ul>
            <li>{dropInPrice}</li>
            <li>{monthlyPrice}</li>
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
  </div>;
};

export default ClassSlides;
