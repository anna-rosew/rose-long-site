import React, { useState } from "react";
import "../styles/Contact.css";
import ContactImg from "../styles/imgs/permanent/contact.png";
import newsletterIcon from "../styles/imgs/icons/newsletter.svg";
import BlurryImage from "../components/BlurryImage";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the form on each input change (optional)
    validateForm();
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Please provide name.";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      errors.email = "Please provide valid email address.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Please provide a message.";
      isValid = false;
    }

    // Log errors for debugging
    setFormErrors(errors);
    console.log(errors);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      console.log("Form is invalid, errors exist", formErrors);
    }
  };

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
                questions, please don't hesitate to reach out.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {formErrors.name && (
                      <span className="error">{formErrors.name}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {formErrors.email && (
                      <span className="error">{formErrors.email}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {formErrors.message && (
                      <span className="error">{formErrors.message}</span>
                    )}
                  </div>

                  <button type="submit" className="general-button">
                    Submit
                  </button>
                  {isSubmitted && (
                    <p className="success-message">
                      <strong>
                        Thank you for getting in touch! I aim to get back to you
                        within 2 working days.
                      </strong>
                    </p>
                  )}
                </div>
              </form>

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
