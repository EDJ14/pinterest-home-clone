import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';

import Header from './navigation/Header';
import BodyContainer from './body/BodyContainer';
import NewPost from './createPost/NewPost';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={BodyContainer} />
          <Route exact path="/new" component={NewPost} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
