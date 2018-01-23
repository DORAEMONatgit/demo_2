import { getTeamLogoUrl } from './index';

describe('getTeamLogoUrl() helper function', () => {
    it('should return image url for an given team name', () => {
        const teamName = 'Geelong Cats';
        const expected = '/images/icon-club-geel.svg';
        const result = getTeamLogoUrl(teamName);

        expect(result).to.equal(expected);
    });
});