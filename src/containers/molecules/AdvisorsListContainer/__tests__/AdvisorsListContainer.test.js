import { mapStateToProps, mapDispatchToProps } from '../AdvisorsListContainer';

describe('AdvisorsListContainer', () => {
  it('should map the state to props', () => {
    const mockState = {};
    const expected = mapStateToProps(mockState);
    const result = {};
    expect(expected).toEqual(result);
  });
  it('should map dispatch to props', () => {
    const mockDispatch = jest.fn();
    const expected = mapDispatchToProps(mockDispatch);
    const result = {};
    expect(expected).toEqual(result);
  });
});
