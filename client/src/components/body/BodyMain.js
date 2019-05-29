import React, { Component } from 'react';
import styled from 'styled-components';

import BodyPosts from './BodyPosts';

const Body2 = styled.div`
  grid-column: 2 / -2;
  grid-row: 2 / -1;
  height: 30rem;

  position: relative;

  display: grid;
  grid-gap: 1.3rem;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
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

const PostsButtons = styled.button`
  position: absolute;
  top: -2rem;
  left: 3rem;
`;

class BodyMain extends Component {
  state = { posts: 0 };

  render() {
    return (
      <Body2>
        <PostsButtons
          onClick={() => this.setState({ posts: this.state.posts + 1 })}
        >
          CliCK
        </PostsButtons>
        <Col1>
          <BodyPosts num={this.state.posts} />
        </Col1>
        <Col2>
          <BodyPosts num={this.state.posts - 1} />
        </Col2>
        <Col3>
          <BodyPosts num={this.state.posts - 2} />
        </Col3>
        <Col4>
          <BodyPosts num={this.state.posts - 3} />
        </Col4>
        <Col5>
          <BodyPosts num={this.state.posts - 4} />
        </Col5>
      </Body2>
    );
  }
}

export default BodyMain;
