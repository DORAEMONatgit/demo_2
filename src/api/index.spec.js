import { getPlayerRatings } from './index';

describe('getPlayerRatings() helper function', () => {
    it('should return an array', () => {
        const result = getPlayerRatings();
        expect(result).to.be.an('array');
        expect(result.length).to.be.above(0);
    });
});