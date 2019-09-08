import * as React from 'react';
import { AdvisorsListPage } from '../AdvisorsListPage';
import { shallow } from 'enzyme';

describe('AdvisorsListPage', () => {
  it('should render component', () => {
    const MountedAdvisorsListPage = shallow(
      <AdvisorsListPage />,
    );
    const expected = MountedAdvisorsListPage.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
