import Immutable from 'seamless-immutable';
import { fetchAdvisorsListReducer } from '../fetchAdvisorsListReducer';

describe('fetchAdvisorsListReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = Immutable({
      mockParam: {},
    });
    const mockPayload = 'mockPayload';
    const expected = fetchAdvisorsListReducer(mockState, mockPayload);
    const result = Immutable({
      mockParam: {
        mockData: 'mockPayload',
      },
    });
    expect(expected).toEqual(result);
  });
});
