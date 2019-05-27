import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderUserButton from './HeaderUserButton';
import HeaderSearch from './HeaderSearch';
import HeaderLogo from './HeaderLogo';

const HeaderPosition = styled.header`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  width: 100%;
  background-color: white;
  padding: 0.9rem 1.75rem;
  box-shadow: 0 0 2px 2px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1000;
`;

class Header extends Component {
  render() {
    return (
      <HeaderPosition>
        <HeaderLogo />
        <HeaderSearch />
        <HeaderUserButton bold text="Home" />
        <HeaderUserButton text="Following" />
        <HeaderUserButton text="user" />
      </HeaderPosition>
    );
  }
}

export default Header;
