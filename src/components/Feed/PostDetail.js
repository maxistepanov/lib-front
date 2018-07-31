import React from 'react';
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter';
import Link from 'react-router-dom/Link';
import { Card, H5 } from '@blueprintjs/core';
import { catalog } from '../../modules/api.methiod';

class PostDetail extends React.Component {
  componentDidMount() {
    const cat = catalog();
  }

  render() {
    console.log('this', this.props);
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

export default withRouter(PostDetail);

const Wrapper = styled.div`
  padding: 10px;
`;

const Actions = styled.div`
  display: flex;
`;
