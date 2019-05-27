import React, { Component } from 'react';
import styled from 'styled-components';

const Post = styled.div`
  width: 100%;
  height: ${props => props.height}rem;
  background-color: white;
  border-radius: 10px;
  margin: 1rem 0.333rem;

  position: relative;

  display: grid;
  grid-template-rows: 80% 20%;
  grid-template-columns: 1fr 1fr;

  &:hover > .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgb(198, 201, 206);
    opacity: 0.5;
    border-radius: 10px;
    transform: scale(1.05);
    transition: all 0.2s ease-out;
  }
`;

const PostPic = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  background-image: url(https://source.unsplash.com/random/250x250);
  border-radius: 10px;
`;

const PostDetails = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

class PostCard extends Component {
  render() {
    return (
      <Post height={this.props.height}>
        <div className="overlay" />
        <PostPic />
        <PostDetails>
          <p>Author</p>
          <p>Date</p>
        </PostDetails>
      </Post>
    );
  }
}

export default PostCard;
