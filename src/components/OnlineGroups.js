import React from "react";
import ClassSlides from "../components/ClassSlides";

export default function OnlineGroups() {
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
  ];

  return (
    <div>
      <h1>Parent Component</h1>
      <div className="section">
        <ClassSlides classInfo={classes} />
      </div>
    </div>
  );
}
