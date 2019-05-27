import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import PostCard from './PostCard';

const PostsButtons = styled.button`
  position: absolute;
  top: 15rem;
  left: 3rem;
`;

class BodyPosts extends Component {
  state = { posts: 5 };

  renderContent() {
    //axios.get('/api/newpost/Eddie');
    /* if (this.state.posts - 1) {
      const res1 = [];
      const res2 = [];
      const res3 = [];
      const res4 = [];
      const res5 = [];

       for (let i = 1; i <= this.state.posts; i + 5) {
        if (this.state.posts % 5 == 0) {
          res5.push(<PostCard height={Math.random() * 40} />);
        } else if (this.state.posts % 4 == 0) {
          res4.push(<PostCard height={Math.random() * 40} />);
        } else if (this.state.posts % 3 == 0) {
          res3.push(<PostCard height={Math.random() * 40} />);
        } else if (this.state.posts % 2 == 0) {
          res2.push(<PostCard height={Math.random() * 40} />);
        } else {
          res1.push(<PostCard height={Math.random() * 40} />);
        }
      } */
    if (this.state.posts) {
      const res = [];
      for (let i = 0; i < this.state.posts; i++) {
        res.push(<PostCard height={Math.random() * 40 + 20} />);
      }
      return res;
    }
  }

  render() {
    return this.renderContent();
  }
}

export default BodyPosts;

/*       <PostsButtons
        onClick={() => this.setState({ posts: this.state.posts + 1 })}
      >
        CliCK
      </PostsButtons>, */
