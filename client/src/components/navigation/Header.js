import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
  height: 6.5rem;
  background-color: white;
  padding: 0.9rem 1.75rem;
  box-shadow: 0 0 2px 2px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1000;
`;

const ButtonsCont = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  justify-content: space-between;
  width: 40%;

  @media (max-width: 1090px) {
    width: 80%;
  }
`;

const DotDotCont = styled.div`
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
  right: 1.5rem;
  position: relative;
  margin-left: 1.5rem

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transform: scale(1.25);
  }
`;

const DotDot = styled.span`
  margin-left: 2rem;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: gray;
  position: absolute;
  display: inline-block;
  margin: 0 1.3rem;
  top: 1.25rem;

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
    left: 0.9rem;
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
  right: 0.35rem;
  text-align: center;
  color: white;
`;

class Header extends Component {
  renderAuth = () => {
    if (this.props.auth == null) {
      return <HeaderUserButton text="Loading" />;
    } else if (this.props.auth == false || this.props.auth.username == null) {
      return <HeaderUserButton text="Login" />;
    }
    const { username } = this.props.auth;
    return (
      <HeaderUserButton
        text={username.length > 6 ? username.slice(0, 6) + '...' : username}
      />
    );
  };

  render() {
    return (
      <HeaderPosition>
        <Link to="/">
          <div style={{ marginTop: '.5rem', width: '5rem' }}>
            <IconContext.Provider
              value={{
                color: 'rgb(206, 24, 38)',
                size: '2.7rem',
                width: '3rem'
              }}
            >
              <FaPinterest />
            </IconContext.Provider>
          </div>
        </Link>
        <HeaderSearch />
        <ButtonsCont>
          <HeaderUserButton bold text="Home" />
          <HeaderUserButton text="Following" />
          <a href="/auth/google">{this.renderAuth()}</a>
          <IconContext.Provider value={{ color: 'gray', size: '3rem' }}>
            <div style={{ padding: '0 1.5rem' }}>
              <TiMessageTyping />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: 'gray', size: '3rem' }}>
            <div style={{ position: 'relative', padding: '0 .5rem' }}>
              <TiBell />
              <RedDot>{Math.ceil(Math.random() * 20)}</RedDot>
            </div>
          </IconContext.Provider>
          <DotDotCont>
            <a href="/api/logout">
              <DotDot>&nbsp;</DotDot>
            </a>
          </DotDotCont>
        </ButtonsCont>
      </HeaderPosition>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
