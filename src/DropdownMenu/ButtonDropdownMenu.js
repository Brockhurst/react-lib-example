import React from 'react';
import PropTypes from 'prop-types';

import ArrowDownIcon from '../assets/icons/controls/ic_arrow_down_small.svg';
import PopoverControl, { POSITION } from '../Popover';

export class ButtonDropdownMenuComponent extends React.Component {
  state = {
    isOpened: false,
  };

  isDisabled = () => {
    const { disabled, disableIfEmpty, children } = this.props;

    if (disabled !== undefined) {
      return disabled;
    }

    if (disableIfEmpty) {
      return React.Children.count(children) === 0;
    }

    return false;
  };

  toggle = () => {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  };

  changeIsOpened = ({ isOpened }) => {
    if (!this.isDisabled()) {
      this.setState({ isOpened });
    }
  };

  render() {
    const { title, wrapperClassName, children } = this.props;
    const { isOpened } = this.state;

    return (
      <PopoverControl
        title={title}
        className={wrapperClassName}
        popoverBodyClassName="vg-dropdown-menu__body"
        buttonClassName="vg-button vg-button_submit vg-dropdown-menu__control vg-dropdown-menu__control__button"
        activeButtonClassName="vg-dropdown-menu__control__button--active"
        icon={<img src={ArrowDownIcon} alt={`${title}}`} />}
        iconPosition={POSITION.RIGHT}
        isOpened={isOpened}
        disabled={this.isDisabled()}
        onIsOpenedChanged={this.changeIsOpened}
      >
        {React.Children.map(children, child => React.cloneElement(child, { toggle: this.toggle }))}
      </PopoverControl>
    );
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    disableIfEmpty: PropTypes.bool,
    wrapperClassName: PropTypes.string,
    disabled: PropTypes.bool, // intended to be undefined by default
  };

  static defaultProps = {
    disableIfEmpty: false,
    wrapperClassName: '',
  };
}

export const ButtonDropdownMenu = ButtonDropdownMenuComponent;
