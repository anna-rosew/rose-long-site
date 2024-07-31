import React from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import Workshop1 from "../styles/imgs/photos/workshop1.png";
import Workshop2 from "../styles/imgs/photos/workshop2.png";
import Workshop3 from "../styles/imgs/photos/workshop3.png";
import Location from "../styles/imgs/icons/location.svg";
import Calendar from "../styles/imgs/icons/calender.svg";
import { NextArrow, PrevArrow } from "../components/CustomArrow";
import "../styles/Retreat.css";
import "../styles/App.css";

import { Pagination, Navigation } from "swiper/modules";

export default function Workshops() {
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
    <div className="Workshops">
      <div className="container retreat-page">
        <h1>Workshops</h1>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="event-container">
              <div className="slider-container">
                <Slider {...innerSliderSettings}>
                  <div>
                    <img
                      src={Workshop1}
                      alt="Workshop1"
                      className="retreat-img"
                    />
                  </div>
                  <div>
                    <img
                      src={Workshop2}
                      alt="Workshop2"
                      className="retreat-img"
                    />
                  </div>
                  <div>
                    <img
                      src={Workshop3}
                      alt="Workshop3"
                      className="retreat-img"
                    />
                  </div>
                </Slider>
              </div>
              <div className="retreat-info-column">
                <h3>Upcoming Workshop</h3>
                <h1>Discover Your Inner Power</h1>
                <p>
                  <span className="details-span">
                    <img
                      src={Location}
                      alt="Location Icon"
                      className="details-icon"
                    />
                    Green Valley Retreat Center, California, USA
                  </span>
                </p>
                <p>
                  <span className="details-span">
                    <img
                      src={Calendar}
                      alt="Calendar Icon"
                      className="details-icon"
                    />
                    15th - 17th August 2024
                  </span>
                </p>
                <p>
                  Join us for a transformative workshop where you'll delve deep
                  into techniques for personal empowerment and growth.
                  Experience guided meditations, workshops, and discussions
                  designed to unlock your potential and elevate your journey.
                </p>
                <Link to="/contact" className="nav-buttons">
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="event-container">
              <div className="slider-container">
                <Slider {...innerSliderSettings}>
                  <div>
                    <img
                      src={Workshop1}
                      alt="Workshop1"
                      className="retreat-img"
                    />
                  </div>
                  <div>
                    <img
                      src={Workshop2}
                      alt="Workshop2"
                      className="retreat-img"
                    />
                  </div>
                  <div>
                    <img
                      src={Workshop3}
                      alt="Workshop3"
                      className="retreat-img"
                    />
                  </div>
                </Slider>
              </div>
              <div className="retreat-info-column">
                <h3>Upcoming Workshop</h3>
                <h1>Discover Your Inner Power</h1>
                <p>
                  <span className="details-span">
                    <img
                      src={Location}
                      alt="Location Icon"
                      className="details-icon"
                    />
                    Green Valley Retreat Center, California, USA
                  </span>
                </p>
                <p>
                  <span className="details-span">
                    <img
                      src={Calendar}
                      alt="Calendar Icon"
                      className="details-icon"
                    />
                    15th - 17th August 2024
                  </span>
                </p>
                <p>
                  Join us for a transformative workshop where you'll delve deep
                  into techniques for personal empowerment and growth.
                  Experience guided meditations, workshops, and discussions
                  designed to unlock your potential and elevate your journey.
                </p>
                <Link to="/contact" className="nav-buttons">
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
