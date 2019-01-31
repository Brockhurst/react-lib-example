import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@progress/kendo-react-tooltip';

class TooltipComponent extends React.Component {
  defaultRender = () => {
    const { text, textBottom } = this.props;
    return (
      <Fragment>
        <span className="vg-tooltip__hint_text">{text}</span>
        <span className="vg-tooltip__hint_textBottom">{textBottom}</span>
      </Fragment>
    );
  };

  render() {
    const { children, customRender, position } = this.props;
    return (
      <Tooltip
        anchorElement="target"
        content={customRender || this.defaultRender}
        position={position || 'right'}
        openDelay={10}
      >
        {children}
      </Tooltip>
    );
  }

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
      .isRequired,
    text: PropTypes.string,
    textBottom: PropTypes.string,
    customRender: PropTypes.func,
    position: PropTypes.string,
  };

  static defaultProps = {
    text: '',
    textBottom: '',
  };
}

export default TooltipComponent;
