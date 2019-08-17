import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';

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
    color: 'black',
    likes: 0
  };

  render() {
    return <SavedStatus status={this.props.status}>Save</SavedStatus>;
  }
}

/*export default connect(
  mapStateToProps,
  actions
)(SavedPostStatus);
*/
export default SavedPostStatus;
