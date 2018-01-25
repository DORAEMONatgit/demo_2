import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { appReducer } from './reducers';
import App from './containers/App';

import { getPropertyList } from './api';
import style from './index.scss';

const propertyList = getPropertyList();
const store = createStore(appReducer, propertyList);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)