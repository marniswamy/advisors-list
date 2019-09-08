import * as React from 'react';
import { AdvisorCard } from '../AdvisorCard';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

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
