import * as React from 'react';
import { Selector } from '../Selector';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('Selector', () => {
  it('should render component', () => {
    const MountedSelector = shallow(
      <Selector />
    );
    const expected = MountedSelector.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
