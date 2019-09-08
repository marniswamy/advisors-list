import { filterByAction } from '../filterByAction';

describe('filterByAction', () => {
  it('should return action object', () => {
    const mockPayload = "Active";
    const expected = filterByAction(mockPayload);
    const result = {
      payload: "Active",
      type: "FILTER_BY"
    };
    expect(expected).toEqual(result);
  });
});
