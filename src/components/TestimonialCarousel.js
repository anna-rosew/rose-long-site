import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/TestimonialCarousel.css";
import { NextArrow, PrevArrow } from "./CustomArrow";

const testimonials = [
  {
    name: "John Doe",
    text: "This product is fantastic! It has changed my life for the better.",
    location: "New York, USA",
  },
  {
    name: "Jane Smith",
    text: "Excellent service and top quality. Highly recommend to everyone.",
    location: "London, UK",
  },
  {
    name: "Samuel Green",
    text: "A wonderful experience from start to finish. Will definitely return.",
    location: "Sydney, Australia",
  },
  {
    name: "Emily White",
    text: "Five stars! The customer support was outstanding.",
    location: "Toronto, Canada",
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
