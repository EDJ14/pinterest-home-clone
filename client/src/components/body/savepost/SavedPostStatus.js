import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';

import * as actions from '../../../actions';

import SavePostModal from './SavePostModal';
/*mport {
  MdThumbDown,
  MdThumbUp,
  MdStarBorder,
  MdHourglassEmpty
} from 'react-icons/md';
import { IconContext } from 'react-icons';*/

const SavedStatus = styled.div`
  background-color: ${props => (props.status ? 'black' : 'blue')};
  width: 7rem;
  height: 4rem;
  border: none;
`;

const SaveButton = styled.div`
  width: 10rem;
  height: 5rem;
  background-color: red;
  border-radius: 15%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class SavedPostStatus extends Component {
  state = {
    isLoading: false,
    count: 0,
    color: 'white',
    likes: 0,
    modal: false
  };

  handleClick = async e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ modal: true });
    //await axios.post('/api/savepost', [this.props.postNumber, 3]);
  };

  renderSaveButton() {
    if (this.state.modal == true) {
      return (
        <SavePostModal
          inProp={true}
          post={this.props.post}
          setFalse={() => this.setState({ modal: false })}
        />
      );
    }

    return <SaveButton onClick={e => this.handleClick(e)}>Save</SaveButton>;
  }

  render() {
    return this.renderSaveButton();
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(
  mapStateToProps,
  actions
)(SavedPostStatus);
