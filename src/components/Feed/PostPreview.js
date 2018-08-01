import React from 'react';
import styled from 'styled-components';
import { Card, H5 } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

class PostPreview extends React.Component {
  render() {
    const { post } = this.props;

    return (
      <Wrapper>
        <Card {...this.state}>
          <H5>
            <a href="#" dangerouslySetInnerHTML={{ __html: post.title }} />
          </H5>
          <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          <Actions>
            <Link to={'/post/123'}>Детальніше</Link>
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
