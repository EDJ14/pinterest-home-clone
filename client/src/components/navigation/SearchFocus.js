import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const DropDown = styled.div`
  position: relative;
  z-index: 999;
`;

const DropDownGray = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 92.5%;
  width: 100%;
  bottom: 0;
  left: 0;
`;

const DropDownContainer = styled.div`
  width: 70rem;
  @media (max-width: 930px) {
    width: 60rem;
  }

  @media (max-width: 768px) {
    width: 20rem;
  }

  height: 75rem;
  background-color: white;
  position: absolute;
  left: 7rem;
  top: -1rem;
`;

const renderStuff = () => {
  ['green', 'blue', 'red', 'black', 'brown'].map(color => <div>{color}</div>);
};

const SearchFocus = props => {
  return ReactDOM.createPortal(
    <DropDown>
      <DropDownGray onClick={props.closeModal}>
        <DropDownContainer>{renderStuff()}</DropDownContainer>
      </DropDownGray>
    </DropDown>,
    document.querySelector('#modal')
  );
};

export default SearchFocus;
