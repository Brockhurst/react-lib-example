import React from 'react';
import { shallow, render } from 'enzyme';

import Popover from '../';

const popoverButtonClassName = 'vg-popover__button';
const popoverButtonClass = `.${popoverButtonClassName}`;
const popoverButtonActiveClassName = `${popoverButtonClassName}_active`;
const mockRef = {
  current: {
    offsetLeft: 900,
    offsetWidth: 79,
    offsetParent: { clientWidth: 1118 },
  },
};

describe('Popover', () => {
  const setup = renderFunction => (props = {}) => renderFunction(
    <Popover
      title="TEST"
      {...props}
    />,
  );
  const setupShallow = setup(shallow);
  const setupRender = setup(render);

  it('should render popover', () => {
    const component = setupRender();

    expect(component).toMatchSnapshot();
  });

  it('should render popover with tooltip', () => {
    const component = setupShallow({ tooltip: true, description: 'test', owner: 'John' });

    expect(component).toMatchSnapshot();
  });

  it('should return "isOpened" value in accordance with "isControlled" flag', () => {
    const isOpenedForState = true;
    const component = setupShallow();
    component.instance().controlRef = mockRef;

    component.setState({ isOpened: isOpenedForState });

    expect(component.instance().isOpened()).toEqual(isOpenedForState);

    const isOpenedForProps = false;

    component.setProps({ isControlled: true, isOpened: isOpenedForProps });

    expect(component.instance().isOpened()).toEqual(isOpenedForProps);
  });

  it('should return "isControlled" value properly if "isControlled" method is called', () => {
    const component = setupShallow();
    component.instance().controlRef = mockRef;

    expect(component.instance().isControlled()).toEqual(false);

    // It doesn't matter, what value (true/false) is passed to"isOpened", it shouldn't be "undefined".
    component.setProps({ isOpened: true });

    expect(component.instance().isControlled()).toEqual(true);
  });

  describe('uncontrolled', () => {
    it('should not be active by default', () => {
      const component = setupShallow({ isHighlighted: true });
      const button = component.find(popoverButtonClass);

      expect(button.hasClass(popoverButtonActiveClassName)).toEqual(true);
    });

    it('should always be active if highlighted', () => {
      const component = setupShallow({ isHighlighted: true });
      const button = component.find(popoverButtonClass);

      expect(button.hasClass(popoverButtonActiveClassName)).toEqual(true);
    });

    it('should switch to active after click', () => {
      const component = setupShallow({ isHighlighted: true });
      component.instance().controlRef = mockRef;
      const button = component.find(popoverButtonClass);
      button.simulate('click');

      expect(button.hasClass(popoverButtonActiveClassName)).toEqual(true);
    });

    it('should open after button click', () => {
      const component = setupShallow({ isHighlighted: true });
      component.instance().controlRef = mockRef;
      const button = component.find(popoverButtonClass);

      button.simulate('click');

      expect(component.state()).toEqual(expect.objectContaining({
        isOpened: true,
      }));
    });
  });

  describe('controlled', () => {
    it('should save "isOpened" value from props to state on constructor', () => {
      const isOpened = false;
      const component = setupShallow();
      component.instance().isOpened = jest.fn().mockReturnValue(false);

      expect(component.state().isOpened).toEqual(isOpened);
    });

    it('should call onChange handler if "isOpened" value is changed', () => {
      const onIsOpenedChanged = jest.fn();
      const isOpenedFalse = false;
      const isOpenedTrue = true;
      const component = setupShallow({
        isControlled: true,
        isOpened: isOpenedFalse,
        onIsOpenedChanged,
      });
      component.instance().controlRef = mockRef;

      component.instance().onToggle();

      expect(onIsOpenedChanged).toBeCalledWith({ isOpened: isOpenedTrue });

      component.setProps({ isOpened: isOpenedTrue });
      component.instance().onToggle({ target: document.body });

      expect(onIsOpenedChanged).toBeCalledWith({ isOpened: isOpenedFalse });
    });
  });
});
