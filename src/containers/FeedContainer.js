import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import PostPreview from 'components/Feed/PostPreview';

class FeedContainer extends React.Component {
  render() {
    console.log('this', this.props);
    const { posts = [] } = this.props;
    return (
      <Wrapper>
        {posts.map((post) => <PostPreview key={post.id} post={post} />)}
      </Wrapper>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  posts: createSelector(({ posts }) => posts.data, (state) => state),
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedContainer);

const Wrapper = styled.div`
  padding: 15px;
`;
