import React from "react";
import "../styles/Contact.css";
import Contact from "../styles/imgs/permanent/"

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <h2>Get</h2>
        <h1>In-Touch</h1>
        <div className="grid grid-2-columns">
          <div className="contact-image">
            <img
              src={Contact}
              alt="Woman doing tree pose outside at sunrise."
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
