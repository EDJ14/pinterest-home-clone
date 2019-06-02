import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Back = styled.button`
  margin-top: 5rem;
  height: 10rem;
  width: 10rem;
  background-color: red;
`;

const Modal = props => {
  const [show, setShow] = useState(0);
  return ReactDOM.createPortal(
    props.children,
    document.querySelector('#column')
  );
};

export default withRouter(Modal);
