import React from 'react';
import PropTypes from 'prop-types';

import { getTeamLogoUrl } from '~/utils';

export default class PlayerRatingsRow extends React.Component {
    render() {
        const teamInfo = this.renderTeamInfo();
        return (
            <tr key={this.props.key}>
                <td>
                    {this.props.rating.detailedRatings[0].ranking}
                    <span className="ratingType">
                        {this.props.rating.detailedRatings[0].ratingType}
                    </span>
                </td>
                <td>
                    {this.props.rating.player.playerName.givenName}
                    {' '}
                    {this.props.rating.player.playerName.surname}
                </td>
                {teamInfo}
                <td>{this.props.rating.position}</td>
            </tr>
        );
    }

    renderTeamInfo() {
        const teamLogoUrl = getTeamLogoUrl(this.props.rating.team.teamName);
        return (
            <td className="teamInfo">
                <img src={teamLogoUrl} className="teamLogo" />
                <span>{this.props.rating.team.teamName}</span>
            </td>
        );
    }
}

PlayerRatingsRow.propTypes = {
    rating: PropTypes.object.isRequired
};