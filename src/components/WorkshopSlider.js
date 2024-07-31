import React from "react";
import Location from "../styles/imgs/icons/location.svg";
import Calendar from "../styles/imgs/icons/calender.svg";
import Time from "../styles/imgs/icons/time.svg";
import "../styles/Retreat.css";

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
              className="retreat-img"
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
          <p>{workshopInfo.description}</p>
          <p>Max Capacity: {workshopInfo.maxCapacity}</p>
        </div>
      </div>
    </div>
  );
}
