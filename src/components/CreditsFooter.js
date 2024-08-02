import React from "react";
import { Link } from "react-router-dom";
import "../styles/CreditsFooter.css";
import Logo from "../styles/imgs/icons/logo_white.svg";
import InstaIcon from "../styles/imgs/icons/insta-footer.svg";
import VimeoIcon from "../styles/imgs/icons/footer-vimeo.svg";

export default function CreditsFooter() {
  return (
    <div className="CreditsFooter">
      <div className="logo-footer">
        <a href="/">
          <img src={Logo} alt="Rose Long Logo" className="site-logo-footer" />
        </a>
        <div className="socials">
          <a
            href="https://www.instagram.com/lifechangesrose/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="social-footer"
          >
            <img src={InstaIcon} alt="Instagram" />
          </a>
          <a
            href="https://vimeo.com/roselong"
            target="_blank"
            rel="noopener noreferrer"
            className="social-footer"
          >
            <img src={VimeoIcon} alt="Vimeo" />
          </a>
        </div>
      </div>

      <div className="credits">
        <p>
          Website built by{" "}
          <a
            href="https://www.sacredintuitiveart.com/about"
            alt="Anna-Rose Wain | Front-end Developer"
          >
            {" "}
            Anna-Rose Wain{" "}
          </a>{" "}
          | Artwork by{" "}
          <a
            href="https://www.sacredintuitiveart.com/about"
            alt="Sacred Intuitive Art"
          >
            Lynn Hanford Day - Sacred Intuitive Art
          </a>
        </p>
      </div>
      <div className="all-pages">
        <div className="list">
          <h3>services</h3>
          <ul>
            <li>
              <Link to="/groups">Groups Overview</Link>
            </li>
            <li>
              <Link to="/onetoone">One-To-Ones</Link>
            </li>
            <li>
              <Link to="/groups">Online Groups</Link>
            </li>
            <li>
              <Link to="/inperson">In-Person Sessions</Link>
            </li>
            <li>
              <Link to="/retreats">Retreats</Link>
            </li>
          </ul>
        </div>
        <div className="list">
          <h3>about</h3>
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="list">
          <h3>resources</h3>
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
