import React from "react";
import styled from "styled-components";

class Menu extends React.Component {
  render() {
    return (
      <Wrapper>
        <div>Menu</div>
      </Wrapper>
    );
  }
}

export default Menu;

const Wrapper = styled.div`
  height: 30px;
  width: 100%;
  background: #00c3ff;
`;
