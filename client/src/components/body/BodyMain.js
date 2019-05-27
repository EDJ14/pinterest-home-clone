import React, { Component } from 'react';
import styled from 'styled-components';

import BodyPosts from './BodyPosts';

const Body2 = styled.div`
  grid-column: 2 / -2;
  grid-row: 2 / -1;
  height: 30rem;

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
`;

class BodyMain extends Component {
  render() {
    return (
      <Body2>
        <BodyPosts />
      </Body2>
    );
  }
}

export default BodyMain;
