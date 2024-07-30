import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import ClassSlides from "../components/ClassSlides";
import { Pagination } from "swiper/modules";

export default function OnlineGroupsSlider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const classes = [
    {
      icon: require("../styles/imgs/icons/evening-chill.svg").default,
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
      icon: require("../styles/imgs/icons/morning-breath.svg").default,
      classType: "Morning Yoga",
      description:
        "Start your day with a refreshing yoga session designed to energize and rejuvenate you. This morning class focuses on flexibility and strength.",
      permanentDescription: "Available in-person and via Zoom.",
      dates: ["Mon, Aug 5", "Wed, Aug 7", "Fri, Aug 9"],
      times: ["7:00-8:00am", "7:00-8:00am", "7:00-8:00am"],
      dropInPrice: "£12",
      monthlyPrice: "4 class bundle £40",
    },
  ];

  return (
    <div>
      <h1>Parent Component</h1>
      <div className="section">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <ClassSlides classInfo={classes} />
        </Swiper>
      </div>
    </div>
  );
}
