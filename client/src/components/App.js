import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './navigation/Header';
import BodyContainer from './body/BodyContainer';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <BodyContainer />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
