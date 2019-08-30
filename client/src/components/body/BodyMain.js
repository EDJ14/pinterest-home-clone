import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Loadable from 'react-loadable';
import * as actions from '../../actions';

//import PostCard from './PostCard';
import ReturnToTop from './ReturnToTop';

const Body2 = styled.div`
  grid-column: 2 / -2;
  grid-row: 2 / -1;
  height: 30rem;

  position: relative;

  display: grid;
  grid-gap: 1.3rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: -8rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const PostsButtons = styled.button`
  border: none;
  background-color: rgb(215, 219, 226);
  border-radius: 20%;
  height: 7rem;
  width: 10rem;
  cursor: pointer;
  font-size: 2rem;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  &:active,
  &:focus {
    box-shadow: 0 0 0 4.5px rgb(0, 132, 255, 0.5);
    outline: 0;
  }
`;

const LoadableCard = Loadable({
  loader: () => import('./PostCard'),
  loading() {
    return <div>Loading...</div>;
  }
});

class BodyMain extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.scrollProgress);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollProgress);
  }

  scrollProgress = async () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

    if (scrolled >= '85%') {
      this.props.incrementPosts();
      this.props.fetchPosts(this.props.postNumber);
      //await new Promise(resolve => setTimeout(resolve, 500));
      //window.scrollTo(0, 70);
    }
  };

  handleClick = () => {
    this.props.incrementPosts();

    this.props.fetchPosts(this.props.postNumber);
  };

  postsForColumns(n, col, numColumns) {
    const res = [];
    for (let i = 1; i <= n; i++) {
      res.push(
        <LoadableCard
          key={i + (numColumns - 1) * (i - 1) + (col - 1)}
          num={i + (numColumns - 1) * (i - 1) + (col - 1)}
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
          {this.postsForColumns(
            Math.ceil(numberOfPosts / numberOfColumns),
            i,
            numberOfColumns
          )}
        </Col>
      );
    }
    return res;
  }

  deletePosts = () => {
    alert('???YOU SURE BOUT DAT??');

    this.props.deletePosts();
  };

  render() {
    return (
      <Body2 id="body">
        <ButtonContainer>
          <PostsButtons onClick={this.handleClick}>New Post</PostsButtons>
          <PostsButtons
            style={{ marginRight: '10rem' }}
            onClick={this.deletePosts}
          >
            Clear Posts
          </PostsButtons>
          <Link to="/new">
            <PostsButtons>Create Post</PostsButtons>
          </Link>
        </ButtonContainer>
        {this.renderColumnsAndPosts(4, 128)}
        <ReturnToTop />
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
