import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function StartButton() {
  return (
    <Link to="/approach">
      <button className="start-journey-button">Start Journey</button>
    </Link>
  );
}
