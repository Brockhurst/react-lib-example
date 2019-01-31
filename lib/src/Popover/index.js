import React, { Component, Fragment, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import get from 'lodash/get';

import TooltipComponent from '../Tooltip';

const EVENTS = ['click', 'touchend'];
export const POSITION = {
  LEFT: 'left',
  RIGHT: 'right',
};
export default class PopoverControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: this.isOpened(),
    };
    this.controlRef = createRef();
  }

  isControlled = () => this.props.isOpened !== undefined;

  componentDidMount() {
    this.handleEventListeners();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpened !== prevProps.isOpened || this.state.isOpened !== prevState.isOpened) {
      this.handleEventListeners();
    }
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  addEvents = () => {
    EVENTS.forEach(event => document.addEventListener(event, this.handleDocumentClick, true));
  };

  removeEvents = () => {
    EVENTS.forEach(event => document.removeEventListener(event, this.handleDocumentClick, true));
  };

  handleEventListeners = () => {
    if (this.isOpened()) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  };

  setIsOpened = isOpened => {
    if (this.isControlled()) {
      this.props.onIsOpenedChanged({ isOpened });
    } else {
      this.setState({ isOpened });
    }
  };

  isOpened = () => this.isControlled() ?
    this.props.isOpened :
    get(this.state, 'isOpened', false);

  handleDocumentClick = ({ target }) => {
    if (
      !this.controlRef.current.contains(target) &&
      document.body.querySelector('#root').contains(target)
    ) {
      this.onToggle();
    }
  };

  onToggle = () => this.setIsOpened(!this.isOpened());

  renderControlButtonContent = () => {
    const { title, icon, iconPosition } = this.props;
    const { LEFT, RIGHT } = POSITION;

    if (iconPosition === LEFT) {
      return (
        <Fragment>
          {icon}
          {title}
        </Fragment>
      );
    }

    if (iconPosition === RIGHT) {
      return (
        <Fragment>
          {title}
          {icon}
        </Fragment>
      );
    }

    return title;
  };

  renderPopoverBody = () => {
    if (!this.isOpened()) {
      return null;
    }

    const { popoverBodyClassName, popoverBodyStyles, children } = this.props;
    const { offsetLeft, offsetWidth, offsetParent: { clientWidth } } = this.controlRef.current;
    const visibleWidthPopover = clientWidth - (offsetLeft + offsetWidth);
    if (visibleWidthPopover < popoverBodyStyles.width) {
      popoverBodyStyles.right = '0px';
    }

    return (
      <div
        className={classNames('vg-popover__body', popoverBodyClassName)}
        style={popoverBodyStyles}
      >
        {children}
      </div>
    );
  };

  renderButton = () => {
    const {
      isHighlighted,
      disabled,
      buttonClassName,
      activeButtonClassName,
      tooltip,
      title,
    } = this.props;

    const popoverButtonClassNames = classNames(
      buttonClassName,
      { [activeButtonClassName]: this.isOpened() || isHighlighted },
    );
    return (
      <button
        className={popoverButtonClassNames}
        type="button"
        onClick={this.onToggle}
        title={tooltip ? title : ''}
        disabled={disabled}
      >
        {this.renderControlButtonContent()}
      </button>
    );
  };

  render() {
    const {
      className,
      dataSelenium,
      tooltip,
      description,
      owner,
    } = this.props;

    const popoverClassNames = classNames(
      'vg-popover',
      className,
    );

    return (
      <div
        ref={this.controlRef}
        className={popoverClassNames}
        data-selenium={dataSelenium}
      >
        { tooltip
          ? <TooltipComponent text={description} textBottom={owner}>
            {this.renderButton()}
          </TooltipComponent>
          : this.renderButton()
        }
        {this.renderPopoverBody()}
      </div>
    );
  }

  static propTypes = {
    className: PropTypes.string,
    popoverBodyClassName: PropTypes.string,
    buttonClassName: PropTypes.string,
    activeButtonClassName: PropTypes.string,
    icon: PropTypes.element,
    iconPosition: PropTypes.oneOf([POSITION.LEFT, POSITION.RIGHT]),
    title: PropTypes.string.isRequired,
    isHighlighted: PropTypes.bool,
    disabled: PropTypes.bool,
    popoverBodyStyles: PropTypes.object,
    dataSelenium: PropTypes.string,
    isOpened: PropTypes.bool,
    onIsOpenedChanged: PropTypes.func,
    tooltip: PropTypes.bool,
    description: PropTypes.string,
    owner: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    icon: null,
    iconPosition: POSITION.LEFT,
    isHighlighted: false,
    disabled: false,
    popoverBodyStyles: {},
    onIsOpenedChanged: () => {},
    buttonClassName: 'vg-popover__button',
    popoverBodyClassName: '',
    activeButtonClassName: 'vg-popover__button_active',
    tooltip: false,
    description: '',
    owner: '',
  };
}
