import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actions from '../../actions';

import PostCard from './PostCard';
import axios from 'axios';

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

const Col0 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

const PostsButtons = styled.button`
  position: absolute;
  top: -2rem;
  left: 3rem;
`;

class BodyMain extends Component {
  state = { numClicks: 0 };

  handleClick = async () => {
    try {
      await this.props.fetchPosts(this.state.numClicks);
      this.setState({ numClicks: this.state.numClicks + 1 });
    } catch (err) {
      this.setState({
        numClicks: this.state.numClicks + 1
      });
    }
  };

  render1 = () => {
    const col0 = [];
    const col1 = [];
    const col2 = [];
    const col3 = [];
    const col4 = [];
    const numPosts = this.props.posts.length || this.state.numClicks;
    const posts = this.props.posts;

    let i = 0;
    while (i < numPosts) {
      col0.push(<PostCard post={posts[i]} />);
      i++;
      i < numPosts ? col1.push(<PostCard post={posts[i]}/>) : false;
      i++;
      i < numPosts ? col2.push(<PostCard post={posts[i]}  />) : false;
      i++;
      i < numPosts
        ? col3.push(<PostCard post={this.props.posts[i]} />)
        : false;
      i++;
      i < numPosts
        ? col4.push(<PostCard post={this.props.posts[i]}  />)
        : null;
      i++;
    }

    const ret = [
      <Col0>{col0}</Col0>,
      <Col1>{col1}</Col1>,
      <Col2>{col2}</Col2>,
      <Col3>{col3}</Col3>,
      <Col4>{col4}</Col4>
    ];

    return ret;
  };

  render() {
    return (
      <Body2>
        <PostsButtons onClick={this.handleClick}>CliCK</PostsButtons>
        {this.render1()}
      </Body2>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(
  mapStateToProps,
  actions
)(BodyMain);

/*  render() {
    this.render1();
    return (
      <Body2>
        <PostsButtons onClick={this.handleClick}>CliCK</PostsButtons>
        <Col0>
          <BodyPosts posts={this.state.posts} />
        </Col0>
        <Col1>
          <BodyPosts num={this.state.posts} />
        </Col1>
        <Col2>
          <BodyPosts num={this.state.posts} />
        </Col2>
        <Col3>
          <BodyPosts num={this.state.posts} />
        </Col3>
        <Col4>
          <BodyPosts num={this.state.posts} />
        </Col4>
      </Body2>
    );
  }*/
