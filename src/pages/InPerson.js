import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/InPerson.css";
import { Pagination, Navigation } from "swiper/modules";
import EventSlider from "../components/InPersonSlider";
import prevArrow from "../styles/imgs/icons/arrow-prev.svg";
import nextArrow from "../styles/imgs/icons/arrow-next.svg";

export default function InPerson() {
  const events = [
    {
      images: [
        require("../styles/imgs/photos/home-studio1.png"),
        require("../styles/imgs/photos/buddah.png"),
        require("../styles/imgs/photos/home-studio4.png"),
      ],
      title: "Moving Beyond Separation: The Power of The Breath.",
      location: "Home Studio, Liverpool. UK",
      date: "15th - 17th August 2024",
      time: "10:00 AM - 04:00 PM",
      description:
        "Most of us spend most of our time in thoughts, analysing, judging, assessing, reflecting, projecting, and so it goes on.  Thoughts separate this from that, me from you, inner from outer.  Living in thoughts it’s easy to miss the unified experience of life, and all that brings. [strong]The breath brings us back  to wholeness. [/strong] As we breathe consciously the connecting flow of the breath becomes a living teacher.  The barriers dissolve, the walls crumble, separation is bridged.  [strong]We experience ourselves as a unified whole, connected to the unified whole. [/strong]",
      description2:
        "This event combines [strong]movement and breathwork,[/strong] opening you to the unifying capacity of the breath.  [strong] Suitable for those of you who’ve worked with me before and have some experience of Kundalini breathwork.[/strong] ",
      maxCapacity: "Max 7 participants",
      price: "£25",
    },
    {
      images: [
        require("../styles/imgs/photos/home-studio4.png"),
        require("../styles/imgs/photos/heart2.png"),
        require("../styles/imgs/photos/home-studio1.png"),
      ],
      title: "Return to the Heart",
      location: "Home Studio, Liverpool. UK",
      date: "15th - 17th August 2024",
      time: "10:00 AM - 04:00 PM",
      description:
        "Current research is proving that our hearts are not simply pumps as was once believed.  Science is starting to echo what Yogis have been teaching for thousands of years; [strong]the heart is what connects us[/strong].  Living in a world of fragmentation and division, [strong]heart centeredeness[/strong] holds the [strong]healing we long for.[/strong]",
      description2:
        "This morning is dedicated to the [strong]heart[/strong].  We begin with a [strong]cacao ceremony to open our hearts[/strong] and listen for what is moving in the space of our hearts.  Holding a healing intention we move into powerful [strong]heart centred breathwork.[/strong]  Sink into a [strong]yoga nidra[/strong] and experience the [strong]healing power of heart coherence. Open to All.[/strong]",
      maxCapacity: "50 participants",
      price: "£25",
    },
  ];

  return (
    <div className="Events">
      <div className="container in-person-page">
        <h1>In-Person Sessions</h1>
        <h3 className="subtitle">YOGA | COMMUNITY</h3>
        <Swiper
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".event-swiper-button-next",
            prevEl: ".event-swiper-button-prev",
          }}
          modules={[Pagination, Navigation]}
          className="event-swiper"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <EventSlider eventInfo={event} />
            </SwiperSlide>
          ))}
          {/* Custom Navigation Buttons */}
          <div className="event-swiper-button-prev">
            <img src={prevArrow} alt="prev arrow" className="nav-arrow" />
          </div>
          <div className="event-swiper-button-next">
            <img src={nextArrow} alt="next arrow" className="nav-arrow" />
          </div>
        </Swiper>
      </div>
    </div>
  );
}
