import React, { Fragment } from 'react';
import { mount } from 'enzyme';

import TooltipComponent from '../';

describe('Tooltip', () => {
  const setup = () => mount(
    <TooltipComponent
      text="test"
      textBottom="Test Owner"
    >
      <div>Test</div>
    </TooltipComponent>,
  );

  it('should match snapshot', () => {
    const component = setup();

    expect(component).toMatchSnapshot();
  });

  it('should renderContent return new content', () => {
    const component = setup();
    const result = (
      <Fragment>
        <span className="vg-tooltip__hint_text">test</span>
        <span className="vg-tooltip__hint_textBottom">Test Owner</span>
      </Fragment>
    );

    expect(component.instance().defaultRender()).toEqual(result);
  });
});
