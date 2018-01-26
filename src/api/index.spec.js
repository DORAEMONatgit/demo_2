import { getPropertyList } from './index';

describe('getPropertyList() api call for data fetch', () => {
    it('should return correct data type', () => {
        const result = getPropertyList();

        expect(result).to.be.a('object');
    });
});