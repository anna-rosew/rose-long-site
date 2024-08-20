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
              <p>
                A contact form is currently being created so please contact via
                email using <strong>button below.</strong>
              </p>

              <h2 className="newsletter-heading">Stay-in-Touch</h2>
              <div className="stay-in-touch">
                <img
                  src={newsletterIcon}
                  alt="Newsletter"
                  className="newsletter-icon"
                />
                <div className="newsletter-subscribe">
                  <p>
                    Join for news on classes, workshops, retreats and free
                    resources/offers. Just add subject{" "}
                    <strong>"Newletter sign-up"</strong> to your email and
                    you'll be added to the list.
                  </p>
                </div>
              </div>

              <a href="mailto:info@rose-long.com">
                <button className="general-button">SEND AN EMAIL</button>
              </a>
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
