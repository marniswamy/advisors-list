import Immutable from 'seamless-immutable';
import { sortByReducer } from '../sortByReducer';

describe('sortByReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = Immutable({
      mockParam: {},
    });
    const mockPayload = 'mockPayload';
    const expected = sortByReducer(mockState, mockPayload);
    const result = Immutable({
      mockParam: {
        mockData: 'mockPayload',
      },
    });
    expect(expected).toEqual(result);
  });
});
