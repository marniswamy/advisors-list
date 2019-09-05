import * as React from 'react';
import { SortAndFilterByMenu } from '../SortAndFilterByMenu';
import { mount } from 'enzyme';

describe('SortAndFilterByMenu', () => {
  it('should render component', () => {
    const MountedSortAndFilterByMenu = mount(
      <SortAndFilterByMenu />,
    );
    const expected = MountedSortAndFilterByMenu.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
