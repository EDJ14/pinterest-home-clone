import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Transition, CSSTransition } from 'react-transition-group';

import SavedPostStatus from './savepost/SavedPostStatus';
import magnifyCursor from '../../img/magnify.cur';

const Post = styled.div`
  width: 100%;
  height: ${props => props.height}rem;
  background-color: white;
  border-radius: 10px;
  margin: 1rem 0.333rem;

  position: relative;

  display: grid;
  grid-template-rows: 92.5% 7.5%;
  grid-template-columns: 1fr 1fr;

  cursor: url(${magnifyCursor}), auto;

  &:hover > .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, .5);
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
    
    top: 1rem;
    right: 1rem;
    position: absolute;
    display: inline-block;
    visibility: visible;
    opacity: 1;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    line-height: 4rem;
    color: white;
    font-weight: 300;
    z-index: 5;

  }

    &:hover > .sourcesite {
      width: 7rem;
      height: 4rem;
      bottom: 10%;
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

export const randomColor = () => {
  const color = ['blue', 'green', 'red', 'orange', 'yellow', 'brown'][
    Math.floor(Math.random() * 6)
  ];
  return color;
};

const PostPic = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  border-radius: 10px;
`;

const PostDetails = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const duration = 1000;
const defaultStyle = {
  transition: `all ${duration}ms`,
  transform: 'translateY(-5rem)',
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1, transform: 'translateY(0)' },
  entered: { opacity: 1, transform: 'translateY(0)' },
  exiting: { opacity: 0, transform: 'translateY(-5rem)' },
  exited: { opacity: 0, transform: 'translateY(-5rem)' }
};

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inProp: this.props.num <= this.props.postNumber
    };
    this.styleCheck = React.createRef();
    this.imgCheck = React.createRef();
  }

  checkStyles = () => {
    const { num } = this.props;
    const post = this.props.posts[num - 1];
    let { style } = this.styleCheck.current;
    if (style.opacity == 0) {
      style.opacity = 1;
    }
    if (style.transform != 'translateY(0)') {
      style.transform = 'translateY(0)';
    }
    const computed = window
      .getComputedStyle(this.imgCheck.current)
      .getPropertyValue('background-image');
    if (!computed.startsWith('url("http://lorem') && post) {
      this.imgCheck.current.style.backgroundImage = `url(${post[0].image_url})`;
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { num } = this.props;

    if (nextProps.postNumber != num) {
      return false; // need num because all divs rendered first as invisible. Tried using length of posts array but was slow
    }
    return true;
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    setTimeout(this.checkStyles, duration * 1.5);

    await new Promise(resolve => setTimeout(resolve, 1)); // react renders stuff too fast i think
    this.state.inProp ? null : this.setState({ inProp: true });
  }

  renderName() {
    const { num } = this.props;
    const post = this.props.posts[num - 1];

    return post ? post[0].username : 'Author';
  }

  renderImg() {
    const { num } = this.props;
    const post = this.props.posts[num - 1];

    if (post) {
      console.log(this.props.postNumber, post);
      return post[0].image_url;
    }
    return null;
  }

  renderContent() {
    const { num } = this.props;
    const { postNumber } = this.props;
    const color = randomColor();
    const height = Math.round(Math.random() * 40 + 20);

    if (num <= this.props.postNumber) {
      return (
        <Transition in={this.state.inProp} timeout={duration}>
          {state => (
            <Link
              to={{
                pathname: `/detail/${postNumber}`,
                query: { postNumber, post: this.props.posts[0] }
              }}
              style={{ textDecoration: 'none' }}
            >
              <Post
                id="post"
                ref={this.styleCheck}
                height={height}
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}
              >
                <div className="overlay" />
                <div className="savebut">
                  <SavedPostStatus postNumber={this.props.postNumber} />
                </div>
                <div className="sourcesite">websitessss.com</div>
                <PostPic
                  ref={this.imgCheck}
                  style={{
                    backgroundImage: `url(${this.renderImg()})`,
                    backgroundColor: color
                  }}
                />
                <PostDetails>
                  <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {this.renderName()}
                  </p>
                  <p>...</p>
                </PostDetails>
              </Post>
            </Link>
          )}
        </Transition>
      );
    } else {
      return <div style={{ width: '0', height: '0' }} />;
    }
  }

  render() {
    return this.renderContent();
  }
}

function mapStateToProps({ postNumber, posts }) {
  return { postNumber, posts };
}

export default connect(mapStateToProps)(PostCard);
