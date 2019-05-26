import React from 'react';
import styled from 'styled-components';

import BodyBanner from './BodyBanner';
import Body2 from './BodyMain';

const BodyCont = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  background-color: rgb(218, 223, 232);

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 10vw 1fr 1fr 1fr 1fr 10vw;
  grid-template-rows: min-content min-content;
`;

export default () => {
  return (
    <BodyCont>
      <BodyBanner />
      <Body2 />
    </BodyCont>
  );
};
