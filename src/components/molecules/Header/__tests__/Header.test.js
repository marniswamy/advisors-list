import * as React from 'react';
import { Header } from '../Header';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  it('should render component', () => {
    const MountedHeader = shallow(
      <Header />,
    );
    const expected = MountedHeader.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
