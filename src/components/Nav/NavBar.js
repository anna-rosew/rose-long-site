import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import Logo from "../../styles/imgs/icons/logo.svg";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

export default function NavBar() {
  return (
    <div className="NavBar">
      <Nav>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <Burger />
      </Nav>
    </div>
  );
}
