import React, { Component } from 'react';
import styled from 'styled-components';

import { IconContext } from 'react-icons';
import { TiMessageTyping, TiBell } from 'react-icons/ti';
import { FaPinterest } from 'react-icons/fa';

import HeaderUserButton from './HeaderUserButton';
import HeaderSearch from './HeaderSearch';

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

const DotDot = styled.span`
  margin-left: 2rem;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: gray;
  position: relative;
  display: inline-block;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    background-color: gray;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    position: absolute;
  }

  &::before {
    left: 1rem;
    top: 0;
  }

  &::after {
    right: 0.9rem;
    top: 0;
  }
`;

const RedDot = styled.span`
  background-color: rgb(206, 24, 38);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  position: absolute;
  right: -0.15rem;
  text-align: center;
  color: white;
`;

class Header extends Component {
  render() {
    return (
      <HeaderPosition>
        <IconContext.Provider
          value={{ color: 'rgb(206, 24, 38)', size: '2.7rem' }}
        >
          <FaPinterest />
        </IconContext.Provider>{' '}
        <HeaderSearch />
        <HeaderUserButton bold text="Home" />
        <HeaderUserButton text="Following" />
        <HeaderUserButton text="user" />
        <IconContext.Provider value={{ color: 'gray', size: '3rem' }}>
          <div style={{ marginRight: '2.2rem' }}>
            <TiMessageTyping />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: 'gray', size: '3rem' }}>
          <div style={{ position: 'relative' }}>
            <TiBell />
            <RedDot>1</RedDot>
          </div>
        </IconContext.Provider>
        <DotDot>&nbsp;</DotDot>
      </HeaderPosition>
    );
  }
}

export default Header;
