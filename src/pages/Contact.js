import React from "react";
import "../styles/Contact.css";
import ContactImg from "../styles/imgs/permanent/contact.png";
import newsletterIcon from "../styles/imgs/icons/newsletter.svg";

//Contact Form: https://www.youtube.com/watch?v=bMq2riFCF90&t=15s
//Newsletter: https://www.youtube.com/watch?v=Db2uW8xhqJY

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="heading-container">
          <h1>Contact</h1>
        </div>

        <div className="grid grid-contact">
          <div className="contact-image-container">
            <img
              src={ContactImg}
              alt="Woman doing tree pose outside at sunrise."
              className="img-responsive"
            />
          </div>
          <div className="forms-container">
            <div className="contact-form-container">
              <h2>Get-In Touch</h2>{" "}
              <p>
                If you'd like to book a class, workshop or retreat or have any
                questions, please don't hesitate to reach out. I will get back
                to you within 2 working days. I look forward to hearing from
                you!{" "}
              </p>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">NAME</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  SEND
                </button>
              </form>
            </div>
            <div className="contact-form-container">
              <h2>Stay-in-Touch</h2>
              <div className="stay-in-touch">
                <img
                  src={newsletterIcon}
                  alt="Newsletter"
                  className="newsletter-icon"
                />
                <div className="newsletter-subscribe">
                  <p>
                    Join for news on classes, workshops, retreats and free
                    resources/offers.
                  </p>
                  <button className="general-button">SIGN-UP</button>
                  <button type="submit" className="submit-btn">
                    SIGN-UP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
