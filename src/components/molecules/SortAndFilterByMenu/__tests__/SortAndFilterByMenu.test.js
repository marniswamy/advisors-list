import * as React from 'react';
import { SortAndFilterByMenu } from '../SortAndFilterByMenu';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

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
