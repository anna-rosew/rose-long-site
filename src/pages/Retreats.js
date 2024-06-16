import React, { useState } from "react";
import { Link } from "react-router-dom";
import Retreat1 from "../styles/imgs/photos/retreat1.png";
import Retreat2 from "../styles/imgs/photos/retreat2.png";
import Retreat3 from "../styles/imgs/photos/retreat3.png";
import Workshop1 from "../styles/imgs/photos/workshop1.jpeg";
import Workshop2 from "../styles/imgs/photos/workshop2.jpeg";
import Workshop3 from "../styles/imgs/photos/workshop3.jpeg";
import Location from "../styles/imgs/icons/location.svg";
import Calendar from "../styles/imgs/icons/calender.svg";
import "../styles/Retreat.css";

const events = [
  {
    type: "Retreat",
    title: "My Heart is For The Whole",
    location: "Patrick Brompton Hall, Yorkshire Dales, UK",
    date: "1st - 7th May 2024",
    description: "Immerse yourself in a weekend of yoga and breath work...",
    images: [Retreat1, Retreat2, Retreat3],
  },
  {
    type: "Workshop",
    title: "Group Workshop",
    location: "Somewhere, UK",
    date: "10th - 12th June 2024",
    description: "Join us for an engaging workshop...",
    images: [Workshop1, Workshop2, Workshop3],
  },
];

export default function Retreats() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentEvent = events[currentEventIndex];
  const totalEvents = events.length;
  const totalImages = currentEvent.images.length;

  const handleNextEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % totalEvents);
    setCurrentImageIndex(0);
  };

  const handlePreviousEvent = () => {
    setCurrentEventIndex(
      (prevIndex) => (prevIndex - 1 + totalEvents) % totalEvents
    );
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
    );
  };

  return (
    <div className="Retreats">
      <div className="container Retreat-page">
        <div className="grid grid-2-columns">
          <div className="retreat-image-column">
            <img
              src={currentEvent.images[currentImageIndex]}
              className="img-responsive img-hover"
              alt={currentEvent.type}
            />
            <div className="image-navigation">
              <button onClick={handlePreviousImage}>{"<"}</button>
              <button onClick={handleNextImage}>{">"}</button>
            </div>
          </div>
          <div className="retreat-info-column">
            <h3>{currentEvent.type}</h3>
            <h1>{currentEvent.title}</h1>
            <p>
              <img
                src={Location}
                alt="Location Icon"
                className="details-icon"
              />{" "}
              {currentEvent.location}
            </p>
            <p>
              <img src={Calendar} alt="Calendar Icon" /> {currentEvent.date}
            </p>
            <p>{currentEvent.description}</p>
            <Link to="/contact" className="get-in-touch">
              <button className="get-in-touch">GET IN TOUCH</button>
            </Link>
            <div className="event-navigation">
              <button onClick={handlePreviousEvent}>{"<"}</button>
              <button onClick={handleNextEvent}>{">"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
