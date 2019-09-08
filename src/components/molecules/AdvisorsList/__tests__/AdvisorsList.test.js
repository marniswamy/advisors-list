import * as React from 'react';
import { AdvisorsList } from '../AdvisorsList';
import { shallow } from 'enzyme';

describe('AdvisorsList', () => {
  it('should render component', () => {
    const MountedAdvisorsList = shallow(
      <AdvisorsList />,
    );
    const expected = MountedAdvisorsList.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
