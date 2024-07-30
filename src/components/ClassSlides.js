import React from "react";
import "../styles/ClassSlide.css";

export default function ClassSlides({ classInfo }) {
  console.log("ClassInfo in ClassSlides:", classInfo);

  if (!classInfo) {
    return <div>Error: classInfo is undefined</div>;
  }

  return (
    <div className="class-slide">
      <div className="class-header">
        <img
          src={classInfo.icon}
          alt={classInfo.classType}
          className="class-icon"
        />
        <h1>{classInfo.classType}</h1>
      </div>
      <div className="class-description">
        <p>{classInfo.description}</p>
        <p className="permanent-description">
          {classInfo.permanentDescription}
        </p>
      </div>
      <div className="class-bottom-grid">
        <div className="details-table">
          <div className="dates-column">
            <h3>Class Dates</h3>
            <ul>
              {classInfo.dates.map((date, index) => (
                <li key={index}>
                  <p>{date}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="time-column">
            <h3>Time</h3>
            <ul>
              {classInfo.times.map((time, index) => (
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
                <p>Drop-In Price: {classInfo.dropInPrice}</p>
              </li>
              <li>
                <p>Monthly: {classInfo.monthlyPrice}</p>
              </li>
            </ul>
            <div className="membership">
              <h3>Monthly Membership</h3>
              <p>
                Join all classes and access replays for £50 (from £86). Please
                get in touch for more details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
