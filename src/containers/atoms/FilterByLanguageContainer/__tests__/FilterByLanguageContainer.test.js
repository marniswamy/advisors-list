import { mapStateToProps, mapDispatchToProps } from '../FilterByLanguageContainer';

describe('FilterByLanguageContainer', () => {
  it("should map the state to props", () => {
    const mockState = {};
    const expected = mapStateToProps(mockState);
    const result = ["value", "options"];
    expect(Object.keys(expected)).toEqual(result);
  });
  it('should map dispatch to props', () => {
    const mockDispatch = jest.fn();
    const expected = mapDispatchToProps(mockDispatch);
    const result = ['handleChange'];
    expect(Object.keys(expected)).toEqual(result);
  });
});
