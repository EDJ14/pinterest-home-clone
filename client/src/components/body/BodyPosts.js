import React, { Component } from 'react';
import styled from 'styled-components';

const Post = styled.div`
  width: 8rem;
  height: 15rem;
  background-color: red;
  display: inline-block;
  margin-right: 1rem;
`;

class BodyPosts extends Component {
  state = { posts: 0 };

  renderContent() {
    if (this.state.posts) {
      const res = [];
      for (let i = 0; i <= this.state.posts; i++) {
        console.log(this.state);
        res.push(<Post key={Math.random()} />);
      }
      return res;
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ posts: this.state.posts + 1 })}>
          CliCK
        </button>
        {this.renderContent()}
      </div>
    );
  }
}

export default BodyPosts;
