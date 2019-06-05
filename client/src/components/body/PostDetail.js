import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { IconContext } from 'react-icons';

import { randomColor } from './PostCard';

const PostDetailCont = styled.div`
  height: calc(100vh - 6.5rem);
  margin-top: 6.5rem;
  width: 100vw;
  background-color: rgba(3, 3, 3, 0.05);

  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(15, 1fr);
`;

const PostDetailMaterial = styled.div`
  grid-row: 2 / 13;
  grid-column: 6 / 11;
  background-color: ${randomColor()};
  display: relative;
`;

const BackButtonCont = styled.div`
  display: flex;
  left: -38rem;
  top: 3rem;
  width: 10rem;

  &:hover {
    border-radius: 30%;
    background-color: rgba(3, 3, 3, 0.1);
    cursor: pointer;
  }

  &:active {
    box-shadow: 0 0 0 2.5px rgb(0, 132, 255, 0.5);
    background-color: white;
  }
`;

const BackButton = styled.button`
  text-decoration: none;
  top: 1.3rem;
  left: 4rem;
  border: none;
  background-color: transparent;
  color: black;
  font-weight: 900;
  font-size: 1.4rem;
  cursor: inherit;

  &:focus {
    outline: none;
    padding: 0;
    border: none;
    background: none;
  }
`;

const InfoBox = styled.div`
  grid-row: 3 / 10;
  grid-column: 12 / -2;
  width: 20rem;
  background-color: white;
`;

export const PostDetail = props => {
  console.log(props);
  return (
    <PostDetailCont>
      <Link
        to="/"
        style={{
          gridRow: '3 / 4',
          gridColumn: '2 / 3',
          textDecoration: 'none'
        }}
      >
        <BackButtonCont>
          <IconContext.Provider value={{ color: 'black', size: '4.5rem' }}>
            <MdKeyboardArrowLeft />
          </IconContext.Provider>
          <BackButton>Home</BackButton>
        </BackButtonCont>
      </Link>
      <PostDetailMaterial />
      <InfoBox />
    </PostDetailCont>
  );
};

export default PostDetail;
