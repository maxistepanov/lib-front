import React from "react";
import logo from "assets/header.jpg";
import styled, { keyframes } from "styled-components";

function Header() {
  return (
    <TopBar>
      <Image src={logo} alt="logo" />
    </TopBar>
  );
}

export default Header;

const TopBar = styled.div`
  background-color: #ececec;
  color: #fff;
`;

const Image = styled.img``;
