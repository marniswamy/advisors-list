import * as React from 'react';
import { SortAndFilterByMenu } from '../SortAndFilterByMenu';
import { shallow } from 'enzyme';

describe('SortAndFilterByMenu', () => {
  it('should render component', () => {
    const MountedSortAndFilterByMenu = shallow(
      <SortAndFilterByMenu />,
    );
    const expected = MountedSortAndFilterByMenu.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
