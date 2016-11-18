import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import PostItContainer from './components/white-board-container';

ReactDOM.render((
  <Provider store={store}>
    <PostItContainer />
  </Provider>),
  document.querySelector('#application'));
