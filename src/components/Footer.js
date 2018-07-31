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
  height: 60px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: #ffb581;
`;
