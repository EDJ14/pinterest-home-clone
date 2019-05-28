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
    left: 0.5rem;
    top: 0;
  }

  &::after {
    right: 0.6rem;
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

const ShadowHover = styled.div`
  cursor: pointer;
  opacity: 1;
  border-radius: 50%;

  &:hover {
    width: 3rem;
    height: 3rem;
    transform: scale(1.1)
    opacity: .5;
    border-radius: 50%;
    background-color: rgba(0,0,0,.2);
  }
`;

class Header extends Component {
  render() {
    return (
      <HeaderPosition>
        <IconContext.Provider
          value={{ color: 'rgb(206, 24, 38)', size: '2.7rem' }}
        >
          <ShadowHover>
            <FaPinterest />
          </ShadowHover>
        </IconContext.Provider>
        <HeaderSearch />
        <HeaderUserButton bold text="Home" />
        <HeaderUserButton text="Following" />
        <HeaderUserButton text="user" />
        <IconContext.Provider value={{ color: 'gray', size: '3rem' }}>
          <ShadowHover>
            <TiMessageTyping />
          </ShadowHover>
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
