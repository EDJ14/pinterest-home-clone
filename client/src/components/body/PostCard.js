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
    transform: scale(1.035);
    transition: all 0.2s ease-out;
  }

  .savebut, .sourcesite {
    display: none;
    visibility: hidden;
    }

  &:hover > .savebut {
    width: 7rem;
    height: 4rem;
    top: 1rem;
    right: 1rem;
    position: absolute;
    background-color: red;
    display: inline-block;
    visibility: visible;
    opacity: 1;
    border-radius: 10px;
    transition: all 0.2s ease-out;
    cursor: pointer;
    text-align: center;
    line-height: 4rem;
    color: white;
    font-weight: 300;

    &:hover {
      background-color: rgb(150, 9, 20);
    }
  }

    &:hover > .sourcesite {
      width: 7rem;
      height: 4rem;
      bottom: 23%;
      left: 1rem;
      position: absolute;
      background-color: rgb(58, 54, 54);
      display: inline-block;
      visibility: visible;
      opacity: 1;
      border-radius: 10px;
      transition: all 0.2s ease-out;
      cursor: pointer;
      text-align: center;
      line-height: 4rem;
      color: white;
      font-weight: 300;
  
      &:hover {
        color: black;
      }
    }
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
        <div className="savebut">Save</div>
        <div className="sourcesite">website.com</div>
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
