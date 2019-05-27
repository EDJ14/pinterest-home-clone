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

const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Col3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Col4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Col5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

class BodyMain extends Component {
  render() {
    return (
      <Body2>
        <Col1>
          <BodyPosts />
        </Col1>
        <Col2>
          <BodyPosts />
        </Col2>
        <Col3>
          <BodyPosts />
        </Col3>
        <Col4>
          <BodyPosts />
        </Col4>
        <Col5>
          <BodyPosts />
        </Col5>
      </Body2>
    );
  }
}

export default BodyMain;
