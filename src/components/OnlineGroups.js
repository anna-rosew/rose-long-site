import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import MorningBreathe from "../styles/imgs/icons/morning-breath.svg";
import EveningChill from "../styles/imgs/icons/evening-chill.svg";
import Lunar from "../styles/imgs/icons/lunar.svg";
import Kundalini from "../styles/imgs/icons/kundalini.svg";
import ClassSlides from "./ClassSlides";

const classData = [
  {
    icon: EveningChill,
    classType: "Deep Chill",
    description:
      "Thursday nights are about releasing tension and moving into the parasympathetic nervous system, which allows the body to replenish and heal. This hour is a deeply restorative way to look after your health in these stressful times. Come and enjoy an hour to unwind and relax.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom",
    dates: ["Thu, Aug 1", "Thu, Aug 22", "Thu, Aug 29"],
    times: ["8:00-9:00pm", "8:00-9:00pm", "8:00-9:00pm"],
    dropInPrice: "£10",
    monthlyPrice: "3 class bundle £21",
  },
  {
    icon: MorningBreathe,
    classType: "Good Morning Breath",
    description:
      "If you're looking for a fast way to regenerate your body, mind, and spirit, come and experience the magic of the breath. Deeply detoxifying, revitalising, and balancing, the practice of Pranayama has deep and lasting benefits.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom",
    dates: ["Wed, Aug 7", "Wed, Aug 21", "Tue, Aug 27"],
    times: ["7:00-7:30am", "7:00-7:30am", "7:00-7:30am"],
    dropInPrice: "£8",
    monthlyPrice: "3 session bundle £18",
  },
  {
    icon: Kundalini,
    classType: "Kundalini Magic",
    description:
      "These 90-minute classes combine movement, breath, and sound. If you’re looking for an intense physical workout and a tangible experience of expansive awareness, this is for you. Kundalini Yoga is the fastest way to experience altered states of consciousness without substances.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom",
    dates: ["Sat, Aug 3", "Sat, Aug 24", "Sat, Aug 31"],
    times: ["8:00-9:00am", "8:00-9:00am", "8:00-9:00am"],
    dropInPrice: "£12",
    monthlyPrice: "3 class bundle £30",
  },
  {
    icon: Lunar,
    classType: "Lunar Cycles",
    description:
      "Meeting twice each month, this practice helps you drop into the natural rhythms of your body and the world. Women have practiced at the New and Full Moon for centuries to deepen awareness of their bodies and cyclical connection with nature. Set an intention with each New Moon and reflect and release with each Full Moon.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom",
    dates: ["Sat, Aug 3", "Tue, Aug 20"],
    times: ["8:00-9:30am", "8:00-9:00pm"],
    dropInPrice: "£12 (New Moon), £10 (Full Moon)",
    monthlyPrice: "2 class bundle £17",
  },
];

export default function OnlineGroups() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const names = [
        "Deep Chill",
        "Good Morning Breath",
        "Kundalini Magic",
        "Lunar Cycles",
      ];
      return `<span class="${className}">${names[index]}</span>`;
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {classData.map((classItem, index) => (
          <SwiperSlide key={index}>
            <ClassSlides {...classItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
