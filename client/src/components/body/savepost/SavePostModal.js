import React, { useState } from 'react';
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

const renderContent = (loading, changeLoading, props) => {
  if (loading) {
    return <div className="lds-hourglass"></div>;
  }
  changeLoading(1);
  setTimeout(() => changeLoading(0), 1500);
  return <SavePopUpContent>{props.title}</SavePopUpContent>;
};

const SavePostModal = props => {
  const [loading, changeLoading] = useState(0);
  return ReactDOM.createPortal(
    <SavePopUpContainer onClick={e => handleClick(e, props.setFalse)}>
      <SavePopUp>{renderContent(loading, changeLoading, props)}</SavePopUp>
    </SavePopUpContainer>,
    document.querySelector('#modal')
  );
};

export default SavePostModal;
