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
  padding: 2rem;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
`;

const DropDownItems = styled.div`
  background-color: ${props => props.color};
`;

const renderStuff = () => {
  return [
    'green',
    'blue',
    'red',
    'black',
    'brown',
    'green',
    'blue',
    'red',
    'black',
    'brown',
    'red',
    'blue'
  ].map(color => <DropDownItems color={color} />);
};

const SearchFocus = props => {
  return ReactDOM.createPortal(
    <DropDown>
      <DropDownGray onClick={props.closeModal}>
        <DropDownContainer onClick={e => e.stopPropagation()}>
          {renderStuff()}
        </DropDownContainer>
      </DropDownGray>
    </DropDown>,
    document.querySelector('#modal')
  );
};

export default SearchFocus;
