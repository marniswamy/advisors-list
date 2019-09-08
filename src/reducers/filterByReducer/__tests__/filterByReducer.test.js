import { filterByReducer } from '../filterByReducer';

describe('filterByReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = {
      advisorsList: [],
      selectedLangauge: '',
      selectedStatus: '',
      selectedSorting: ''
    };
    const mockPayload = {
      selectedStatus: 'Active'
    };
    const expected = filterByReducer(mockState, mockPayload);
    const result = {
      advisorsList: [],
      selectedLangauge: '',
      selectedStatus: 'Active',
      selectedSorting: ''
    };
    expect(expected).toEqual(result);
  });
});
