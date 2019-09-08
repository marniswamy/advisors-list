import * as React from 'react';
import { Header } from '../Header';
import { shallow } from 'enzyme';

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
