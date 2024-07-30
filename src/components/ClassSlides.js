import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/ClassSlide.css";
import { Link } from "react-router-dom";

export default function ClassSlides({ classInfo }) {
  return (
    <>
      {classInfo.map((classItem, index) => (
        <SwiperSlide key={index}>
          <div className="class-slide">
            <div className="class-header">
              <img
                src={classItem.icon}
                alt={classItem.classType}
                className="class-icon"
              />
              <h1>{classItem.classType}</h1>
            </div>
            <div className="class-description">
              <p>{classItem.description}</p>
              <p className="permanent-description">
                {classItem.permanentDescription}
              </p>
            </div>
            <div className="class-bottom-grid">
              <div className="details-table">
                <div className="dates-column">
                  <h3>Class Dates</h3>
                  <ul>
                    {classItem.dates.length > 0 ? (
                      classItem.dates.map((date, index) => (
                        <li key={index}>
                          <p>{date}</p>
                        </li>
                      ))
                    ) : (
                      <p>No dates available</p>
                    )}
                  </ul>
                </div>
                <div className="time-column">
                  <h3>Time</h3>
                  <ul>
                    {classItem.times.length > 0 ? (
                      classItem.times.map((time, index) => (
                        <li key={index}>
                          <p>{time}</p>
                        </li>
                      ))
                    ) : (
                      <p>No times available</p>
                    )}
                  </ul>
                </div>
              </div>
              <div className="prices">
                <h3>Prices</h3>
                <div className="price-grid">
                  <ul>
                    <li>
                      <p>Drop-In Price: {classItem.dropInPrice}</p>
                    </li>
                    <li>
                      <p>Monthly: {classItem.monthlyPrice}</p>
                    </li>
                  </ul>
                  <div className="membership">
                    <h3>Monthly Membership</h3>
                    <p>
                      Join all classes and access replays for £50 (from £86).
                      Please get-in-touch for more details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/contact">
              <button className="book-button">BOOK NOW</button>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </>
  );
}
