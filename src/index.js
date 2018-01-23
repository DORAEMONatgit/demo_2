import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { getPropertyList } from './store';
import style from './index.scss';

const propertyList = getPropertyList();
ReactDOM.render(<App propertyList={propertyList} />, document.getElementById('root'));