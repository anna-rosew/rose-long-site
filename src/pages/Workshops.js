import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import WorkshopSlider from "../components/WorkshopSlider";
import prevArrow from "../styles/imgs/icons/arrow-prev.svg";
import nextArrow from "../styles/imgs/icons/arrow-next.svg";

export default function Workshops() {
  const workshops = [
    {
      images: [require("../styles/imgs/photos/workshop1.png")],
      title: "Moving Beyond Separation: The Power of The Breath.",
      location: "Home Studio, Liverpool. UK",
      date: "15th - 17th August 2024",
      time: "10:00 AM - 04:00 PM",
      description:
        "Most of us spend most of our time in thoughts, analysing, judging, assessing, reflecting, projecting, and so it goes on.  Thoughts separate this from that, me from you, inner from outer.  Living in thoughts it’s easy to miss the unified experience of life, and all that brings.  [strong]The breath brings us back  to wholeness. [/strong] As we breathe consciously the connecting flow of the breath becomes a living teacher.  The barriers dissolve, the walls crumble, separation is bridged.  [strong]We experience ourselves as a unified whole, connected to the unified whole. [/strong]",
      description2:
        "This workshop combines [strong]movement and breathwork,[/strong] opening you to the unifying capacity of the breath.  [strong] Suitable for those of you who’ve worked with me before and have some experience of Kundalini breathwork.[/strong] ",
      maxCapacity: "Max 7 participants",
      price: "£25",
    },
    {
      images: [require("../styles/imgs/photos/workshop1.png")],
      title: "Return to the Heart",
      location: "Home Studio, Liverpool. UK",
      date: "15th - 17th August 2024",
      time: "10:00 AM - 04:00 PM",
      description: "Join us for a transformative workshop...",
      description2: "hello",
      maxCapacity: "50 participants",
      price: "£25",
    },
  ];

  return (
    <div className="Workshops">
      <div className="container retreat-page">
        <h1>Workshops</h1>
        <Swiper
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".workshop-swiper-button-next",
            prevEl: ".workshop-swiper-button-prev",
          }}
          modules={[Pagination, Navigation]}
          className="workshop-swiper"
        >
          {workshops.map((workshop, index) => (
            <SwiperSlide key={index}>
              <WorkshopSlider workshopInfo={workshop} />
            </SwiperSlide>
          ))}
          {/* Custom Navigation Buttons */}
          <div className="workshop-swiper-button-prev">
            <img src={prevArrow} alt="prev arrow" className="nav-arrow" />
          </div>
          <div className="workshop-swiper-button-next">
            <img src={nextArrow} alt="prev arrow" className="nav-arrow" />
          </div>
        </Swiper>
      </div>
    </div>
  );
}
