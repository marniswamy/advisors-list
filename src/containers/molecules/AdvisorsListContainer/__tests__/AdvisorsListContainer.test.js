import { mapStateToProps } from '../AdvisorsListContainer';

describe('AdvisorsListContainer', () => {
  it("should map the state to props", () => {
    const mockState = {};
    const expected = mapStateToProps(mockState);
    const result = ["advisors"];
    expect(Object.keys(expected)).toEqual(result);
  });
});
