import React from 'react';
import styled from 'styled-components';

class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        <div>© 2018 Бібліотека «ХНЕУ»</div>
      </Wrapper>
    );
  }
}

export default Footer;

const Wrapper = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  position: absolute;
  font-weight: 600;
  bottom: 0;
  background: #f5f5f5;
  justify-content: center;
  align-items: center;
`;
