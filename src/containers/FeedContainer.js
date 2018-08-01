import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import PostPreview from 'components/Feed/PostPreview';

class FeedContainer extends React.Component {
  render() {
    console.log('this', this.props);
    const { feed } = this.props;
    return (
      <Wrapper>
        {feed.result.map((id) => {
          return <PostPreview key={id} post={feed.entities.posts[id]} />;
        })}
      </Wrapper>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  feed: createSelector(({ posts }) => posts.normalized, (state) => state),
});

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedContainer);

const Wrapper = styled.div`
  padding: 15px;
`;
