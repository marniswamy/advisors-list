import * as React from 'react';
import { AdvisorsListPage } from '../AdvisorsListPage';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('AdvisorsListPage', () => {
  it('should render component', () => {
    const MountedAdvisorsListPage = shallow(
      <AdvisorsListPage />,
    );
    const expected = MountedAdvisorsListPage.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
