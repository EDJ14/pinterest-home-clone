import React from 'react';
import styled from 'styled-components';

import BodyBanner from './BodyBanner';
import BodyMain from './BodyMain';

const BodyCont = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  background-color: white;

  position: relative;

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 5vw 1fr 1fr 1fr 1fr 1fr 5vw;
  grid-template-rows: min-content min-content;
`;

export default () => {
  return (
    <BodyCont>
      <BodyBanner />
      <BodyMain />
    </BodyCont>
  );
};
