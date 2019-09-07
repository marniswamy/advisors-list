import { filteredAdvisorListSelector } from '../filteredAdvisorListSelector';

describe('filteredAdvisorListSelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = filteredAdvisorListSelector(mockState);
    const result = 'mockString';
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {
      mockParam: {
        mockData: 'mockString',
      },
    };
    const expected = filteredAdvisorListSelector(mockState);
    const result = '';
    expect(expected).toEqual(result);
  });
});
