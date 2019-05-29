import React, { Component } from 'react';
import styled from 'styled-components';

import PostCard from './PostCard';

class BodyPosts extends Component {
  renderContent() {
    if (this.props.num) {
      const res = [];
      for (let i = 0; i < this.props.num; i++) {
        res.push(
          <PostCard key={Math.random()} height={Math.random() * 40 + 20} />
        );
      }
      return res;
    }

    return null;
  }

  render() {
    return this.renderContent();
  }
}

export default BodyPosts;
