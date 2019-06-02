import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Back = styled.button`
  margin-top: 5rem;
  height: 10rem;
  width: 10rem;
  background-color: red'
`;

const Modal = props => {
  return ReactDOM.createPortal(props.children, document.querySelector('#post'));
};

export default withRouter(Modal);
