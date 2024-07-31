import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Retreat.css"; // Custom styles including Swiper navigation

import { Pagination, Navigation } from "swiper/modules";

import WorkshopSlider from "../components/WorkshopSlider";

export default function Workshops() {
  const workshops = [
    {
      images: [
        require("../styles/imgs/photos/workshop1.png"),
        require("../styles/imgs/photos/workshop2.png"),
        require("../styles/imgs/photos/workshop3.png"),
      ],
      title: "Discover Your Inner Power",
      location: "Green Valley Retreat Center, California, USA",
      date: "15th - 17th August 2024",
      time: "10:00 AM - 04:00 PM",
      description: "Join us for a transformative workshop...",
      maxCapacity: "50 participants",
    },
    {
      images: [
        require("../styles/imgs/photos/workshop1.png"),
        require("../styles/imgs/photos/workshop2.png"),
        require("../styles/imgs/photos/workshop3.png"),
      ],
      title: "Discover Your Inner Power",
      location: "Green Valley Retreat Center, California, USA",
      date: "15th - 17th August 2024",
      time: "10:00 AM - 04:00 PM",
      description: "Join us for a transformative workshop...",
      maxCapacity: "50 participants",
    },
  ];

  return (
    <div className="Workshops">
      <div className="container retreat-page">
        <h1>Workshops</h1>
        <Swiper
          pagination={{ clickable: true }}
          navigation={true} // Enable navigation arrows
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {workshops.map((workshop, index) => (
            <SwiperSlide key={index}>
              <WorkshopSlider workshopInfo={workshop} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
