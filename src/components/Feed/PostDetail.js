import React from "react";
import styled from "styled-components";
import {
  Button,
  Card,
  Classes,
  Elevation,
  H5,
  Label,
  Slider,
  Switch
} from "@blueprintjs/core";

class PostDetail extends React.Component {
  render() {
    return (
      <Wrapper>
        <Card {...this.state}>
          <H5>
            <a href="#">Analytical applications</a>
          </H5>
          <p>
            User interfaces that enable people to interact smoothly with data,
            ask better questions, and make better decisions.
          </p>
        </Card>
      </Wrapper>
    );
  }
}

export default PostDetail;

const Wrapper = styled.div`
  margin: 10px 0;
`;
