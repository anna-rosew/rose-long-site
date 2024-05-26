import React from "react";
import "../styles/Header.css";
import Logo from "../styles/imgs/icons/logo.svg";

export default function Header() {
  return (
    <div className="Header">
      <nav className="nav">
        <a href="/" className="site-logo">
          <img src={Logo} alt="Rose Long Logo" className="site-logo" />
        </a>
      </nav>
      <h1>Rose Long</h1>
    </div>
  );
}
