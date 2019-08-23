import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledModal = styled.div`
  width: 70vw;
  height: 70vh;
  border-radius: 5%;
  background-color: rgba(3, 3, 3, 0.3);
  position: absolute;
  top: 0;
`;

const JSX_MODAL = (
  <StyledModal>
    THIS IS SOME TEXT IN THE MODAL // add some UI features here
  </StyledModal>
);

function Modal(props) {
  return ReactDOM.createPortal(JSX_MODAL, document.querySelector('#modal'));
}

export default Modal;
