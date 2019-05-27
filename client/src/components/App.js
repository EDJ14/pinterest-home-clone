import React, { Component } from 'react';

import '../scss/_main.scss';

import Header from './navigation/Header';
import BodyContainer from './body/BodyContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <BodyContainer />
      </div>
    );
  }
}

export default App;
