import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import style from './index.scss';

import { appReducer } from './reducers';
import App from './containers/App';
import { getPropertyList } from './api';

const propertyList = getPropertyList();
const store = createStore(appReducer, propertyList);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)