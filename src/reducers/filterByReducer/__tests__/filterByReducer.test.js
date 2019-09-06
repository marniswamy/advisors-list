import Immutable from 'seamless-immutable';
import { filterByReducer } from '../filterByReducer';

describe('filterByReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = Immutable({
      mockParam: {},
    });
    const mockPayload = 'mockPayload';
    const expected = filterByReducer(mockState, mockPayload);
    const result = Immutable({
      mockParam: {
        mockData: 'mockPayload',
      },
    });
    expect(expected).toEqual(result);
  });
});
