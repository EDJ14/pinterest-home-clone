import React, { Component } from 'react';
import styled from 'styled-components';

import BodyPosts from './BodyPosts';

const Body2 = styled.div`
  grid-column: 2 / -2;
  grid-row: 2 / -1;
  height: 30rem;
  background-color: green;
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
