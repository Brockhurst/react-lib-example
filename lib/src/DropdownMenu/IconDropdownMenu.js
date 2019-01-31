import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PopoverControl from '../Popover';
import { DropdownLoader } from './DropdownLoader';

export class IconDropdownMenu extends Component {
  state = {
    isOpened: false,
  };

  componentDidUpdate(prevProps, prevState) {
    // Dropdown menu was opened
    if (!prevState.isOpened && this.state.isOpened) {
      this.props.onOpen();
    }

    // Dropdown menu was closed
    if (prevState.isOpened && !this.state.isOpened) {
      this.props.onClose();
    }
  }

  getIconSrc = () => {
    const { disabled, iconSrc, disabledIconSrc } = this.props;

    if (disabled && disabledIconSrc) {
      return disabledIconSrc;
    }

    return iconSrc;
  };

  getButtonClassName = () => {
    const { disabled, disabledIconSrc } = this.props;

    return classNames(
      'vg-icon-button',
      'vg-dropdown-menu__control',
      'vg-dropdown-menu__control__icon',
      { 'vg-icon-button--disabled': disabled && disabledIconSrc === undefined },
    );
  };

  toggle = () => {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  };

  changeIsOpened = ({ isOpened }) => {
    if (!this.props.disabled) {
      this.setState({ isOpened });
    }
  };

  render() {
    const { iconAlt, children, disabled, loading } = this.props;
    const { isOpened } = this.state;

    return (
      <PopoverControl
        title=""
        popoverBodyClassName="vg-dropdown-menu__body"
        className="d-inline-block"
        buttonClassName={this.getButtonClassName()}
        activeButtonClassName="vg-dropdown-menu__control__icon--active"
        icon={<img src={this.getIconSrc()} alt={iconAlt} />}
        isOpened={isOpened}
        disabled={disabled}
        onIsOpenedChanged={this.changeIsOpened}
      >
        {loading ? (
          <DropdownLoader />
        ) : (
          React.Children.map(children, child => React.cloneElement(child, { toggle: this.toggle }))
        )}
      </PopoverControl>
    );
  }

  static propTypes = {
    iconSrc: PropTypes.string.isRequired,
    disabledIconSrc: PropTypes.string, // intended to be undefined by default
    iconAlt: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    loading: false,
    onOpen: () => {},
    onClose: () => {},
  };
}
