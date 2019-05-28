import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const HeaderUser = styled.button`
  width: min-content;
  height: min-content;
  padding: 0 2rem;
  border: none;
  background-color: white
  z-index: 10;
  font-weight: ${props => (props.bold ? 'bold' : '')}
  font-family: inherit;
`;

class HeaderUserButton extends Component {
  /*testSQL = async () => {
    //const res = await axios.get('/api/tags');
    console.log('hi');
  };*/

  render() {
    return <HeaderUser bold={this.props.bold}>{this.props.text}</HeaderUser>;
  }
}

export default HeaderUserButton;
