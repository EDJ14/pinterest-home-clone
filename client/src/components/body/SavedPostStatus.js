import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';

import * as actions from '../../actions';
import {
  MdThumbDown,
  MdThumbUp,
  MdStarBorder,
  MdHourglassEmpty
} from 'react-icons/md';
import { IconContext } from 'react-icons';

const SavedStatus = styled.div`
  background-color: ${props => (props.status ? 'black' : 'blue')};
  width: 7rem;
  height: 4rem;
  border: none;
`;

class SavedPostStatus extends Component {
  state = {
    isLoading: false,
    count: 0,
    color: 'white',
    likes: 0
  };

  handleClick = async (postID, userID) => {
    await axios.post('/api/savepost', [this.props.postNumber, 3]);
  };

  renderStar() {
    if (this.state.isLoading == 'LOAD') {
      return (
        <div>
          <div className="loader2">Loading...</div>
        </div>
      );
    }

    return (
      <IconContext.Provider
        value={{
          color: this.state.color,
          size: '4rem'
        }}
      >
        <MdStarBorder onClick={() => this.handleClick()} />
      </IconContext.Provider>
    );
  }

  render() {
    return this.renderStar();
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(
  mapStateToProps,
  actions
)(SavedPostStatus);
