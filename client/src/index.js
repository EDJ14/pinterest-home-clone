import './scss/_main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

import axios from 'axios';
window.axios = axios;

const store = createStore(
  reducers,
  { postNumber: 0, posts: [] },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

export default hot(module)(App);
