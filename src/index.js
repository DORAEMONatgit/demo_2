import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './index.scss';

import { appReducer } from './reducers';
import App from './containers/App';
import { getPropertyList } from './api';
import { rootSaga } from './sagas';

const propertyList = getPropertyList();
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(appReducer, propertyList, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);