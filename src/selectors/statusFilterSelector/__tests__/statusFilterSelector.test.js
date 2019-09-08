import { statusFilterSelector } from '../statusFilterSelector';

describe('statusFilterSelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      selectedStatus: 'Active',
    };
    const expected = statusFilterSelector(mockState);
    const result = 'Active';
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {
      selectedStatus: 'Inactive',
    };
    const expected = statusFilterSelector(mockState);
    const result = 'Inactive';
    expect(expected).toEqual(result);
  });
});
