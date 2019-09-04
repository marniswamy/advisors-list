import * as React from 'react';
import { AdvisorsList } from '../AdvisorsList';
import { mount } from 'enzyme';

describe('AdvisorsList', () => {
  it('should render component', () => {
    const MountedAdvisorsList = mount(
      <AdvisorsList />,
    );
    const expected = MountedAdvisorsList.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
