import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { Transition, CSSTransition } from 'react-transition-group';

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
    top: 1rem;
    right: 1rem;
    position: absolute;
    background-color: red;
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

const duration = 5000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 1 }
};

class PostCard extends Component {
  state = { postFromUser: { title: this.props.userPost || '' }, inProp: false };

  sleep = time => {
    return new Promise(resolve => setTimeout(resolve, time));
  };

  async componentDidUpdate() {
    if (this.props.num == 1) {
      console.log('props', this.props);
    }
    await new Promise(resolve => setTimeout(resolve, 50));
    this.state.inProp ? null : this.setState({ inProp: true });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.num == 1) {
      console.log('nextState of 1', nextState);
    }
    return (
      nextProps.postNumber == this.props.num ||
      (nextState.postFromUser.title.length != 0 && this.props.num == 1)
    );
  }

  renderName() {
    const post = this.props.posts[this.props.num - 1];
    if ((this.props.num == 1) & (this.state.postFromUser.title.length != 0)) {
      return this.state.postFromUser.title;
    }
    return post ? post[0].username : 'Author';
  }

  renderContent() {
    const post = this.props.posts[this.props.num - 1]; // get post details from complete array of posts stored in redux
    if (this.props.num <= this.props.postNumber) {
      return (
        <Transition in={this.state.inProp} timeout={0}>
          {state => (
            <Post
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
              height={this.props.height}
            >
              <div className="overlay" />
              <div onClick={this.savePost} className="savebut">
                Save
              </div>
              <div className="sourcesite">website.com</div>
              <PostPic img={post ? post[0].image_url : null} />
              <PostDetails>
                <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                  {this.renderName()}
                </p>
                <p>Date</p>
              </PostDetails>
            </Post>
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

export default connect(mapStateToProps)(PostCard);

/*state = { imgURL: '', inProp: false };

  sleep = time => {
    return new Promise(resolve => setTimeout(resolve, time));
  };

  async componentDidMount() {
    await this.sleep(50);
    this.setState({ inProp: true });
  }

  savePost = e => {
    console.log(e);
  };

  render() {
    return (
      <Transition in={this.state.inProp} timeout={500}>
        {state => (
          <Post
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
            height={Math.random() * 40 + 20}
          >
            <div className="overlay" />
            <div onClick={this.savePost} className="savebut">
              Save
            </div>
            <div className="sourcesite">website.com</div>
            <PostPic
              img={this.props.post ? this.props.post[0].image_url : null}
            />
            <PostDetails>
              <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                {this.props.post ? this.props.post[0].username : null}
              </p>
              <p>Date</p>
            </PostDetails>
          </Post>
        )}
      </Transition>
    );
  }
}*/
