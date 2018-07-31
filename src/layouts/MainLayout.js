import React from "react";
import styled from "styled-components";
import { LeftSidebar, RightSidebar } from "../components";

class MainLayout extends React.Component {
  render() {
    return (
      <Container>
        <LeftSidebar />
        <div>{this.props.children}</div>
        <RightSidebar />
      </Container>
    );
  }
}

export default MainLayout;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
