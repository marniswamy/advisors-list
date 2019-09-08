import { sortByAction } from '../sortByAction';

describe('sortByAction', () => {
  it('should ', () => {
    const mockPayload = 0;
    const expected = sortByAction(mockPayload);
    const result = {
      payload: 0,
      type: "SORT_BY"
    };
    expect(expected).toEqual(result);
  });
});
