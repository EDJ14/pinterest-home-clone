import React from 'react';
import styled from 'styled-components';

const BodyBan = styled.div`
  grid-column: 3 / -3;
  grid-row: 1 / 2;
  margin: 1rem 0;
  height: 15rem;
  background-color: red;
  display: flex;
  flex-direction: column;
`;

const UserWelcome = styled.h1`
  background-color: white;
  text-align: center;
  margin-bottom: 1rem;
`;

const FeaturedPosts = styled.div`
  width: 100%;
  height: calc(100% - 5rem);
  background-color: blue;
  margin-top: auto;
`;

export default () => {
  return (
    <BodyBan>
      <UserWelcome>Hi Eddie! Your feed is made up of these topics</UserWelcome>
      <FeaturedPosts />
    </BodyBan>
  );
};
