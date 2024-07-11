import React from "react";
import { Link } from "react-router-dom";
import TestimonialCarousel from "../components/TestimonialCarousel";
import "../styles/App.css";
import "../styles/Approach.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/audio.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import myApproachThumbnail from "../styles/imgs/permanent/approach-thumbnail.png";

import { MediaPlayer, MediaProvider, Poster, Track } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";

import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

export default function Approach() {
  return (
    <div className="container Approach-Page">
      <h1>My Approach</h1>
      <MediaPlayer
        src="vimeo/640499893"
        viewType="video"
        streamType="on-demand"
        logLevel="warn"
        crossOrigin
        playsInline
        title="Rose Long: My"
        poster={myApproachThumbnail}
      >
        <MediaProvider>
          <Poster className="vds-poster" />
          {textTracks.map((track) => (
            <Track {...track} key={track.src} />
          ))}
        </MediaProvider>
        <DefaultVideoLayout
          thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>
      <MediaPlayer title="Rose Long: My Approach" src="vimeo/981928855">
        <MediaProvider />
        <DefaultVideoLayout
          thumbnails={myApproachThumbnail}
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>

      <div className="call-to-action">
        {" "}
        <Link to="/work" className="card-links">
          <button className="journey-link button-hover">
            Start Your Journey
          </button>
        </Link>
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
      </div>
      <TestimonialCarousel />
    </div>
  );
}
