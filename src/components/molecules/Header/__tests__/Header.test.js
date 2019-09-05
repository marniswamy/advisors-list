import * as React from 'react';
import { Header } from '../Header';
import { mount } from 'enzyme';

describe('Header', () => {
  it('should render component', () => {
    const MountedHeader = mount(
      <Header />,
    );
    const expected = MountedHeader.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
