import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    {/* rest of the app goes here! */}
  </Provider>,
  document.getElementById('app')
);
