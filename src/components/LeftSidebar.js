import React from "react";
import styled from "styled-components";

class LeftSidebar extends React.Component {
  render() {
    return <Wrapper>left bar</Wrapper>;
  }
}

export default LeftSidebar;

const Wrapper = styled.div`
  width: 200px;
  background: #afff8f;
`;
