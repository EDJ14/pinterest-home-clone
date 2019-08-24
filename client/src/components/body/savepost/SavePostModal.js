import React from 'react';
import ReactDOM from 'react-dom';
import history from '../../history';
import styled from 'styled-components';

const SavePopUpContainer = styled.div`
  position: relative;
  z-index: 999;
`;

const SavePopUp = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SavePopUpContent = styled.div`
  background-color: white;
  border-radius: 5%;
  height: 30vh;
  width: 30vw;
`;

const handleClick = (e, setFalse) => {
  e.preventDefault();
  setFalse();
};

const SavePostModal = props => {
  return ReactDOM.createPortal(
    <SavePopUpContainer onClick={e => handleClick(e, props.setFalse)}>
      <SavePopUp>
        <SavePopUpContent>Save Post</SavePopUpContent>
      </SavePopUp>
    </SavePopUpContainer>,
    document.querySelector('#modal')
  );
};

export default SavePostModal;
