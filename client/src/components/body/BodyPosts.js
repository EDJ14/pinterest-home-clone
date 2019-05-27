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
  state = { posts: 0 };

  renderContent() {
    //axios.get('/api/newpost/Eddie');
    if (this.state.posts) {
      const res = [];
      for (let i = 0; i < this.state.posts; i++) {
        res.push(<PostCard height={Math.random() * 40} />);
      }
      return res;
    }
  }

  render() {
    return [
      <PostsButtons
        onClick={() => this.setState({ posts: this.state.posts + 1 })}
      >
        CliCK
      </PostsButtons>,
      this.renderContent()
    ];
  }
}

export default BodyPosts;
