import React from "react";
import "../styles/Contact.css";
import ContactImg from "../styles/imgs/permanent/contact.png";
import newsletterIcon from "../styles/imgs/icons/newsletter.svg";
import BlurryImage from "../components/BlurryImage";

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="heading-container">
          <h1>Contact</h1>
        </div>

        <div className="grid grid-contact">
          <div className="forms-container">
            <div className="contact-form-container">
              <h2>Get-In Touch</h2>
              <p>
                If you'd like to book a class, workshop, or retreat, or have any
                questions, please don't hesitate to reach out. I will get back
                to you within 2 working days. I look forward to hearing from
                you!
              </p>
              {/* Mailto Button */}
              <a href="mailto:info@rose-long.com" className="mailto-button">
                <p>
                  <strong>Email: info@rose-long.com</strong>
                </p>
              </a>
            </div>
            <div className="contact-form-container ">
              <h2 className="newsletter-heading">Stay-in-Touch</h2>
              <div className="stay-in-touch">
                <img
                  src={newsletterIcon}
                  alt="Newsletter"
                  className="newsletter-icon"
                />
                <div className="newsletter-subscribe">
                  <p>
                    Send your name and email to Join for news on classes,
                    workshops, retreats and free resources/offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <BlurryImage
            src={ContactImg}
            className="contact-image-container img-responsive"
            alt="Woman doing tree pose outside at sunrise."
          />
        </div>
      </div>
    </div>
  );
}
