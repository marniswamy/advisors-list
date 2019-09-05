import * as React from 'react';
import { SortBy } from '../SortBy';
import { mount } from 'enzyme';

describe('SortBy', () => {
  it('should render component', () => {
    const MountedSortBy = mount(
      <SortBy />,
    );
    const expected = MountedSortBy.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
