import React from "react";
import styled from "styled-components";
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarGroup
} from "@blueprintjs/core";

class Menu extends React.Component {
  render() {
    return (
      <Wrapper>
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <Item className={Classes.MINIMAL} text="Електронний каталог" />
            <Item
              className={Classes.MINIMAL}
              text="Електронний архів (репозитарій)"
            />
            <Item
              className={Classes.MINIMAL}
              text="Електронні мультимедійні видання"
            />
            <Item className={Classes.MINIMAL} text="Нові надходження" />
            <Item className={Classes.MINIMAL} text="Електронні ресурси" />
          </NavbarGroup>
        </Navbar>
      </Wrapper>
    );
  }
}

export default Menu;

const Wrapper = styled.div`
  width: 100%;
  background: #00c3ff;
`;

const Item = styled(Button)`
  span {
    text-align: center;
  }
`;
