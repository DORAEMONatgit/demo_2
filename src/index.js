import React from 'react';
import ReactDOM from 'react-dom';
import PlayerRatingsTable from './components/PlayerRatingsTable';
import { getPlayerRatings } from './store';
import style from './index.scss';

const playerRatings = getPlayerRatings();
ReactDOM.render(<PlayerRatingsTable playerRatings={playerRatings} />, document.getElementById('root'));