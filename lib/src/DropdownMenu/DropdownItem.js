import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class DropdownItem extends React.Component {
  className = 'vg-dropdown-menu__item';

  getContainerClassName = () => {
    return classNames(this.className, { [`${this.className}__disabled`]: this.props.disabled });
  };

  onClick = () => {
    const { disabled, onClick, toggle } = this.props;

    if (!disabled) {
      onClick();
      toggle();
    }
  };

  render() {
    const { disabled, children } = this.props;

    return (
      <button
        type="button"
        className={this.getContainerClassName()}
        onClick={disabled ? undefined : this.onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
  };
}
