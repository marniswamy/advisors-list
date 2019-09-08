import * as React from 'react';
import { AdvisorCard } from '../AdvisorCard';
import { shallow } from 'enzyme';

describe('AdvisorCard', () => {
  it('should render component', () => {
    const MountedAdvisorCard = shallow(
      <AdvisorCard />,
    );
    const expected = MountedAdvisorCard.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
