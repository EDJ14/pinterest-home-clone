import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import App from './components/App';
import './scss/_main.scss';

ReactDOM.render(<App />, document.querySelector('#root'));

export default hot(module)(App);
