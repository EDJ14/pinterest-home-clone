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
  top: 6.5rem;
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

  height: 80%;
  background-color: white;
  position: absolute;
  left: 7rem;
  top: -1rem;

  display: grid;
  grid-template-rows: 1fr 3fr 3fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
`;

const DropDownItem = styled.div`
  background-color: ${props => props.color};
`;

const IdeasForYou = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / -1;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  padding: 1rem;
`;
const Trending = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / -1;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  padding: 1rem;
`;

const Placeholder = styled.div`
  background-color: red;
  background-border-radius: 3%;
`;

const SearchFocus = props => {
  return ReactDOM.createPortal(
    <DropDown>
      <DropDownGray onClick={props.closeModal}>
        <DropDownContainer onClick={e => e.stopPropagation()}>
          <IdeasForYou>
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
          </IdeasForYou>
          <div>TRENDING IDEERS</div>
          <Trending>
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
          </Trending>
        </DropDownContainer>
      </DropDownGray>
    </DropDown>,
    document.querySelector('#modal')
  );
};

export default SearchFocus;
