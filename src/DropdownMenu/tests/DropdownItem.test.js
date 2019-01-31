import React from 'react';
import { shallow } from 'enzyme';

import { DropdownItem } from '../DropdownItem';

describe('Dropdown Item', () => {
  let onClick;
  let toggle;

  const setup = (props = {}) => shallow(
    <DropdownItem onClick={onClick} toggle={toggle} {...props}>
      Dropdown Item
    </DropdownItem>,
  );

  beforeEach(() => {
    onClick = jest.fn();
    toggle = jest.fn();
  });

  it('should render correctly', () => {
    const notDisabledComponent = setup({ disabled: false });
    const disabledComponent = setup({ disabled: true });

    expect(notDisabledComponent).toMatchSnapshot();
    expect(disabledComponent).toMatchSnapshot();
  });

  it('should call toggle and onClick when it is clicked', () => {
    const component = setup();

    component.simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(toggle).toHaveBeenCalledTimes(1);
  });

  it('should not call toggle and onClick when it is clicked and disabled', () => {
    const component = setup({ disabled: true });

    component.simulate('click');

    expect(onClick).toHaveBeenCalledTimes(0);
    expect(toggle).toHaveBeenCalledTimes(0);
  });
});
