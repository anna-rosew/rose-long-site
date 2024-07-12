import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import "../../styles/NavBar.css";
import Logo from "../../styles/imgs/icons/logo.svg";

const Nav = styled.nav`
  width: 1100px;
  height: 150px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Ensure vertical alignment */

  .site-logo {
    height: 120px;
    color: black;
  }

  @media (max-width: 768px) {
    padding: 0px;
    width: 100%; /* Full width of the viewport */

    height: 100px;
    justify-content: center; /* Center content horizontally */

    .site-logo {
      height: 100px; /* Adjust height as needed */
    }
  }
`;

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="NavBar">
      <Nav>
        <div className="logo">
          <a href="/" className="site-logo">
            <img src={Logo} alt="Rose Long Logo" className="site-logo" />
          </a>
        </div>
        <Burger
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />
      </Nav>
    </div>
  );
}
