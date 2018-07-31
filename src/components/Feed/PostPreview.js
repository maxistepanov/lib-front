import React from "react";
import styled from "styled-components";
import { Card, H5 } from "@blueprintjs/core";
import { Link } from "react-router-dom";

class PostPreview extends React.Component {
  render() {
    return (
      <Wrapper>
        <Card {...this.state}>
          <H5>
            <a href="#">Analytical applications</a>
          </H5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            aliquid autem corporis 545delectus dolores doloribus earum, error
            maiores minus, nobis obcaecati quidem quos reiciendis repellendus
            totam ullam voluptatem. Recusandae, repudiandae?
          </p>
          <Actions>
            <Link to={"/post/123"}>Детальніше</Link>
          </Actions>
        </Card>
      </Wrapper>
    );
  }
}

export default PostPreview;

const Wrapper = styled.div`
  margin: 10px 0;
`;

const Actions = styled.div`
  display: flex;
`;
