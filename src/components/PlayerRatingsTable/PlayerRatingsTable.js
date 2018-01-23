import React from 'react';
import PropTypes from 'prop-types';

import PlayerRatingsRow from './PlayerRatingsRow';
import style from './style.scss';

export default class PlayerRatingsTable extends React.Component {
    render() {
        const rows = this.props.playerRatings.map((rating, index) => {
            return (
                <PlayerRatingsRow rating={rating} key={index}/>
            );
        });

        return (
            <table className="prt">
              <thead>
                <tr>
                  <th>Ranking</th>
                  <th>Player</th>
                  <th>Club</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </table>
        );
    }
}

PlayerRatingsTable.propTypes = {
    playerRatings: PropTypes.array.isRequired
};