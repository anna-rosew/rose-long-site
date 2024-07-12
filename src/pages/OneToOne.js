import React from "react";
import { Link } from "react-router-dom";
import "../styles/OneToOne.css";
import IconOne from "../styles/imgs/icons/calender.svg";
import IconTwo from "../styles/imgs/icons/laptop.svg";
import IconThree from "../styles/imgs/icons/daily.svg";
export default function OneToOne() {
  return (
    <div className=" container OneToOne-Page">
      <h2>One-To-One</h2>
      <h1>Sessions.</h1>
      <h3 className="subtitle">Unlocking the Answers from Within.</h3>

      <div className="one-to-one-text">
        <p>
          These sessions offer you what you need to{" "}
          <strong>develop your inner guidance system.</strong> This requires a
          process of slowing down, breathing and learning to listen and observe
          yourself. It can be uncomfortable and challenging at times. The
          Coaching space allows you to{" "}
          <strong>stay in your flow and listen deeply.</strong> Come with
          curiosity and an open mind.Your life will <strong>transform</strong>{" "}
          from the inside out.
        </p>
        <p>
          The Coaching Sessions offer a space of deep listening where insights
          arise, answers are revealed and <strong>potential is unlocked</strong>
          . For the work to take root you have <strong>daily practices</strong>{" "}
          and activities that embed what you’re learning into your daily life.{" "}
        </p>{" "}
        <p>
          <strong>Small steps to lasting change.</strong>
        </p>
        <div className="what-to-expect">
          <h3 className="subtitle">What to expect</h3>
          <div className="grid grid-3-columns">
            <div className="item-one">
              <p className="heading">Choose Your Rhythm</p>

              <img src={IconOne} alt="Calander"></img>
              <p>Weekly or Biweekly</p>
            </div>
            <div className="item-two">
              <p className="heading">Where to Meet</p>

              <img src={IconTwo} alt="Meetings"></img>
              <p>By Phone, Video Call or In-Person</p>
            </div>
            <div className="item-three">
              <p className="heading">Tailored to You</p>

              <img src={IconThree} alt="Daily Practices"></img>
              <p>Daily Resources & practices: </p>
            </div>
          </div>
        </div>
        <Link to="/contact" className="card-links">
          <button className="journey-link button-hover">
            Book a Free 30 Min Session
          </button>
        </Link>
      </div>
    </div>
  );
}
