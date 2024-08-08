import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 150px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .logo {
    position: absolute;
    top: 0;
    left: 20px;
  }

  .site-logo {
    height: 150px;
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    height: 100px;
    justify-content: space-between;

    .logo {
      position: static;
    }

    .site-logo {
      height: 60px;
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
