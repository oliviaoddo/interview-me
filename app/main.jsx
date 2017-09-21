import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.jsx';
import '../public/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <h1>hello olivia</h1>
  </Provider>,
  document.getElementById('app')
);
