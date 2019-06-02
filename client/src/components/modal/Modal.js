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
  return ReactDOM.createPortal(
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(3,3,3,.4)',
        position: 'absolute',
        top: '0'
      }}
    >
      <Back onClick={() => props.history.push('/')} />
    </div>,
    document.querySelector('#modal')
  );
};

export default withRouter(Modal);
