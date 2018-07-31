import React from 'react';
import styled from 'styled-components';
import { LeftSidebar, RightSidebar } from '../components';

class MainLayout extends React.Component {
  render() {
    return (
      <Container>
        <div className={'row pure-g'}>
          <div className={'pure-u-6-24'}>
            <LeftSidebar />
          </div>
          <div className={'pure-u-15-24'}>{this.props.children}</div>
          <div className={'pure-u-3-24'}>
            <RightSidebar />
          </div>
        </div>
      </Container>
    );
  }
}

export default MainLayout;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 60px;
`;
