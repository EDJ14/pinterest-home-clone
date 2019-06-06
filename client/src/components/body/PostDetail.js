import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { IconContext } from 'react-icons';

import { randomColor } from './PostCard';

const PostDetailContainer = styled.div`
  height: calc(100vh - 6.5rem);
  margin-top: 6.5rem;
  width: 100vw;
  background-color: rgba(3, 3, 3, 0.05);

  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(15, 1fr);
`;

const PostContainer = styled.div`
  grid-row: 3 / 14;
  grid-column: 6 / 11;
  border: 2rem solid white;
  border-radius: 3%;

  display: flex;
  flex-direction: column;
`;

const PostToolbar = styled.div`
  width: 100%;
  height: 10%;
  background-color: white;
  display: flex;
  justify-content: flex-end;
`;

const PostContents = styled.div`
  width: 100%;
  height: 90%;
  border-radius: inherit;
  background-image: url(${props => props.image_url});
  background-color: ${randomColor()};
  display: relative;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(50%);
  }
`;

const BackButtonContainer = styled.div`
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
  }
`;

const InfoBox = styled.div`
  grid-row: 3 / 10;
  grid-column: 12 / -2;
  width: 20rem;
  background-color: white;
`;

function renderImg(props) {
  const post = props.location.query.post;
  if (post) {
    return post[0].image_url;
  }
  return null;
}

export const PostDetail = props => {
  return (
    <PostDetailContainer>
      <Link
        to="/"
        style={{
          gridRow: '3 / 4',
          gridColumn: '2 / 3',
          textDecoration: 'none'
        }}
      >
        <BackButtonContainer>
          <IconContext.Provider value={{ color: 'black', size: '4.5rem' }}>
            <MdKeyboardArrowLeft />
          </IconContext.Provider>
          <BackButton>Home</BackButton>
        </BackButtonContainer>
      </Link>
      <PostContainer>
        <PostToolbar />
        <PostContents image_url={renderImg(props)} />
      </PostContainer>
      <InfoBox />
    </PostDetailContainer>
  );
};

export default PostDetail;
