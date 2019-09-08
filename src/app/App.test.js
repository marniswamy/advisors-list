import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should render component', () => {
    const MountedComponent = shallow(
      <App />,
    );
    const expected = MountedComponent.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
