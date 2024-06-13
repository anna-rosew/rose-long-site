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
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/" className="menu-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/work" className="menu-link">
          Work With Me
        </Link>
      </li>
      <li>
        <Link to="/about" className="menu-link">
          About
        </Link>
      </li>
      <li>
        {" "}
        <Link to="/contact" className="menu-link">
          Contact
        </Link>
      </li>
      <li>
        {" "}
        <Link to="/membership" className="menu-link">
          Membership
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
