import * as React from 'react';
import { Selector } from '../Selector';
import { shallow } from 'enzyme';

describe('Selector', () => {
  it('should render component', () => {
    const MountedSelector = shallow(
      <Selector />,
    );
    const expected = MountedSelector.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
