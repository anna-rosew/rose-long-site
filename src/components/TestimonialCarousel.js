import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/TestimonialCarousel.css";

import { NextArrow, PrevArrow } from "./CustomArrow";
import ruth from "../styles/imgs/testimonials/woman.png";

const testimonials = [
  {
    name: "Survi",
    text: "Rose came into my life at a traumatic and distressing time.  I've unearthed insights when I didn't think my mind would let me and overcome challenges that I could not see beyond. Through movement, breath and her excellent coaching skills, a sense of calm and peace is restored. I don't know how Rose does it, but she just knows. ",
    location: "Manchester, UK",
    profileImage: ruth,
  },
  {
    name: "Rosie",
    text: "When I started working with Rose I was in a crisis period in my life. I'd tried several attempts at changing but all unsuccessful. Through a gentle and deep process of enquiry with Rose, the seeds of change were sown.  I found myself with the strength to take radical action and embark on an enormous transformation.  When I look back at that time, my life is unrecognisable from the person I now am.",
    location: "London, UK",
    profileImage: ruth,
  },
  {
    name: "Jackson",
    text: "I was stuck on a path that made me deeply unhappy - doggedly overworking in the pursuit of external success.  Somewhere on the other side of the chaos, a new life and self gradually manifested.  Rose sat with me calmly and gently each time it all seemed way too much, and enabled me to have the clarity and courage to continue on the path I knew, in my heart, to be essential.",
    location: "Sydney, Australia",
    profileImage: ruth,
  },
  {
    name: "Antje",
    text: "Rose is somebody who really listens and knows when to ask the right questions. She is incredibly clear in her observation and way of expression. Rose is very intuitive and combines this with a tangible wisdom and great sense of humour. She makes you feel like you are talking to a good old friend while she always stays professional. The feeling I got from working with her was one of trust, joy and warmth.",
    location: "Toronto, Canada",
    profileImage: ruth,
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
