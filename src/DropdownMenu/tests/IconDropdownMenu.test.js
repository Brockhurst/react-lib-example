import React from 'react';
import { shallow } from 'enzyme';

import icon from 'src/assets/icons/controls/ic_more_vertical.svg';
import disabledIcon from 'src/assets/icons/controls/ic_more_vertical_disabled.svg';
import PopoverControl from 'src/components/Popover';
import { DropdownLoader } from '../DropdownLoader';
import { IconDropdownMenu } from '../IconDropdownMenu';

describe('IconDropdownMenu', () => {
  let props;
  const defaultSetup = () => shallow(<IconDropdownMenu {...props} />);

  beforeEach(() => {
    props = {
      iconSrc: icon,
      disabledIconSrc: disabledIcon,
      iconAlt: 'icon alt',
      disabled: false,
      loading: false,
      onOpen: jest.fn(),
      onClose: jest.fn(),
    };
  });

  it('should render PopoverControl component', () => {
    const component = defaultSetup();

    expect(component.type()).toEqual(PopoverControl);
  });

  it('should pass empty string as a title to PopoverControl component', () => {
    props.title = 'Custom title';
    const component = defaultSetup();

    expect(component.find(PopoverControl).props().title).toBe('');
  });

  describe('DropdownLoader', () => {
    it('should not be rendered by default', () => {
      const component = defaultSetup();

      expect(component.find(DropdownLoader).length).toBe(0);
    });

    it('should not be rendered if loading was passed as false', () => {
      props.loading = false;
      const component = defaultSetup();

      expect(component.find(DropdownLoader).length).toBe(0);
    });

    it('should be rendered if loading was passed as true', () => {
      props.loading = true;
      const component = defaultSetup();

      expect(component.find(DropdownLoader).length).toBe(1);
    });

    it('should not have toggle method in props', () => {
      props.loading = true;
      const component = defaultSetup();

      expect(component.find(DropdownLoader).props().toggle).toBe(undefined);
    });
  });

  it('should pass toggle method to each child', () => {
    const children = ['child 1', 'child 2', 'child 3'];
    const component = shallow(
      <IconDropdownMenu {...props}>
        {children.map((child, index) => (
          <span key={index}>{child}</span>
        ))}
      </IconDropdownMenu>,
    );

    component.find('span').forEach(child => {
      expect(child.props().toggle).toEqual(component.instance().toggle);
    });
  });

  it('should correctly toggle isOpened state property when toggle method is called', () => {
    const component = defaultSetup();
    const instance = component.instance();

    expect(instance.state.isOpened).toBe(false);

    instance.toggle();

    expect(instance.state.isOpened).toBe(true);

    instance.toggle();

    expect(instance.state.isOpened).toBe(false);
  });

  it('should call onOpen when isOpened changes to true', () => {
    const component = defaultSetup();
    const instance = component.instance();

    instance.changeIsOpened({ isOpened: false });
    instance.changeIsOpened({ isOpened: true });

    expect(props.onOpen).toHaveBeenCalledTimes(1);
  });

  it('should call onClose when isOpened changes to false', () => {
    const component = defaultSetup();
    const instance = component.instance();

    instance.changeIsOpened({ isOpened: true });
    instance.changeIsOpened({ isOpened: false });

    expect(props.onClose).toHaveBeenCalledTimes(1);
  });

  describe('changeIsOpen method', () => {
    it('should update state if component is not disabled', () => {
      const component = defaultSetup();
      const instance = component.instance();
      const expected = !instance.state.isOpened;

      instance.changeIsOpened({ isOpened: expected });
      expect(instance.state.isOpened).toBe(expected);
    });

    it('should not update state if component is disabled', () => {
      props.disabled = true;
      const component = defaultSetup();
      const instance = component.instance();
      const initial = instance.state.isOpened;

      instance.changeIsOpened({ isOpened: !initial });

      expect(instance.state.isOpened).toBe(initial);
    });
  });

  describe('getIconSrc method', () => {
    it('should return icon if menu is not disabled', () => {
      const component = defaultSetup();

      expect(component.instance().getIconSrc()).toEqual(props.iconSrc);
    });

    it('should return icon if menu is disabled but disabledIconSrc was not passed', () => {
      props.disabledIconSrc = undefined;
      props.disabled = true;
      const component = defaultSetup();

      expect(component.instance().getIconSrc()).toEqual(props.iconSrc);
    });

    it('should return disabledIconSrc if menu is disabled and disabledIconSrc was passed', () => {
      props.disabled = true;
      const component = defaultSetup();

      expect(component.instance().getIconSrc()).toEqual(props.disabledIconSrc);
    });
  });
});
