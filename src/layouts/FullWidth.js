import React from 'react';
import styled from 'styled-components';

class FullWidth extends React.Component {
  render() {
    return (
      <Container>
        <div className={'row pure-g'}>
          <div className={'pure-u-24-24'}>{this.props.children}</div>
        </div>
      </Container>
    );
  }
}

export default FullWidth;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 60px;
`;
