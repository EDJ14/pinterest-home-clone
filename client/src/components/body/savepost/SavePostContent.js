import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
  grid-row: 1;
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 4rem;
`;

const PictureBox = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  background-color: red;
  border-radius: 4%;
`;

const GrayCircle = styled.div`
  width: min-content;
  background-color: gray;
  border-radius: 50%;
`;

const SavePostContent = props => {
  const [loading, setLoading] = useState(0);
  return [<HeaderBox>Choose board</HeaderBox>, <PictureBox></PictureBox>];
};

export default SavePostContent;
