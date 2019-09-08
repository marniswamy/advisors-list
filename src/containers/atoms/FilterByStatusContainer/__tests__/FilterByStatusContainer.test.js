import { mapStateToProps, mapDispatchToProps } from '../FilterByStatusContainer';

describe('FilterByStatusContainer', () => {
  it("should map the state to props", () => {
    const mockState = {};
    const expected = mapStateToProps(mockState);
    const result = ["value"];
    expect(Object.keys(expected)).toEqual(result);
  });
  it('should map dispatch to props', () => {
    const mockDispatch = jest.fn();
    const expected = mapDispatchToProps(mockDispatch);
    const result = ['handleChange'];
    expect(Object.keys(expected)).toEqual(result);
  });
});
