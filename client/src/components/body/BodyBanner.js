import React from 'react';
import styled from 'styled-components';

const BodyBan = styled.div`
  grid-column: 3 / -3;
  grid-row: 1 / 2;
  height: 15rem;
  background-color: red;
`;

export default () => {
  return <BodyBan />;
};
