import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { IconContext } from 'react-icons';
import { TiMessageTyping, TiBell } from 'react-icons/ti';
import { FaPinterest } from 'react-icons/fa';

import HeaderUserButton from './HeaderUserButton';
import HeaderSearch from './HeaderSearch';
import RedDot from './reddot';

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
  z-index: 10;
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

const LogoCont = styled.div`
  margin: 0.5rem 0 0 0.5rem;
  width: 5rem;
  position: relative;

  .shadow {
    &:hover {
      width: 3rem;
      height: 3rem;
      border-radius: 100%;
      transform: scale(1.6);
      background-color: rgb(205, 208, 214);
      position: absolute;
      top: -1.8rem;

      & > * {
        transform: scale(0.625);
      }

      &:active {
        box-shadow: 0 0 0 2.5px rgb(0, 132, 255, 0.5);
      }
    }
  }
`;

class Header extends Component {
  renderAuth = () => {
    if (this.props.auth == null) {
      return <HeaderUserButton text="Loading" />;
    } else if (this.props.auth == false) {
      return <HeaderUserButton text="Login" />;
    } else if (this.props.auth.username == null) {
      let user = 'user 100';
      return <HeaderUserButton text={user} />;
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
          <LogoCont>
            <div className="shadow">
              <IconContext.Provider
                value={{
                  color: 'rgb(206, 24, 38)',
                  size: '3rem',
                  width: '3rem'
                }}
              >
                <FaPinterest />
              </IconContext.Provider>
            </div>
          </LogoCont>
        </Link>
        <HeaderSearch />
        <ButtonsCont>
          <HeaderUserButton bold text="Home" />
          <HeaderUserButton text="Following" />
          <a href="/api/auth/google">{this.renderAuth()}</a>
          <IconContext.Provider value={{ color: 'gray', size: '3rem' }}>
            <div style={{ padding: '0 1.5rem' }}>
              <TiMessageTyping />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: 'gray', size: '3rem' }}>
            <div style={{ position: 'relative', padding: '0 .5rem' }}>
              <TiBell />
              <RedDot />
            </div>
          </IconContext.Provider>
          <DotDotCont>
            <a href="/api/logout" style={{ marginTop: '.3rem' }}>
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
