import React from "react";
import Location from "../styles/imgs/icons/location.svg";
import Calendar from "../styles/imgs/icons/calender.svg";
import Time from "../styles/imgs/icons/time.svg";
import "../styles/InPerson.css";
import { Link } from "react-router-dom";

// Utility function to replace markers with HTML tags
const formatDescription = (text) => {
  // Replace [strong]...[/strong] with <strong>...</strong>
  return text.replace(/\[strong\](.*?)\[\/strong\]/g, "<strong>$1</strong>");
};

export default function WorkshopSlider({ workshopInfo }) {
  return (
    <div className="workshop-slide">
      <div className="event-container">
        <div className="slider-container">
          {workshopInfo.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Workshop ${index + 1}`}
              className={`retreat-img ${
                index === 0 ? "large-image" : "small-image"
              }`}
            />
          ))}
        </div>
        <div className="retreat-info-column">
          <h3>Upcoming Workshop</h3>
          <h1>{workshopInfo.title}</h1>
          <p>
            <span className="details-span">
              <img
                src={Location}
                alt="Location Icon"
                className="details-icon"
              />
              {workshopInfo.location}
            </span>
          </p>
          <p>
            <span className="details-span">
              <img
                src={Calendar}
                alt="Calendar Icon"
                className="details-icon"
              />
              {workshopInfo.date}
            </span>
          </p>
          <p>
            <span className="details-span">
              <img src={Time} alt="Time Icon" className="details-icon" />
              {workshopInfo.time}
            </span>
          </p>
          <p
            dangerouslySetInnerHTML={{
              __html: formatDescription(workshopInfo.description),
            }}
          />
          <p>{workshopInfo.description2}</p>
          <p>AVAILABILITY: {workshopInfo.maxCapacity}</p>
          <p>
            PRICE: <strong>{workshopInfo.price}</strong>
          </p>
          <Link to="/contact">
            <button className="get-in-touch">BOOK NOW</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

//<Link to="/contact">
//    <button className="get-in-touch">BOOK NOW</button>
// </Link>
