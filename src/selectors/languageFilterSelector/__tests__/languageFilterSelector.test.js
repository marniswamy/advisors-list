import { languageFilterSelector } from '../languageFilterSelector';

describe('languageFilterSelector', () => {
  it('should select data from the store state', () => {
    const mockState = {
      selectedLangauge: 'en'
    };
    const expected = languageFilterSelector(mockState);
    const result = 'en';
    expect(expected).toEqual(result);
  });
  it('should provide a default value if there is no value in the store', () => {
    const mockState = {};
    const expected = languageFilterSelector(mockState);
    const result = '';
    expect(expected).toEqual(result);
  });
});
