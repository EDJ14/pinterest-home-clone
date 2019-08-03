import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(3, 3, 3, 0.3);
`;

const LoadingScreen = props => {
  setTimeout(() => props.history.push('/'));
  return <Loading />;
};

export default withRouter(LoadingScreen);
