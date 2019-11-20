import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import history from '../../history';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import SavePostContent from './SavePostContent';

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
  border-radius: 2%;
  height: 75%;
  width: 50%;
  padding: 4rem;
  display: grid;
  grid-template-rows: 1fr 5fr 5fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
`;

const duration = 400;
const defaultStyle = {
  transition: `all ${duration}ms`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1, transform: 'scale(1)' },
  entered: { opacity: 1, transform: 'scale(1)' },
  exiting: { opacity: 0, transform: 'scale(0)' },
  exited: { opacity: 0, transform: 'scale(0)' }
};

const handleClick = (e, setFalse) => {
  e.preventDefault();
  setFalse();
};

const SavePostModal = props => {
  const [inState, setIn] = useState(false);

  useEffect(() => {
    setIn(true);
  });

  return ReactDOM.createPortal(
    <Transition in={inState} timeout={duration}>
      {state => (
        <SavePopUpContainer onClick={e => handleClick(e, props.setFalse)}>
          <SavePopUp>
            <SavePopUpContent
              onClick={e => e.stopPropagation()}
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <SavePostContent post={props.post} num={props.postNum} />
            </SavePopUpContent>
          </SavePopUp>
        </SavePopUpContainer>
      )}
    </Transition>,
    document.querySelector('#modal')
  );
};

export default SavePostModal;
