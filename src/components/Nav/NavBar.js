import React from "react";
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

  .site-logo {
    height: 120px;
    color: black;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 120px;

    .site-logo {
      position: fixed;
      top: 15px;
      left: 130px;
      z-index: 20;
    }
  }
`;

export default function NavBar() {
  return (
    <div className="NavBar">
      <Nav>
        <div className="logo">
          <a href="/" className="site-logo">
            <img src={Logo} alt="Rose Long Logo" className="site-logo" />
          </a>
        </div>
        <Burger />
      </Nav>
    </div>
  );
}
