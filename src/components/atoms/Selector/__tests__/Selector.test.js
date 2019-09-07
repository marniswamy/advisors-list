import * as React from 'react';
import { Selector } from '../Selector';
import { mount } from 'enzyme';

describe('Selector', () => {
  it('should render component', () => {
    const MountedSelector = mount(
      <Selector />,
    );
    const expected = MountedSelector.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
