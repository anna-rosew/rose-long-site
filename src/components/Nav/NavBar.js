import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import "../../styles/NavBar.css";

const Nav = styled.nav`
  width: 100%;
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
      text-align: center;
      margin-left: 0;
      margin-top: 10px;
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
            <img src="" alt="Rose Long Logo" className="site-logo" />
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
