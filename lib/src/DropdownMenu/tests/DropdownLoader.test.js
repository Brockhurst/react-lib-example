import React from 'react';
import { shallow } from 'enzyme';

import { DropdownLoader } from '../DropdownLoader';

describe('DropdownLoader', () => {
  it('should match snapshot', () => {
    const component = shallow(<DropdownLoader />);

    expect(component).toMatchSnapshot();
  });
});
