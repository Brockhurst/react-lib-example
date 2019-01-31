import React from 'react';
import { shallow } from 'enzyme';

import PopoverControl from 'src/components/Popover';
import { ButtonDropdownMenuComponent as ButtonDropdownMenu } from '../ButtonDropdownMenu';

describe('Button Dropdown Menu', () => {
  let props;
  const defaultSetup = () => shallow(<ButtonDropdownMenu {...props} />);

  beforeEach(() => {
    props = {
      t: key => key,
      disabled: undefined,
      title: 'Title',
      disableIfEmpty: false,
      wrapperClassName: '',
    };
  });

  it('should render "PopoverControl" component', () => {
    const component = defaultSetup();

    expect(component.type()).toEqual(PopoverControl);
  });

  it('should correctly pass title to "PopoverControl" component', () => {
    props.title = 'Custom title';
    const component = defaultSetup();

    expect(component.find(PopoverControl).props().title).toBe(props.title);
  });

  it('should pass empty string as className to "PopoverControl" component by default', () => {
    const component = defaultSetup();

    expect(component.find(PopoverControl).props().className).toBe('');
  });

  it('should correctly pass className to "PopoverControl" component', () => {
    props.wrapperClassName = 'Custom wrapper class name';
    const component = defaultSetup();

    expect(component.find(PopoverControl).props().className).toBe(props.wrapperClassName);
  });

  it('should correctly toggle "isOpened" state property when "toggle" method is called', () => {
    const component = defaultSetup();
    const instance = component.instance();

    expect(instance.state.isOpened).toBe(false);

    instance.toggle();

    expect(instance.state.isOpened).toBe(true);

    instance.toggle();

    expect(instance.state.isOpened).toBe(false);
  });

  describe('"isDisabled" method', () => {
    describe('when "disabled" property is not undefined', () => {
      it('should return true if "disabled" property equals to true', () => {
        props.disabled = true;
        const component = defaultSetup();

        expect(component.instance().isDisabled()).toBe(props.disabled);
      });

      it('should return false if "disabled" property equals to false', () => {
        props.disabled = false;
        const component = defaultSetup();

        expect(component.instance().isDisabled()).toBe(props.disabled);
      });
    });

    describe('when "disabled" property is undefined', () => {
      it('should return false if "disableIfEmpty" is false and children count is any', () => {
        const component = defaultSetup();

        expect(component.instance().isDisabled()).toBe(false);
      });

      it('should return false if "disableIfEmpty" is true but children count > 0', () => {
        props.disableIfEmpty = true;
        const component = shallow(
          <ButtonDropdownMenu {...props}>
            <span>item</span>
          </ButtonDropdownMenu>,
        );

        expect(component.instance().isDisabled()).toBe(false);
      });

      it('should return true if "disableIfEmpty" is true but children count === 0', () => {
        props.disableIfEmpty = true;
        const component = defaultSetup();

        expect(component.instance().isDisabled()).toBe(true);
      });
    });
  });

  describe('"changeIsOpen" method', () => {
    it('should update state if component is not disabled', () => {
      const component = defaultSetup();
      const instance = component.instance();
      const expected = !instance.state.isOpened;

      instance.isDisabled = jest.fn().mockImplementation(() => false);
      instance.changeIsOpened({ isOpened: expected });

      expect(instance.state.isOpened).toBe(expected);
    });

    it('should not update state if component is disabled', () => {
      const component = defaultSetup();
      const instance = component.instance();
      const expected = instance.state.isOpened;

      instance.isDisabled = jest.fn().mockImplementation(() => true);
      instance.changeIsOpened({ isOpened: !expected });

      expect(instance.state.isOpened).toBe(expected);
    });
  });
});
