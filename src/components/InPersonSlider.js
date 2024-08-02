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

export default function InPersonSlider({ eventInfo }) {
  return (
    <div className="event-slide">
      <div className="event-container">
        <div className="image-gallery">
          <div className="large-image-container">
            <img
              src={eventInfo.images[0]}
              alt="Large Event"
              className="large-image"
            />
          </div>
          <div className="small-images-container">
            {eventInfo.images.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Small Event ${index + 1}`}
                className="small-image"
              />
            ))}
          </div>
        </div>
        <div className="event-info-column">
          <h3>Upcoming Event</h3>
          <h1>{eventInfo.title}</h1>
          <p>
            <span className="details-span">
              <img
                src={Location}
                alt="Location Icon"
                className="details-icon"
              />
              {eventInfo.location}
            </span>
          </p>
          <p>
            <span className="details-span">
              <img
                src={Calendar}
                alt="Calendar Icon"
                className="details-icon"
              />
              {eventInfo.date}
            </span>
          </p>
          <p>
            <span className="details-span">
              <img src={Time} alt="Time Icon" className="details-icon" />
              {eventInfo.time}
            </span>
          </p>
          <p
            dangerouslySetInnerHTML={{
              __html: formatDescription(eventInfo.description),
            }}
          />
          <p>{eventInfo.description2}</p>
          <p>AVAILABILITY: {eventInfo.maxCapacity}</p>
          <p>
            PRICE: <strong>{eventInfo.price}</strong>
          </p>
          <Link to="/contact">
            <button className="get-in-touch">BOOK NOW</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}