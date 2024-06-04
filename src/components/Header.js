import React from "react";
import "../styles/Header.css";
import Logo from "../styles/imgs/icons/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="grid grid-5-columns">
        <div className="logo">
          <a href="/" className="site-logo">
            <img src={Logo} alt="Rose Long Logo" className="site-logo" />
          </a>
        </div>
        <div className="Home" id="menu-bar">
          <Link to="/" className="menu-link">
            Home
          </Link>
        </div>
        <div className="Work With Me" id="menu-bar">
          <Link to="/work" className="menu-link">
            Work With Me
          </Link>
        </div>
        <div className="About Rose" id="menu-bar">
          <Link to="/about" className="menu-link">
            About
          </Link>
        </div>
        <div className="Contact" id="menu-bar">
          <Link to="/contact" className="menu-link">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
