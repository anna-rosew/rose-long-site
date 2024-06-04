import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/TestimonialCarousel.css";

import { NextArrow, PrevArrow } from "./CustomArrow";
import ruth from "../styles/imgs/testimonials/woman.png";

const testimonials = [
  {
    name: "Ruth",
    text: "I really enjoyed being part of the group and I found your Zoom ‘ technique’ worked really well. I just had you on the screen while doing the practice, so it felt like a one to one, whilst being aware of the others in the group , all with a common purpose. Emotionally, it felt so lovely to be part of a ‘family’ in spirit.",
    location: "Manchester, UK",
    profileImage: ruth,
  },
  {
    name: "Jane Smith",
    text: "Excellent service and top quality. Highly recommend to everyone.",
    location: "London, UK",
    profileImage: "john_doe_profile.jpg",
  },
  {
    name: "Samuel Green",
    text: "A wonderful experience from start to finish. Will definitely return.",
    location: "Sydney, Australia",
    profileImage: "john_doe_profile.jpg",
  },
  {
    name: "Emily White",
    text: "Five stars! The customer support was outstanding.",
    location: "Toronto, Canada",
    profileImage: "john_doe_profile.jpg",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <p className="testimonial-text">"{testimonial.text}"</p>

            <p className="testimonial-name">- {testimonial.name}</p>
            <p className="testimonial-location">{testimonial.location}</p>
            <img
              src={testimonial.profileImage}
              alt="profile"
              className="profile-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
