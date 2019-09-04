import * as React from 'react';
import { AdvisorsListPage } from '../AdvisorsListPage';
import { mount } from 'enzyme';

describe('AdvisorsListPage', () => {
  it('should render component', () => {
    const MountedAdvisorsListPage = mount(
      <AdvisorsListPage />,
    );
    const expected = MountedAdvisorsListPage.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
