import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    color: black;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    color: white;
    background-color: #356d65;
    position: fixed;
    z-index: 1000;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: white;
    }

    .book-now {
      margin-top: auto; /* Push to bottom */
      padding: 15px;
      background-color: #f7a700; /* Adjust color as needed */
      text-align: center;
      border-radius: 5px;
      font-weight: bold;
      color: black;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #e68a00; /* Adjust hover color as needed */
      }
    }
  }
`;

const RightNav = ({ open, closeMenu }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/" className="menu-link" onClick={closeMenu}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/work" className="menu-link" onClick={closeMenu}>
          Work With Me
        </Link>
      </li>
      <li>
        <Link to="/about" className="menu-link" onClick={closeMenu}>
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="menu-link" onClick={closeMenu}>
          Contact
        </Link>
      </li>
      <li>
        <Link to="/membership" className="menu-link" onClick={closeMenu}>
          Membership
        </Link>
      </li>
      <li>
        <a href="/book-now" className="book-now" onClick={closeMenu}>
          Book Now
        </a>
      </li>
    </Ul>
  );
};

export default RightNav;
