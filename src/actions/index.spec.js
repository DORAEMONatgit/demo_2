import { ActionTypes } from '~/constants';
import * as actions from './index';

describe('Redux actions for add/remove property', () => {
    const property = {
        id: 99,
        price: '$7,000'
    };

    it('should create an action for add property', () => {
        const expected = {
            type: ActionTypes.ADD_PROPERTY,
            property
        };
        const result = actions.addProperty(property);

        expect(result).to.deep.equal(expected);
    });

    it('should create an action for remove property', () => {
        const expected = {
            type: ActionTypes.REMOVE_PROPERTY,
            property
        };
        const result = actions.removeProperty(property);

        expect(result).to.deep.equal(expected);
    });
});