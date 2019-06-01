import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as actions from '../../actions';

import PostCard from './PostCard';

import magnifyCursor from '../../img/magnify.cur';

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

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: url(${magnifyCursor}), auto;
`;

const PostsButtons = styled.button`
  position: absolute;
  top: -2rem;
  left: 3rem;
`;

const UserPostsButtons = styled.button`
  top: 2rem;
  left: 17rem;
`;

class BodyMain extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.scrollProgress);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollProgress);
  }

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

    console.log(scrolled);

    if (scrolled == '100%') {
      this.props.incrementPosts();

      this.props.fetchPosts(this.props.postNumber);
    }

    /*this.setState({
      scrolled: scrolled
    });*/
  };

  handleClick = () => {
    this.props.incrementPosts();

    this.props.fetchPosts(this.props.postNumber);
  };

  postsForColumns(n, col) {
    const res = [];
    for (let i = 1; i <= n; i++) {
      res.push(
        <PostCard
          key={i + 4 * (i - 1) + (col - 1)}
          num={i + 4 * (i - 1) + (col - 1)}
          height={Math.random() * 40 + 20}
          count={0}
        />
      );
    }
    return res;
  }

  renderColumnsAndPosts(numberOfColumns, numberOfPosts) {
    const res = [];
    for (let i = 1; i <= numberOfColumns; i++) {
      res.push(
        <Col key={i}>
          {this.postsForColumns(Math.ceil(numberOfPosts / 5), i)}
        </Col>
      );
    }
    return res;
  }

  render() {
    return (
      <Body2>
        <PostsButtons onClick={this.handleClick}>CliCK</PostsButtons>
        <Link to="/new" style={{ position: 'absolute', top: '-5rem' }}>
          <UserPostsButtons>NewPost</UserPostsButtons>
        </Link>
        {this.renderColumnsAndPosts(5, 100)}
      </Body2>
    );
  }
}

function mapStateToProps({ postNumber }) {
  return { postNumber };
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
  }

  //-----------------OLD---------------------------------
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
    const { posts } = this.props;

    let i = 0;
    while (i < numPosts) {
      col0.push(<PostCard post={posts[i]} />);
      i++;
      i < numPosts ? col1.push(<PostCard post={posts[i]} />) : false;
      i++;
      i < numPosts ? col2.push(<PostCard post={posts[i]} />) : false;
      i++;
      i < numPosts ? col3.push(<PostCard post={posts[i]} />) : false;
      i++;
      i < numPosts ? col4.push(<PostCard post={posts[i]} />) : null;
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
  ------------OLD--------------------------------------------

  <Col0>
          <PostCard num={1} />
          <PostCard num={6} />
        </Col0>
        <Col1>
          <PostCard num={2} />
        </Col1>
        <Col2>
          <PostCard num={3} />
        </Col2>
        <Col3>
          <PostCard num={4} />
        </Col3>
        <Col4>
          <PostCard num={5} />
        </Col4>

        */
