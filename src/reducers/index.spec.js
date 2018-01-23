import { initialState, appReducer } from './index';

describe('appReducer', () => {
  it('should return initial state if undefined', () => {
    const expected = initialState;
    const result = appReducer(undefined, {
      type: 'unknown',
    });

    expect(result).to.equal(expected);
  });
});
