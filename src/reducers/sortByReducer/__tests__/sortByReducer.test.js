import { sortByReducer } from '../sortByReducer';

describe('sortByReducer', () => {
  it('should update the state and return the new state', () => {
    const mockState = {
      advisorsList: [],
      selectedLangauge: '',
      selectedStatus: '',
      selectedSorting: ''
    };
    const mockPayload = {
      selectedSorting: 0
    };
    const expected = sortByReducer(mockState, mockPayload);
    const result = {
      advisorsList: [],
      selectedLangauge: '',
      selectedStatus: '',
      selectedSorting: 0
    };
    expect(expected).toEqual(result);
  });
});
