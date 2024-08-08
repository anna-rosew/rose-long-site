import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import "../../styles/NavBar.css";
import Logo from "../../styles/imgs/icons/logo3_black.svg";
const Nav = styled.nav`
  width: 1100px;
  height: 150px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .site-logo {
    height: 150px;
    color: black;
    margin-top: 30px;
    margin-left: 30px;
  }

  @media (max-width: 768px) {
    padding: 0px;
    width: 100%;
    height: 100px;
    justify-content: center;

    .site-logo {
      height: 60px;
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
