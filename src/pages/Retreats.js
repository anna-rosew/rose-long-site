import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Retreat1 from "../styles/imgs/photos/retreat1.png";
import Retreat2 from "../styles/imgs/photos/retreat2.png";
import Retreat3 from "../styles/imgs/photos/retreat3.png";
import Location from "../styles/imgs/icons/location.svg";
import Calendar from "../styles/imgs/icons/calender.svg";
import { NextArrow, PrevArrow } from "../components/CustomArrow";
import { NextArrow1, PrevArrow1 } from "../components/CustomArrow1"; // Import your custom arrow components
import "../styles/Retreat.css";
import "../styles/App.css";

export default function Retreats() {
  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow1 />,
    prevArrow: <PrevArrow1 />,
  };

  const innerSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="Retreats">
      <div className="container Retreat-page">
        <Slider {...mainSliderSettings}>
          <div className="event-container">
            <div className="slider-container">
              <Slider {...innerSliderSettings}>
                <div>
                  <img src={Retreat1} alt="Retreat1" className="retreat-img" />
                </div>
                <div>
                  <img src={Retreat2} alt="Retreat2" className="retreat-img" />
                </div>
                <div>
                  <img src={Retreat3} alt="Retreat3" className="retreat-img" />
                </div>
              </Slider>
            </div>
            <div className="retreat-info-column">
              <h3>Upcoming Retreat</h3>
              <h1>My Heart is For The Whole</h1>
              <p>
                <span className="details-span">
                  <img
                    src={Location}
                    alt="Location Icon"
                    className="details-icon"
                  />
                  Patrick Brompton Hall, Yorkshire Dales, UK
                </span>
              </p>
              <p>
                <span className="details-span">
                  <img
                    src={Calendar}
                    alt="Calendar Icon"
                    className="details-icon"
                  />
                  1st - 7th May 2024
                </span>
              </p>
              <p>
                Immerse yourself in a weekend of yoga and breath work,
                rediscovering wholeness within. Explore the interconnectedness
                of health, holiness, and completeness, breaking free from
                patterns of separation. Using the Chakras as a guide, journey
                inward to unlock inner coherence and embrace all aspects of
                yourself.
              </p>
              <Link to="/contact" className="get-in-touch">
                GET IN TOUCH
              </Link>
            </div>
          </div>

          <div className="event-container">
            <div className="slider-container">
              <Slider {...innerSliderSettings}>
                <div>
                  <img src={Retreat1} alt="Retreat1" className="retreat-img" />
                </div>
                <div>
                  <img src={Retreat2} alt="Retreat2" className="retreat-img" />
                </div>
                <div>
                  <img src={Retreat3} alt="Retreat3" className="retreat-img" />
                </div>
              </Slider>
            </div>
            <div className="retreat-info-column">
              <h3>Upcoming Retreat</h3>
              <h1>Another Retreat Event</h1>
              <p>
                <span className="details-span">
                  <img
                    src={Location}
                    alt="Location Icon"
                    className="details-icon"
                  />
                  Another Location, Someplace, World
                </span>
              </p>
              <p>
                <span className="details-span">
                  <img
                    src={Calendar}
                    alt="Calendar Icon"
                    className="details-icon"
                  />
                  15th - 20th June 2024
                </span>
              </p>
              <p>
                Description of another retreat event goes here. You can add more
                details about this event and the activities planned.
              </p>
              <Link to="/contact" className="get-in-touch">
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
