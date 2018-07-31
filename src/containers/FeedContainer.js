import React from 'react';
import styled from 'styled-components';
import PostPreview from '../components/Feed/PostPreview';

class FeedContainer extends React.Component {
  render() {
    return (
      <Wrapper>
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
      </Wrapper>
    );
  }
}

export default FeedContainer;

const Wrapper = styled.div`
  padding: 15px;
`;
