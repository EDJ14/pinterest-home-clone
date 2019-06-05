import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderUser = styled.button`
  width: min-content;
  height: min-content;
  padding: 0 .5rem;
  border: none;
  background-color: white
  z-index: 10;
  font-weight: ${props => (props.bold ? 'bold' : '')}
  font-family: inherit;
  cursor: pointer;
  font-size: ${props =>
    props.text.length > 5 && props.text == 'Loading' ? '1rem' : '1.5rem'}

`;

class HeaderUserButton extends Component {
  /*testSQL = async () => {
    //const res = await axios.get('/api/tags');
    console.log('hi');
  };*/

  render() {
    return (
      <HeaderUser text={this.props.text} bold={this.props.bold}>
        {this.props.text}
      </HeaderUser>
    );
  }
}

export default HeaderUserButton;
