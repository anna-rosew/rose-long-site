import React from "react";
import { Link } from "react-router-dom";
import TestimonialCarousel from "../components/TestimonialCarousel";
import "../styles/App.css";
import "../styles/Approach.css";

//https://github.com/cookpete/react-player/tree/master
//Style video container

export default function Approach() {
  return (
    <div className="Approach-Page">
      <h1>My Approach</h1>

      <div className="player-wrapper">
        <iframe
          src="https://player.vimeo.com/video/950778932?h=f30e222061"
          width="960"
          height="540"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          title="vimeo player"
        ></iframe>
      </div>

      <div className="approach-text">
        <p>
          Most of us learn to live from our minds; focusing on our thoughts as
          we go through the day.  Your thoughts determine your{" "}
          <strong>breathing pattern</strong>, and that impacts the health of
          your body. Stressful, busy thoughts means shallow, busy breath, and
          that triggers a stress response in the nervous system and endocrine
          system.   Similarly anxious thoughts result in a rapid breathing
          pattern, stimulating a <strong>fear response</strong> (fight, flight,
          freeze, fawn) in the body.
        </p>
        <p>
          The ancients knew the power of the{" "}
          <strong>mind, body and the breath</strong>, and modern research is
          proving what they knew; you have the capacity to{" "}
          <strong>transform yourself from the inside out.</strong>
        </p>
        <p>
          This is not a quick fix. The process asks you to release the familiar
          and <strong>step into the unknown</strong>.  It takes{" "}
          <strong>courage</strong> to risk letting go of what no longer works
          for you.  Holding a clear space of enquiry allows you to see your
          patterns, identify blind spots and{" "}
          <strong>unlock your potential</strong>.  Greater self-awareness
          equates with <strong>greater freedom</strong>.  Through this work you
          learn where you have agency and find your way through the blocks.
        </p>
        <p>
          I am dual qualified as a <strong>Coach and Yoga Teacher</strong>. I'm
          fascinated with how the body, mind and breath work{" "}
          <strong>together</strong> and how listening deeply{" "}
          <strong>opens us to new dimensions</strong> of experience and personal
          growth.
        </p>
        <p>
          I draw on tools, techniques and teachings from different traditions
          and cultures and am grateful to all my teachers, peers and
          communities.   I recognise that ultimately all paths lead to the same
          destination, <strong>all rivers flow to the sea.</strong>
        </p>
        <Link to="/approach" className="card-links">
          <button className="journey-link icon-hover">
            Start Your Journey
          </button>
        </Link>
      </div>
      <TestimonialCarousel />
    </div>
  );
}
