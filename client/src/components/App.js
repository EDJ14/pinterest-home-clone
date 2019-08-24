import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';

import Header from './navigation/Header';
import BodyContainer from './body/BodyContainer';
import NewPost from './createPost/NewPost';
import PostDetail from './body/PostDetail';
import LoadingScreen from './LoadingScreen';
import SavePostModal from './body/savepost/SavePostModal';

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
          <Route path="/detail" component={PostDetail} />
          <Route path="/loading" component={LoadingScreen} />
          <Route exact path="/modal" component={SavePostModal} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
