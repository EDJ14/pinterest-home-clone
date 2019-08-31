import React from 'react';
import styled from 'styled-components';

import { IconContext } from 'react-icons';
import { FaArrowUp } from 'react-icons/fa';

const ReturnTop = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  background-color: red;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  opacity: ${props => (props.scroll ? 1 : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

class ReturnToTop extends React.Component {
  state = { display: false };

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
    const scrolled = scrollPx / winHeightPx;
    console.log(scrollPx);
    if (scrollPx >= 200) {
      this.setState({ display: true });
    }

    if (scrollPx < 300) {
      this.setState({ display: false });
    }
  };

  handleClick = () => {
    document.documentElement.scrollTop = 0;
  };

  render() {
    return (
      <ReturnTop scroll={this.state.display} onClick={this.handleClick}>
        <IconContext.Provider value={{ size: '3rem', color: 'black' }}>
          <FaArrowUp />
        </IconContext.Provider>
      </ReturnTop>
    );
  }
}

export default ReturnToTop;
