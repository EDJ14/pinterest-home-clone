import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Transition, CSSTransition } from 'react-transition-group';
import * as actions from '../../actions';

import Modal from '../modal/Modal';

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
    width: 7rem;
    height: 4rem;
    border: none;
    top: 1rem;
    right: 1rem;
    position: absolute;
    background-color: red;
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

    &:focus .saveclick {
      margin-left: 7.5rem;
      width: 10rem;
      height: 20rem;
      background-color: white;
      box-shadow: 0 0 0 4.5px rgb(0, 132, 255, 0.5);
      outline: 0;      
      position: absolute;
      top: 0;
    }

    &:hover {
      background-color: rgb(150, 9, 20);
    }
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

const randomColor = () => {
  const color = ['blue', 'green', 'red', 'orange', 'yellow', 'brown'][
    Math.floor(Math.random() * 6)
  ];
  return color;
};

const PostPic = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  background-image: url(${props => props.img});
  background-color: ${props => (props.img ? 'white' : randomColor())};
  border-radius: 10px;
`;

const PostDetails = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const duration = 3000;
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

/*
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};
*/

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = { inProp: this.props.num <= this.props.postNumber };
    this.styleCheck = React.createRef();
  }

  async componentDidUpdate() {
    setTimeout(() => {
      if (this.styleCheck.current.style.opacity == 0) {
        this.styleCheck.current.style.opacity = 1;
      }
    }, 15000);

    await new Promise(resolve => setTimeout(resolve, 1));
    this.state.inProp ? null : this.setState({ inProp: true });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { num } = this.props;

    if (num == nextProps.userPost.length) {
      return (
        nextProps.userPost[num - 1].title.length != 0 ||
        nextProps.postNumber == num
      );
    }
    return nextProps.postNumber == num; // need num because all divs rendered first as invisible
  }

  renderName() {
    const { num } = this.props;
    const { userPost } = this.props;
    const post = this.props.posts[num - 1];
    if (userPost.length >= num) {
      if (this.props.userPost[num - 1].title.length != 0) {
        return this.props.userPost[num - 1].title;
      }
    }
    return post ? post[0].username : 'Author';
  }

  renderImg() {
    const { num } = this.props;
    const { userPost } = this.props;
    const post = this.props.posts[num - 1];
    if (userPost.length >= num) {
      if (userPost[num - 1].body.length != 0) {
        return userPost[num - 1].body;
      }
    }
    if (post) {
      return post[0].image_url;
    }
    return null;
  }

  save = e => {
    e.preventDefault();
  };

  renderContent() {
    const { num } = this.props;

    if (num <= this.props.postNumber) {
      return (
        <Transition in={this.state.inProp} timeout={duration}>
          {state => (
            <Link
              to={{ pathname: 'delete', state: { title: this.renderName() } }}
            >
              <Post
                ref={this.styleCheck}
                height={this.props.height}
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}
              >
                <div className="overlay" />
                <button onClick={e => this.save(e)} className="savebut">
                  Save
                  <div className="saveclick" />
                </button>
                <div className="sourcesite">website.com</div>
                <PostPic img={this.renderImg()} />
                <PostDetails>
                  <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {this.renderName()}
                  </p>
                  <p>Date</p>
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

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  actions
)(PostCard);
