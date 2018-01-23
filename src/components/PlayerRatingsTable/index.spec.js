import React from 'react';
import PlayerRatingsTable from './PlayerRatingsTable';
import PlayerRatingsRow from './PlayerRatingsRow';

describe('<PlayerRatingsTable/> with no data', () => {
    const playerRatings = [];

    it('should render an empty table', () => {
        const wrapper = mount(<PlayerRatingsTable playerRatings={playerRatings} />);
        expect(wrapper.find('table')).to.have.length(1);
        expect(wrapper.find('tbody tr')).to.have.length(0);
    });

    it('should render a table header row', () => {
        const wrapper = mount(<PlayerRatingsTable playerRatings={playerRatings} />);
        expect(wrapper.find('thead tr')).to.have.length(1);
    });
});

describe('<PlayerRatingsTable/> with 2 player ratings', () => {
    const playerRatings = [
        {
            "position": "MIDFIELDER",
            "player": {
                "playerName": {
                    "givenName": "Patrick",
                    "surname": "Dangerfield"
                }
            },
            "team": {
                "teamName": "Geelong Cats"
            },
            "detailedRatings": [
                {
                    "ranking": 1,
                    "ratingType": "OVERALL"
                }
            ]
        },
        {
            "position": "MIDFIELDER/FORWARD",
            "player": {
                "playerName": {
                    "givenName": "Robbie",
                    "surname": "Gray"
                }
            },
            "team": {
                "teamName": "Port Adelaide"
            },
            "detailedRatings": [
                {
                    "ranking": 2,
                    "ratingType": "OVERALL"
                }
            ]
        },
    ];

    it('should render 2 player rows', () => {
        const wrapper = mount(<PlayerRatingsTable playerRatings={playerRatings} />);
        expect(wrapper.find(PlayerRatingsRow)).to.have.length(2);
    });
});