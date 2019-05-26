import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderUserButton from './HeaderUserButton';
import HeaderSearch from './HeaderSearch';
import HeaderLogo from './HeaderLogo';

const HeaderPosition = styled.header`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  background-color: white;
  padding: 2rem;
  box-shadow: 0 0 2px 2px;
  display: flex;
  align-items: center;
`;

class Header extends Component {
  render() {
    return (
      <HeaderPosition>
        <HeaderLogo />
        <HeaderSearch />
        <HeaderUserButton bold text="home" />
        <HeaderUserButton text="following" />
        <HeaderUserButton text="user" />
      </HeaderPosition>
    );
  }
}

export default Header;
