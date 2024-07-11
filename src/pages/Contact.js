import React, { useState } from "react";
import "../styles/Contact.css";
import ContactImg from "../styles/imgs/permanent/contact.png";
import newsletterIcon from "../styles/imgs/icons/newsletter.svg";

//I will get back to you within 48 hours
//Newsletter subscription call to action tick box
//Alert styling

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send the data to your server or a third-party service
    console.log(formData);
    alert("Form submitted!");
    // Reset the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="heading-container">
          <h2>Get</h2>
          <h1>In-Touch</h1>
        </div>
        <div className="call-to-action">
          <p>
            If you have any questions or would like to book a class, workshop or
            retreat, please get in touch below. I usually get back to you within
            48 hours.
          </p>
          <p>
            You can also stay-in-touch by signing up for the monthly newsletter.
          </p>
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
              <h2>Get-In Touch</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">NAME</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  SEND
                </button>
              </form>
            </div>
            <div className="stay-in-touch">
              <h2>Stay-in-Touch</h2>
              <img src={newsletterIcon} alt="Newletter" />
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
