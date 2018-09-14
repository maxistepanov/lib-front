import React from 'react';
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter';
import Link from 'react-router-dom/Link';
import { Card, H5 } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { getPostBySlug } from 'modules/ApiClient';

class PostDetail extends React.Component {
  componentDidMount() {
    const { slug } = this.props.match.params;
    console.log('this.priopos', slug);

    // this.props.getPost(slug)
  }
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
          <Actions>
            <Link to={'/'}>Назад</Link>
          </Actions>
        </Card>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.data,
});

const mapDispatchToProps = (dispatch) => ({
  getPost: (slug) => dispatch(getPostBySlug(slug)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PostDetail),
);
const Wrapper = styled.div`
  padding: 10px;
`;

const Actions = styled.div`
  display: flex;
`;
