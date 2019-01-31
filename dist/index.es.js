import React, { Fragment, Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@progress/kendo-react-tooltip';
import classNames from 'classnames';
import get from 'lodash/get';

var _ref =
/*#__PURE__*/
React.createElement("g", {
  id: "Page-1"
}, React.createElement("g", {
  id: "IPAD_RGN_VLGN_WEB_Filters_1-1_Filters_Empty_State-Copy-2",
  transform: "translate(-116 -237)"
}, React.createElement("g", {
  id: "Icons_x2F_16_x2F_arrow-60-down",
  transform: "translate(112 232)"
}, React.createElement("defs", null, React.createElement("filter", {
  id: "Adobe_OpacityMaskFilter",
  filterUnits: "userSpaceOnUse",
  x: 4,
  y: 5,
  width: 16,
  height: 16
}, React.createElement("feColorMatrix", {
  values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
}))), React.createElement("mask", {
  maskUnits: "userSpaceOnUse",
  x: 4,
  y: 5,
  width: 16,
  height: 16,
  id: "mask-2"
}, React.createElement("g", {
  filter: "url(#Adobe_OpacityMaskFilter)"
}, React.createElement("path", {
  id: "path-1",
  className: "st1",
  d: "M12 16l-4-6h8z"
}))), React.createElement("g", {
  id: "Color-_x2F_-Black",
  mask: "url(#mask-2)"
}, React.createElement("path", {
  id: "color",
  className: "st1",
  d: "M4 5h16v16H4z"
})))));

var ArrowDownIcon = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%2016%2016%22%20style%3D%22enable-background%3Anew%200%200%2016%2016%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%20.st0%7Bfilter%3Aurl%28%23Adobe_OpacityMaskFilter%29%3B%7D%20.st1%7Bfill%3A%23FFFFFF%3B%7D%20.st2%7Bmask%3Aurl%28%23mask-2%29%3B%7D%20.st3%7Bfill%3A%233F4245%3B%7D%3C%2Fstyle%3E%3Ctitle%3EIcons%2F16%2Farrow-60-down%3C%2Ftitle%3E%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%3Cg%20id%3D%22Page-1%22%3E%20%3Cg%20id%3D%22IPAD_RGN_VLGN_WEB_Filters_1-1_Filters_Empty_State-Copy-2%22%20transform%3D%22translate%28-116.000000%2C%20-237.000000%29%22%3E%20%20%3Cg%20id%3D%22Icons_x2F_16_x2F_arrow-60-down%22%20transform%3D%22translate%28112.000000%2C%20232.000000%29%22%3E%20%20%20%3Cg%20id%3D%22arrow-60-down%22%3E%20%20%20%3C%2Fg%3E%20%20%20%3Cdefs%3E%20%20%20%20%3Cfilter%20id%3D%22Adobe_OpacityMaskFilter%22%20filterUnits%3D%22userSpaceOnUse%22%20x%3D%224%22%20y%3D%225%22%20width%3D%2216%22%20height%3D%2216%22%3E%20%20%20%20%20%3CfeColorMatrix%20%20type%3D%22matrix%22%20values%3D%221%200%200%200%200%20%200%201%200%200%200%20%200%200%201%200%200%20%200%200%200%201%200%22%2F%3E%20%20%20%20%3C%2Ffilter%3E%20%20%20%3C%2Fdefs%3E%20%20%20%3Cmask%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%224%22%20y%3D%225%22%20width%3D%2216%22%20height%3D%2216%22%20id%3D%22mask-2%22%3E%20%20%20%20%3Cg%20class%3D%22st0%22%3E%20%20%20%20%20%3Cpolygon%20id%3D%22path-1%22%20class%3D%22st1%22%20points%3D%2212%2C16%208%2C10%2016%2C10%20%20%20%20%20%20%22%2F%3E%20%20%20%20%3C%2Fg%3E%20%20%20%3C%2Fmask%3E%20%20%20%3Cg%20id%3D%22Color-_x2F_-Black%22%20class%3D%22st2%22%3E%20%20%20%20%3Crect%20id%3D%22color%22%20x%3D%224%22%20y%3D%225%22%20class%3D%22st1%22%20width%3D%2216%22%20height%3D%2216%22%2F%3E%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var TooltipComponent = function (_React$Component) {
  inherits(TooltipComponent, _React$Component);

  function TooltipComponent() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TooltipComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TooltipComponent.__proto__ || Object.getPrototypeOf(TooltipComponent)).call.apply(_ref, [this].concat(args))), _this), _this.defaultRender = function () {
      var _this$props = _this.props,
          text = _this$props.text,
          textBottom = _this$props.textBottom;

      return React.createElement(
        Fragment,
        null,
        React.createElement(
          'span',
          { className: 'vg-tooltip__hint_text' },
          text
        ),
        React.createElement(
          'span',
          { className: 'vg-tooltip__hint_textBottom' },
          textBottom
        )
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TooltipComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          customRender = _props.customRender,
          position = _props.position;

      return React.createElement(
        Tooltip,
        {
          anchorElement: 'target',
          content: customRender || this.defaultRender,
          position: position || 'right',
          openDelay: 10
        },
        children
      );
    }
  }]);
  return TooltipComponent;
}(React.Component);

TooltipComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  text: PropTypes.string,
  textBottom: PropTypes.string,
  customRender: PropTypes.func,
  position: PropTypes.string
};
TooltipComponent.defaultProps = {
  text: '',
  textBottom: ''
};

var EVENTS = ['click', 'touchend'];
var POSITION = {
  LEFT: 'left',
  RIGHT: 'right'
};

var PopoverControl = function (_Component) {
  inherits(PopoverControl, _Component);

  function PopoverControl(props) {
    classCallCheck(this, PopoverControl);

    var _this = possibleConstructorReturn(this, (PopoverControl.__proto__ || Object.getPrototypeOf(PopoverControl)).call(this, props));

    _this.isControlled = function () {
      return _this.props.isOpened !== undefined;
    };

    _this.addEvents = function () {
      EVENTS.forEach(function (event) {
        return document.addEventListener(event, _this.handleDocumentClick, true);
      });
    };

    _this.removeEvents = function () {
      EVENTS.forEach(function (event) {
        return document.removeEventListener(event, _this.handleDocumentClick, true);
      });
    };

    _this.handleEventListeners = function () {
      if (_this.isOpened()) {
        _this.addEvents();
      } else {
        _this.removeEvents();
      }
    };

    _this.setIsOpened = function (isOpened) {
      if (_this.isControlled()) {
        _this.props.onIsOpenedChanged({ isOpened: isOpened });
      } else {
        _this.setState({ isOpened: isOpened });
      }
    };

    _this.isOpened = function () {
      return _this.isControlled() ? _this.props.isOpened : get(_this.state, 'isOpened', false);
    };

    _this.handleDocumentClick = function (_ref) {
      var target = _ref.target;

      if (!_this.controlRef.current.contains(target) && document.body.querySelector('#root').contains(target)) {
        _this.onToggle();
      }
    };

    _this.onToggle = function () {
      return _this.setIsOpened(!_this.isOpened());
    };

    _this.renderControlButtonContent = function () {
      var _this$props = _this.props,
          title = _this$props.title,
          icon = _this$props.icon,
          iconPosition = _this$props.iconPosition;
      var LEFT = POSITION.LEFT,
          RIGHT = POSITION.RIGHT;


      if (iconPosition === LEFT) {
        return React.createElement(
          Fragment,
          null,
          icon,
          title
        );
      }

      if (iconPosition === RIGHT) {
        return React.createElement(
          Fragment,
          null,
          title,
          icon
        );
      }

      return title;
    };

    _this.renderPopoverBody = function () {
      if (!_this.isOpened()) {
        return null;
      }

      var _this$props2 = _this.props,
          popoverBodyClassName = _this$props2.popoverBodyClassName,
          popoverBodyStyles = _this$props2.popoverBodyStyles,
          children = _this$props2.children;
      var _this$controlRef$curr = _this.controlRef.current,
          offsetLeft = _this$controlRef$curr.offsetLeft,
          offsetWidth = _this$controlRef$curr.offsetWidth,
          clientWidth = _this$controlRef$curr.offsetParent.clientWidth;

      var visibleWidthPopover = clientWidth - (offsetLeft + offsetWidth);
      if (visibleWidthPopover < popoverBodyStyles.width) {
        popoverBodyStyles.right = '0px';
      }

      return React.createElement(
        'div',
        {
          className: classNames('vg-popover__body', popoverBodyClassName),
          style: popoverBodyStyles
        },
        children
      );
    };

    _this.renderButton = function () {
      var _this$props3 = _this.props,
          isHighlighted = _this$props3.isHighlighted,
          disabled = _this$props3.disabled,
          buttonClassName = _this$props3.buttonClassName,
          activeButtonClassName = _this$props3.activeButtonClassName,
          tooltip = _this$props3.tooltip,
          title = _this$props3.title;


      var popoverButtonClassNames = classNames(buttonClassName, defineProperty({}, activeButtonClassName, _this.isOpened() || isHighlighted));
      return React.createElement(
        'button',
        {
          className: popoverButtonClassNames,
          type: 'button',
          onClick: _this.onToggle,
          title: tooltip ? title : '',
          disabled: disabled
        },
        _this.renderControlButtonContent()
      );
    };

    _this.state = {
      isOpened: _this.isOpened()
    };
    _this.controlRef = createRef();
    return _this;
  }

  createClass(PopoverControl, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleEventListeners();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.isOpened !== prevProps.isOpened || this.state.isOpened !== prevState.isOpened) {
        this.handleEventListeners();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          dataSelenium = _props.dataSelenium,
          tooltip = _props.tooltip,
          description = _props.description,
          owner = _props.owner;


      var popoverClassNames = classNames('vg-popover', className);

      return React.createElement(
        'div',
        {
          ref: this.controlRef,
          className: popoverClassNames,
          'data-selenium': dataSelenium
        },
        tooltip ? React.createElement(
          TooltipComponent,
          { text: description, textBottom: owner },
          this.renderButton()
        ) : this.renderButton(),
        this.renderPopoverBody()
      );
    }
  }]);
  return PopoverControl;
}(Component);

PopoverControl.propTypes = {
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
  owner: PropTypes.string
};
PopoverControl.defaultProps = {
  className: '',
  icon: null,
  iconPosition: POSITION.LEFT,
  isHighlighted: false,
  disabled: false,
  popoverBodyStyles: {},
  onIsOpenedChanged: function onIsOpenedChanged() {},
  buttonClassName: 'vg-popover__button',
  popoverBodyClassName: '',
  activeButtonClassName: 'vg-popover__button_active',
  tooltip: false,
  description: '',
  owner: ''
};

var ButtonDropdownMenuComponent = function (_React$Component) {
  inherits(ButtonDropdownMenuComponent, _React$Component);

  function ButtonDropdownMenuComponent() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ButtonDropdownMenuComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ButtonDropdownMenuComponent.__proto__ || Object.getPrototypeOf(ButtonDropdownMenuComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpened: false
    }, _this.isDisabled = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          disableIfEmpty = _this$props.disableIfEmpty,
          children = _this$props.children;


      if (disabled !== undefined) {
        return disabled;
      }

      if (disableIfEmpty) {
        return React.Children.count(children) === 0;
      }

      return false;
    }, _this.toggle = function () {
      _this.setState(function (prevState) {
        return { isOpened: !prevState.isOpened };
      });
    }, _this.changeIsOpened = function (_ref2) {
      var isOpened = _ref2.isOpened;

      if (!_this.isDisabled()) {
        _this.setState({ isOpened: isOpened });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ButtonDropdownMenuComponent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          title = _props.title,
          wrapperClassName = _props.wrapperClassName,
          children = _props.children;
      var isOpened = this.state.isOpened;


      return React.createElement(
        PopoverControl,
        {
          title: title,
          className: wrapperClassName,
          popoverBodyClassName: 'vg-dropdown-menu__body',
          buttonClassName: 'vg-button vg-button_submit vg-dropdown-menu__control vg-dropdown-menu__control__button',
          activeButtonClassName: 'vg-dropdown-menu__control__button--active',
          icon: React.createElement('img', { src: ArrowDownIcon, alt: title + '}' }),
          iconPosition: POSITION.RIGHT,
          isOpened: isOpened,
          disabled: this.isDisabled(),
          onIsOpenedChanged: this.changeIsOpened
        },
        React.Children.map(children, function (child) {
          return React.cloneElement(child, { toggle: _this2.toggle });
        })
      );
    }
  }]);
  return ButtonDropdownMenuComponent;
}(React.Component);

ButtonDropdownMenuComponent.propTypes = {
  title: PropTypes.string.isRequired,
  disableIfEmpty: PropTypes.bool,
  wrapperClassName: PropTypes.string,
  disabled: PropTypes.bool // intended to be undefined by default
};
ButtonDropdownMenuComponent.defaultProps = {
  disableIfEmpty: false,
  wrapperClassName: ''
};
var ButtonDropdownMenu = ButtonDropdownMenuComponent;

var DropdownLoader = function DropdownLoader() {
  return React.createElement(
    "div",
    { className: "vg-dropdown-menu__loader-container" },
    React.createElement("div", { className: "k-loading-image" })
  );
};

var IconDropdownMenu = function (_Component) {
  inherits(IconDropdownMenu, _Component);

  function IconDropdownMenu() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, IconDropdownMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = IconDropdownMenu.__proto__ || Object.getPrototypeOf(IconDropdownMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpened: false
    }, _this.getIconSrc = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          iconSrc = _this$props.iconSrc,
          disabledIconSrc = _this$props.disabledIconSrc;


      if (disabled && disabledIconSrc) {
        return disabledIconSrc;
      }

      return iconSrc;
    }, _this.getButtonClassName = function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          disabledIconSrc = _this$props2.disabledIconSrc;


      return classNames('vg-icon-button', 'vg-dropdown-menu__control', 'vg-dropdown-menu__control__icon', { 'vg-icon-button--disabled': disabled && disabledIconSrc === undefined });
    }, _this.toggle = function () {
      _this.setState(function (prevState) {
        return { isOpened: !prevState.isOpened };
      });
    }, _this.changeIsOpened = function (_ref2) {
      var isOpened = _ref2.isOpened;

      if (!_this.props.disabled) {
        _this.setState({ isOpened: isOpened });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(IconDropdownMenu, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // Dropdown menu was opened
      if (!prevState.isOpened && this.state.isOpened) {
        this.props.onOpen();
      }

      // Dropdown menu was closed
      if (prevState.isOpened && !this.state.isOpened) {
        this.props.onClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          iconAlt = _props.iconAlt,
          children = _props.children,
          disabled = _props.disabled,
          loading = _props.loading;
      var isOpened = this.state.isOpened;


      return React.createElement(
        PopoverControl,
        {
          title: '',
          popoverBodyClassName: 'vg-dropdown-menu__body',
          className: 'd-inline-block',
          buttonClassName: this.getButtonClassName(),
          activeButtonClassName: 'vg-dropdown-menu__control__icon--active',
          icon: React.createElement('img', { src: this.getIconSrc(), alt: iconAlt }),
          isOpened: isOpened,
          disabled: disabled,
          onIsOpenedChanged: this.changeIsOpened
        },
        loading ? React.createElement(DropdownLoader, null) : React.Children.map(children, function (child) {
          return React.cloneElement(child, { toggle: _this2.toggle });
        })
      );
    }
  }]);
  return IconDropdownMenu;
}(Component);
IconDropdownMenu.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  disabledIconSrc: PropTypes.string, // intended to be undefined by default
  iconAlt: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};
IconDropdownMenu.defaultProps = {
  disabled: false,
  loading: false,
  onOpen: function onOpen() {},
  onClose: function onClose() {}
};

var DropdownItem = function (_React$Component) {
  inherits(DropdownItem, _React$Component);

  function DropdownItem() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, DropdownItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call.apply(_ref, [this].concat(args))), _this), _this.className = 'vg-dropdown-menu__item', _this.getContainerClassName = function () {
      return classNames(_this.className, defineProperty({}, _this.className + '__disabled', _this.props.disabled));
    }, _this.onClick = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          toggle = _this$props.toggle;


      if (!disabled) {
        onClick();
        toggle();
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(DropdownItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          children = _props.children;


      return React.createElement(
        'button',
        {
          type: 'button',
          className: this.getContainerClassName(),
          onClick: disabled ? undefined : this.onClick,
          disabled: disabled
        },
        children
      );
    }
  }]);
  return DropdownItem;
}(React.Component);
DropdownItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
DropdownItem.defaultProps = {
  disabled: false
};



var index = /*#__PURE__*/Object.freeze({
  ButtonDropdownMenuComponent: ButtonDropdownMenuComponent,
  ButtonDropdownMenu: ButtonDropdownMenu,
  IconDropdownMenu: IconDropdownMenu,
  DropdownItem: DropdownItem,
  DropdownLoader: DropdownLoader
});

export { index as DropdownMenu2 };
//# sourceMappingURL=index.es.js.map
