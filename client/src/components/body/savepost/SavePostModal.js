import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(3, 3, 3, 0.3);
  position: absolute;
  top: 0;
  margin: 0 auto;
`;

const handleClick = e => {
  e.stopPropagation();
  console.log('grey');
};

const JSX_MODAL = (
  <StyledModal onClick={handleClick}>
    <div
      style={{
        backgroundColor: 'red',
        height: '40rem',
        width: '40rem',
        margin: '0 auto'
      }}
    >
      TESSST
    </div>
  </StyledModal>
);

function Modal(props) {
  return ReactDOM.createPortal(JSX_MODAL, document.querySelector('#modal'));
}

export default Modal;
