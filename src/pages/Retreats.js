import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Retreat1 from "../styles/imgs/photos/retreat1.png";
//import Retreat2 from "../styles/imgs/photos/retreat2.png";
//import Retreat3 from "../styles/imgs/photos/retreat3.png";
import Location from "../styles/imgs/icons/location.svg";
import Calendar from "../styles/imgs/icons/calender.svg";
import "../styles/Retreat.css";
import "../styles/App.css";

export default function Retreats() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="Retreats">
      <div className="container Retreat-page">
        <div className="grid grid-2-columns">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <img src={Retreat1} alt="Reatreat1"></img>
              </div>
              <div>2</div>
              <div>3</div>
            </Slider>
          </div>
          <div className="retreat-info-column">
            <h3>Upcoming Retreat</h3>
            <h1>My Heart is For The Whole</h1>
            <p>
              <img
                src={Location}
                alt="Location Icon"
                className="details-icon"
              />{" "}
              Patrick Brompton Hall, Yorkshire Dales, UK
            </p>
            <p>
              <img
                src={Calendar}
                alt="Calendar Icon"
                className="details-icon"
              />{" "}
              1st - 7th May 2024
            </p>
            <p>
              Immerse yourself in a weekend of yoga and breath work,
              rediscovering wholeness within. Explore the interconnectedness of
              health, holiness, and completeness, breaking free from patterns of
              separation. Using the Chakras as a guide, journey inward to unlock
              inner coherence and embrace all aspects of yourself.
            </p>
            <Link to="/contact" className="get-in-touch">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
