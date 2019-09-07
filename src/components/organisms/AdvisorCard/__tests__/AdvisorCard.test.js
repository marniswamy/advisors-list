import * as React from 'react';
import { AdvisorCard } from '../AdvisorCard';
import { mount } from 'enzyme';

describe('AdvisorCard', () => {
  it('should render component', () => {
    const MountedAdvisorCard = mount(
      <AdvisorCard />,
    );
    const expected = MountedAdvisorCard.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
