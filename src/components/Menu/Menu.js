import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarGroup,
} from '@blueprintjs/core';
import MenuItem from 'components/Menu/MenuItem';

class Menu extends React.Component {
  static propTypes = {
    items: PropTypes.array,
  };

  render() {
    return (
      <Wrapper>
        <Navbar>
          <NavbarGroupStyled align={Alignment.LEFT}>
            {this.props.items.map(({ url, title, id }) => (
              <MenuItem key={id} url={url} title={title} />
            ))}
          </NavbarGroupStyled>
        </Navbar>
      </Wrapper>
    );
  }
}

export default Menu;

const Wrapper = styled.div`
  width: 100%;
  background: #00c3ff;
  display: flex;
`;

const NavbarGroupStyled = styled(NavbarGroup)`
  width: 100%;
  justify-content: space-between;
`;
