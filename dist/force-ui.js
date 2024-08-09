(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["forceUI"] = factory();
	else
		root["forceUI"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/avatar/avatar.jsx":
/*!******************************************!*\
  !*** ./src/components/avatar/avatar.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility/utils */ "./src/utility/utils.js");

var Avatar = function Avatar(props) {
  var _white$gray$primary$p, _xs$sm$md$lg, _none$subtle$ring;
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'primary' : _props$variant,
    _props$size = props.size,
    size = _props$size === void 0 ? 'md' : _props$size,
    _props$border = props.border,
    border = _props$border === void 0 ? 'subtle' : _props$border,
    _props$url = props.url,
    url = _props$url === void 0 ? '' : _props$url,
    children = props.children,
    className = props.className;
  var effectiveBorder = url && border === 'none' ? 'subtle' : border;
  var baseClasses = 'rounded-full overflow-hidden flex items-center justify-center';
  var variantClasses = (_white$gray$primary$p = {
    white: 'text-text-primary bg-background-primary',
    gray: 'text-text-primary bg-background-secondary',
    primary: 'text-text-on-color bg-background-brand',
    primaryLight: 'text-text-primary bg-brand-background-50',
    dark: 'text-text-on-color bg-button-secondary'
  }) === null || _white$gray$primary$p === void 0 ? void 0 : _white$gray$primary$p[variant];
  var sizeClasses = (_xs$sm$md$lg = {
    xs: 'w-5 h-5 [&>svg]:h-3 [&>svg]:w-3 text-xs',
    sm: 'w-6 h-6 [&>svg]:h-4 [&>svg]:w-4 text-sm',
    md: 'w-8 h-8 [&>svg]:h-5 [&>svg]:w-5 text-base',
    lg: 'w-10 h-10 [&>svg]:h-6 [&>svg]:w-6 text-lg'
  }) === null || _xs$sm$md$lg === void 0 ? void 0 : _xs$sm$md$lg[size];
  var borderClasses = (_none$subtle$ring = {
    none: '',
    subtle: 'border border-solid border-border-transparent-subtle',
    ring: 'border-4 border-solid border-border-white'
  }) === null || _none$subtle$ring === void 0 ? void 0 : _none$subtle$ring[effectiveBorder];
  var contentClasses = url ? 'bg-cover bg-center bg-no-repeat' : '';
  var getChildren = function getChildren() {
    if (!children) {
      return null;
    }
    if (typeof children === 'string') {
      var _children$;
      return children === null || children === void 0 || (_children$ = children[0]) === null || _children$ === void 0 ? void 0 : _children$.toUpperCase();
    }
    return children;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_0__.cn)(baseClasses, !url && variantClasses, sizeClasses, borderClasses, contentClasses, className),
    style: url ? {
      backgroundImage: "url(".concat(url, ")")
    } : {}
  }, getChildren());
};
/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./src/components/avatar/index.js":
/*!****************************************!*\
  !*** ./src/components/avatar/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _avatar_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _avatar_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar.jsx */ "./src/components/avatar/avatar.jsx");


/***/ }),

/***/ "./src/components/badge/badge.jsx":
/*!****************************************!*\
  !*** ./src/components/badge/badge.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "../../node_modules/lucide-react/dist/esm/icons/info.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "../../node_modules/lucide-react/dist/esm/icons/x.js");



/**
 * Badge component.
 */

var Badge = function Badge(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? '' : _props$label,
    _props$size = props.size,
    size = _props$size === void 0 ? 'sm' : _props$size,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$type = props.type,
    type = _props$type === void 0 ? 'pill' : _props$type,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'neutral' : _props$variant,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], null) : _props$icon,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$onClose = props.onClose,
    onClose = _props$onClose === void 0 ? function () {} : _props$onClose,
    _props$closable = props.closable,
    closable = _props$closable === void 0 ? true : _props$closable;

  // Base classes. - Mandatory classes.
  var baseClasses = 'font-medium border border-badge-border-gray flex gap-1 items-center justify-center border border-solid';

  // Size classes - Based on the size prop.
  var sizeClasses = {
    xs: 'py-0.5 px-1 text-xs',
    sm: 'py-1 px-1.5 text-xs',
    md: 'py-1 px-1.5 text-sm',
    lg: 'py-1 px-1.5 text-base'
  };

  // Type classes - Based on the type prop.
  var typeClasses = {
    pill: 'rounded-full',
    rounded: 'rounded'
  };

  // Variant classes - Based on the variant prop.
  var variantClasses = {
    neutral: 'bg-badge-background-gray hover:bg-badge-hover-gray text-badge-color-gray border-badge-border-gray',
    red: 'bg-badge-background-red hover:bg-badge-hover-red text-badge-color-red border-badge-border-red',
    yellow: 'bg-badge-background-yellow hover:bg-badge-hover-yellow text-badge-color-yellow border-badge-border-yellow',
    green: 'bg-badge-background-green hover:bg-badge-hover-green text-badge-color-green border-badge-border-green',
    blue: 'bg-badge-background-sky hover:bg-badge-hover-sky text-badge-color-sky border-badge-border-sky',
    inverse: 'bg-background-inverse hover:bg-badge-hover-inverse text-text-inverse border-background-inverse',
    disabled: 'bg-badge-background-disabled hover:bg-badge-hover-disabled text-badge-color-disabled border-badge-border-disabled disabled cursor-not-allowed'
  };
  var filteredClasses = '';
  var buttonClasses = 'group relative justify-center flex items-center [&>svg]:h-4 [&>svg]:w-4 cursor-pointer';
  if (disabled) {
    filteredClasses = variantClasses.disabled;
    buttonClasses += ' cursor-not-allowed disabled';
  } else {
    filteredClasses = variantClasses[variant];
  }
  if (!label) {
    return null;
  }
  return /*#__PURE__*/React.createElement("span", {
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_0__.cn)(baseClasses, sizeClasses[size], typeClasses[type], filteredClasses, className)
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "justify-center flex items-center [&>svg]:h-4 [&>svg]:w-4"
  }, icon) : null, label, closable && /*#__PURE__*/React.createElement("span", {
    className: buttonClasses,
    onClick: !disabled ? onClose : null
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Remove ".concat(label)), /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/React.createElement("span", {
    className: "absolute -inset-1"
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Badge);

/***/ }),

/***/ "./src/components/badge/index.js":
/*!***************************************!*\
  !*** ./src/components/badge/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _badge_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _badge_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badge.jsx */ "./src/components/badge/badge.jsx");


/***/ }),

/***/ "./src/components/button-group/button-group.jsx":
/*!******************************************************!*\
  !*** ./src/components/button-group/button-group.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utility/utils */ "./src/utility/utils.js");
var _excluded = ["slug", "text", "icon", "className", "disabled", "isFirstChild", "isLastChild"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}



/**
 * Context for managing the ButtonGroup state.
 */
var ButtonGroupContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();

/**
 * Hook to use the ButtonGroup context.
 * @return {Object} The context value of the ButtonGroup.
 */
var useButtonGroup = function useButtonGroup() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ButtonGroupContext);
};

/**
 * ButtonGroup component to wrap Button components.
 * @param {Object}          props                       - The properties passed to the component.
 * @param {React.ReactNode} props.children              - The children elements, expected to be Button components.
 * @param {string|null}     [props.activeItem=null]     - The currently active item in the group.
 * @param {Function}        [props.onChange]            - Callback when the active item changes.
 * @param {string}          [props.className]           - Additional class names for styling.
 * @param {string}          [props.size='md']           - Size of the buttons in the group ('xs', 'sm', 'md').
 * @param {string}          [props.iconPosition='left'] - Position of the icon in the button ('left' or 'right').
 */
var ButtonGroup = function ButtonGroup(props) {
  var children = props.children,
    _props$activeItem = props.activeItem,
    activeItem = _props$activeItem === void 0 ? null : _props$activeItem,
    onChange = props.onChange,
    className = props.className,
    _props$size = props.size,
    size = _props$size === void 0 ? 'md' : _props$size,
    _props$iconPosition = props.iconPosition,
    iconPosition = _props$iconPosition === void 0 ? 'left' : _props$iconPosition;
  var handleChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event, value) {
    if (onChange) {
      onChange({
        event: event,
        value: value
      });
    }
  }, [onChange]);
  var groupClassName = (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)('box-border flex border border-border-subtle border-solid rounded', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: groupClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ButtonGroupContext.Provider, {
    value: {
      activeItem: activeItem,
      onChange: handleChange,
      size: size,
      iconPosition: iconPosition
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, function (child, index) {
    if (! /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)) {
      return null;
    }
    var isFirstChild = index === 0;
    var isLastChild = index === react__WEBPACK_IMPORTED_MODULE_0___default().Children.count(children) - 1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
      index: index,
      isFirstChild: isFirstChild,
      isLastChild: isLastChild
    });
  })));
};

/**
 * Button component to be used within a ButtonGroup.
 * @param {Object}          props                  - The properties passed to the component.
 * @param {string}          props.slug             - Unique identifier for the button.
 * @param {string}          props.text             - Text to be displayed inside the button.
 * @param {React.ReactNode} [props.icon]           - Optional icon to be displayed inside the button.
 * @param {string}          [props.className]      - Additional class names for styling.
 * @param {boolean}         props.isFirstChild     - Flag indicating if this button is the first child in the group.
 * @param {boolean}         props.isLastChild      - Flag indicating if this button is the last child in the group.
 * @param {boolean}         [props.disabled=false] - Flag indicating if the button is disabled.
 * @param {Object}          [props.rest]           - Other properties to be passed to the button element.
 * @param {React.Ref}       ref                    - Reference to the button element.
 */
var Button = function Button(props, ref) {
  var providerValue = useButtonGroup();
  var slug = props.slug,
    text = props.text,
    icon = props.icon,
    className = props.className,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    isFirstChild = props.isFirstChild,
    isLastChild = props.isLastChild,
    rest = _objectWithoutProperties(props, _excluded);
  if (!providerValue) {
    throw new Error('Button should be used inside Button Group');
  }
  var activeItem = providerValue.activeItem,
    onChange = providerValue.onChange,
    size = providerValue.size,
    iconPosition = providerValue.iconPosition;
  var sizes = {
    xs: 'py-1 px-1 text-sm gap-0.5 [&>svg]:h-4 [&>svg]:w-4',
    sm: 'py-2 px-2 text-base gap-1 [&>svg]:h-4 [&>svg]:w-4',
    md: 'py-2.5 px-2.5 text-base gap-1 [&>svg]:h-5 [&>svg]:w-5'
  };
  var baseClasses = 'bg-background-primary text-primary cursor-pointer flex items-center justify-center';

  // Button hover classes.
  var hoverClasses = 'hover:bg-button-tertiary-hover';

  // Button focus classes.
  var focusClasses = 'focus:outline-none';

  // Button disabled classes.
  var disabledClasses = disabled ? 'text-text-disabled cursor-not-allowed' : '';
  var firstChildClasses = isFirstChild ? 'rounded-tl rounded-bl border-0 border-r border-border-subtle' : '';
  var lastChildClasses = isLastChild ? 'rounded-tr rounded-br border-0' : '';
  var borderClasses = 'border-0 border-r border-border-subtle border-solid';
  var activeClasses = activeItem === slug ? 'bg-button-disabled' : '';
  var buttonClassName = (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(baseClasses, hoverClasses, focusClasses, disabledClasses, sizes[size], borderClasses, activeClasses, firstChildClasses, lastChildClasses, className);
  var handleClick = function handleClick(event) {
    onChange(event, {
      slug: slug,
      text: text
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
    ref: ref,
    className: buttonClassName,
    disabled: disabled,
    onClick: handleClick
  }, rest), iconPosition === 'left' && icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "mr-1"
  }, icon), text, iconPosition === 'right' && icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ml-1"
  }, icon));
};
var exports = {
  Group: ButtonGroup,
  Button: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Button)
};
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/components/button-group/index.js":
/*!**********************************************!*\
  !*** ./src/components/button-group/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _button_group_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _button_group_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-group.jsx */ "./src/components/button-group/button-group.jsx");


/***/ }),

/***/ "./src/components/button/button.jsx":
/*!******************************************!*\
  !*** ./src/components/button/button.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility/utils */ "./src/utility/utils.js");
var _excluded = ["variant", "size", "type", "tag", "className", "children", "disabled", "destructive", "icon", "iconPosition"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var Button = function Button(props) {
  var _primary$secondary$ou, _primary$outline$ghos, _xs$sm$md$lg;
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'primary' : _props$variant,
    _props$size = props.size,
    size = _props$size === void 0 ? 'md' : _props$size,
    _props$type = props.type,
    type = _props$type === void 0 ? 'button' : _props$type,
    _props$tag = props.tag,
    tag = _props$tag === void 0 ? 'button' : _props$tag,
    className = props.className,
    children = props.children,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$destructive = props.destructive,
    destructive = _props$destructive === void 0 ? false : _props$destructive,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? null : _props$icon,
    _props$iconPosition = props.iconPosition,
    iconPosition = _props$iconPosition === void 0 ? 'left' : _props$iconPosition,
    rest = _objectWithoutProperties(props, _excluded);
  var commonClass = 'border border-solid cursor-pointer transition-colors duration-300 ease-in-out text-xs font-semibold focus:ring-2 focus:ring-toggle-on focus:ring-offset-2 disabled:text-text-disabled';
  var variantClassNames = (_primary$secondary$ou = {
    primary: 'text-text-on-color bg-button-primary hover:bg-button-primary-hover border-button-primary hover:border-button-primary-hover disabled:bg-button-disabled disabled:border-button-disabled',
    secondary: 'text-text-on-color bg-button-secondary hover:bg-button-secondary-hover border-button-secondary hover:border-button-secondary-hover disabled:bg-button-disabled disabled:border-button-disabled',
    outline: 'text-button-tertiary-color border border-border-subtle bg-button-tertiary hover:bg-button-tertiary-hover hover:border-border-subtle disabled:bg-button-tertiary disabled:border-border-disabled',
    ghost: 'text-text-primary bg-transparent border border-transparent hover:bg-button-tertiary-hover',
    link: 'text-link-primary bg-transparent hover:text-link-primary-hover hover:underline p-0 border-0 leading-none'
  }) === null || _primary$secondary$ou === void 0 ? void 0 : _primary$secondary$ou[variant];
  var destructiveClassNames = destructive && !disabled ? (_primary$outline$ghos = {
    primary: 'bg-button-danger hover:bg-button-danger-hover border-button-danger hover:border-button-danger-hover',
    outline: 'text-button-danger border border-button-danger hover:border-button-danger bg-button-tertiary hover:bg-field-background-error',
    ghost: 'text-button-danger hover:bg-field-background-error',
    link: 'text-button-danger hover:text-button-danger-secondary'
  }) === null || _primary$outline$ghos === void 0 ? void 0 : _primary$outline$ghos[variant] : '';
  var sizeClassNames = (_xs$sm$md$lg = {
    xs: 'p-1 rounded-sm [&>svg]:h-4 [&>svg]:w-4',
    sm: 'p-2 rounded-sm [&>svg]:h-4 [&>svg]:w-4',
    md: 'p-2.5 rounded-md text-sm [&>svg]:h-5 [&>svg]:w-5',
    lg: 'p-3 rounded-lg text-base [&>svg]:h-6 [&>svg]:w-6'
  }) === null || _xs$sm$md$lg === void 0 ? void 0 : _xs$sm$md$lg[size];
  var iconLeft,
    iconRight = null;
  var iconClass = '';
  if (icon) {
    iconClass = 'flex items-center justify-center gap-1';
    if (iconPosition === 'left') {
      iconLeft = icon;
    } else {
      iconRight = icon;
    }
  }
  var Tag = tag;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    type: type,
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_0__.cn)(iconClass, commonClass, sizeClassNames, variantClassNames, destructiveClassNames, className),
    disabled: disabled
  }, rest), iconLeft, children, iconRight);
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/button/index.js":
/*!****************************************!*\
  !*** ./src/components/button/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _button_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _button_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.jsx */ "./src/components/button/button.jsx");


/***/ }),

/***/ "./src/components/checkbox/checkbox.jsx":
/*!**********************************************!*\
  !*** ./src/components/checkbox/checkbox.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "../../node_modules/lucide-react/dist/esm/icons/minus.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "../../node_modules/lucide-react/dist/esm/icons/check.js");
var _excluded = ["id", "label", "defaultChecked", "checked", "onChange", "value", "indeterminate", "disabled", "size"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}




var Checkbox = function Checkbox(_ref, ref) {
  var _sizeClassNames$size, _sizeClassNames$size2;
  var id = _ref.id,
    label = _ref.label,
    _ref$defaultChecked = _ref.defaultChecked,
    defaultChecked = _ref$defaultChecked === void 0 ? false : _ref$defaultChecked,
    checked = _ref.checked,
    onChange = _ref.onChange,
    value = _ref.value,
    indeterminate = _ref.indeterminate,
    disabled = _ref.disabled,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  var checkboxId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return id || "checkbox-".concat((0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)());
  }, [id]);
  var isControlled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return typeof checked !== 'undefined';
  }, [checked]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultChecked || false),
    _useState2 = _slicedToArray(_useState, 2),
    isChecked = _useState2[0],
    setIsChecked = _useState2[1];
  var color = 'primary';
  var sizeClassNames = {
    sm: {
      checkbox: 'size-4 rounded-sm',
      icon: 'size-3'
    },
    md: {
      checkbox: 'size-5 rounded',
      icon: 'size-4'
    }
  };
  var colorClassNames = {
    primary: {
      checkbox: 'border-border-strong hover:border-border-interactive checked:border-border-interactive bg-white checked:bg-toggle-on checked:hover:bg-toggle-on-hover checked:hover:border-toggle-on-hover focus:ring-2 focus:ring-offset-4 focus:ring-focus',
      icon: 'text-white'
    }
  };
  var disabledClassNames = {
    checkbox: 'disabled:bg-white checked:disabled:bg-white disabled:border-border-disabled checked:disabled:border-border-disabled',
    icon: 'peer-disabled:text-border-disabled'
  };
  var getValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return isControlled ? checked : isChecked;
  }, [isControlled, checked, isChecked]);
  var handleChange = function handleChange(event) {
    if (disabled) {
      return;
    }
    var newValue = event.target.checked;
    if (!isControlled) {
      setIsChecked(newValue);
    }
    if (typeof onChange !== 'function') {
      return;
    }
    onChange(newValue);
  };
  var renderLabel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if ( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(label)) {
      return label;
    }
    if (!label.heading || !label.description) {
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-1.5"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-text-primary text-base font-medium leading-4 m-0"
    }, label.heading), /*#__PURE__*/React.createElement("p", {
      className: "text-text-secondary text-sm font-normal leading-5 m-0"
    }, label.description));
  }, [label]);
  return /*#__PURE__*/React.createElement("div", {
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)('inline-flex items-center', !!label && 'items-start')
  }, /*#__PURE__*/React.createElement("label", {
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)('relative flex items-center rounded-full', !disabled && 'cursor-pointer'),
    htmlFor: checkboxId
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    id: checkboxId,
    type: "checkbox",
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("peer relative cursor-pointer appearance-none transition-all m-0 before:content-[''] checked:before:content-[''] checked:before:hidden before:hidden !border-1.5 border-solid", colorClassNames[color].checkbox, sizeClassNames[size].checkbox, disabled && disabledClassNames.checkbox),
    checked: getValue(),
    onChange: handleChange,
    disabled: disabled
  }, props)), /*#__PURE__*/React.createElement("span", {
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)('pointer-events-none inline-flex items-center absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100', colorClassNames[color].icon, disabled && disabledClassNames.icon)
  }, indeterminate ? /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)((_sizeClassNames$size = sizeClassNames[size]) === null || _sizeClassNames$size === void 0 ? void 0 : _sizeClassNames$size.icon)
  }) : /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)((_sizeClassNames$size2 = sizeClassNames[size]) === null || _sizeClassNames$size2 === void 0 ? void 0 : _sizeClassNames$size2.icon)
  }))), !!label && /*#__PURE__*/React.createElement("label", {
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)('ml-3', !disabled && 'cursor-pointer'),
    htmlFor: checkboxId
  }, renderLabel()));
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Checkbox));

/***/ }),

/***/ "./src/components/checkbox/index.js":
/*!******************************************!*\
  !*** ./src/components/checkbox/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _checkbox_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _checkbox_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.jsx */ "./src/components/checkbox/checkbox.jsx");


/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Avatar: function() { return /* reexport safe */ _avatar_index__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   Badge: function() { return /* reexport safe */ _badge_index__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   Button: function() { return /* reexport safe */ _button_index__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   ButtonGroup: function() { return /* reexport safe */ _button_group_index__WEBPACK_IMPORTED_MODULE_11__["default"]; },
/* harmony export */   Checkbox: function() { return /* reexport safe */ _checkbox_index__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   Input: function() { return /* reexport safe */ _input_index__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   Label: function() { return /* reexport safe */ _label_index__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   Loader: function() { return /* reexport safe */ _loader_index__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   ProgressBar: function() { return /* reexport safe */ _progress_bar_index__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   RadioButton: function() { return /* reexport safe */ _radio_button_index__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   Switch: function() { return /* reexport safe */ _switch_index__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   Tabs: function() { return /* reexport safe */ _tabs_index__WEBPACK_IMPORTED_MODULE_12__["default"]; },
/* harmony export */   TextArea: function() { return /* reexport safe */ _textarea_index__WEBPACK_IMPORTED_MODULE_5__["default"]; }
/* harmony export */ });
/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button/index */ "./src/components/button/index.js");
/* harmony import */ var _switch_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switch/index */ "./src/components/switch/index.js");
/* harmony import */ var _checkbox_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox/index */ "./src/components/checkbox/index.js");
/* harmony import */ var _radio_button_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-button/index */ "./src/components/radio-button/index.js");
/* harmony import */ var _badge_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./badge/index */ "./src/components/badge/index.js");
/* harmony import */ var _textarea_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./textarea/index */ "./src/components/textarea/index.js");
/* harmony import */ var _avatar_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./avatar/index */ "./src/components/avatar/index.js");
/* harmony import */ var _input_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input/index */ "./src/components/input/index.js");
/* harmony import */ var _label_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./label/index */ "./src/components/label/index.js");
/* harmony import */ var _loader_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loader/index */ "./src/components/loader/index.js");
/* harmony import */ var _progress_bar_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./progress-bar/index */ "./src/components/progress-bar/index.js");
/* harmony import */ var _button_group_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./button-group/index */ "./src/components/button-group/index.js");
/* harmony import */ var _tabs_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabs/index */ "./src/components/tabs/index.js");














/***/ }),

/***/ "./src/components/input/index.js":
/*!***************************************!*\
  !*** ./src/components/input/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _input_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _input_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.jsx */ "./src/components/input/input.jsx");


/***/ }),

/***/ "./src/components/input/input.jsx":
/*!****************************************!*\
  !*** ./src/components/input/input.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utility/utils */ "./src/utility/utils.js");
var _excluded = ["id", "type", "defaultValue", "value", "size", "className", "disabled", "onChange", "error", "onError", "prefix", "suffix"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}



var Input = function Input(_ref, ref) {
  var id = _ref.id,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? '' : _ref$defaultValue,
    value = _ref.value,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'sm' : _ref$size,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? false : _ref$error,
    _ref$onError = _ref.onError,
    onError = _ref$onError === void 0 ? function () {} : _ref$onError,
    _ref$prefix = _ref.prefix,
    prefix = _ref$prefix === void 0 ? null : _ref$prefix,
    _ref$suffix = _ref.suffix,
    suffix = _ref$suffix === void 0 ? null : _ref$suffix,
    props = _objectWithoutProperties(_ref, _excluded);
  var inputId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return id || "input-".concat(type, "-").concat((0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)());
  }, [id]);
  var isControlled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return typeof value !== 'undefined';
  }, [value]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var getValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return isControlled ? value : inputValue;
  }, [isControlled, value, inputValue]);
  var handleChange = function handleChange(event) {
    if (disabled) {
      return;
    }
    var newValue = event.target.value;
    if (!isControlled) {
      setInputValue(newValue);
    }
    if (typeof onChange !== 'function') {
      return;
    }
    onChange(newValue);
  };
  var baseClasses = 'border border-solid border-border-subtle bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary';
  var sizeClasses = {
    sm: 'px-2 py-2 rounded',
    md: 'px-2.5 py-2.5 rounded-md',
    lg: 'px-3 py-3 rounded-lg'
  };
  var textClasses = {
    sm: 'text-xs',
    md: 'text-base',
    lg: 'text-base'
  };
  var sizeClassesWithPrefix = {
    sm: prefix ? 'pl-8' : '',
    md: prefix ? 'pl-9' : '',
    lg: prefix ? 'pl-10' : ''
  };
  var sizeClassesWithSuffix = {
    sm: suffix ? 'pr-8' : '',
    md: suffix ? 'pr-9' : '',
    lg: suffix ? 'pr-10' : ''
  };
  var hoverClasses = disabled ? 'hover:border-border-disabled' : 'hover:border-border-strong';
  var focusClasses = 'focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2';
  var errorClasses = error ? 'focus:border-focus-error-border focus:ring-field-color-error bg-field-background-error' : '';
  var disabledClasses = disabled ? 'border-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled' : '';
  var iconClasses = 'font-normal placeholder-text-tertiary text-text-primary pointer-events-none absolute inset-y-0 flex flex-1 items-center [&>svg]:h-4 [&>svg]:w-4';
  var getPrefix = function getPrefix() {
    if (!prefix) {
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(iconClasses, 'left-0 pl-3', textClasses[size])
    }, prefix);
  };
  var getSuffix = function getSuffix() {
    if (!suffix) {
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(iconClasses, 'right-0 pr-3', textClasses[size])
    }, suffix);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)('relative flex focus-within:z-10', className)
  }, getPrefix(), /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    id: inputId,
    type: type,
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(baseClasses, disabledClasses, sizeClasses[size], textClasses[size], sizeClassesWithPrefix[size], sizeClassesWithSuffix[size], focusClasses, hoverClasses, errorClasses),
    disabled: disabled,
    onChange: handleChange,
    onInvalid: onError,
    value: getValue()
  }, props)), getSuffix());
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Input));

/***/ }),

/***/ "./src/components/label/index.js":
/*!***************************************!*\
  !*** ./src/components/label/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _label_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _label_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label.jsx */ "./src/components/label/label.jsx");


/***/ }),

/***/ "./src/components/label/label.jsx":
/*!****************************************!*\
  !*** ./src/components/label/label.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility/utils */ "./src/utility/utils.js");
var _excluded = ["children", "tag", "size", "className", "variant", "required"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}


/**
 * Label component.
 */

var Label = function Label(_ref) {
  var _ref$children = _ref.children,
    children = _ref$children === void 0 ? null : _ref$children,
    _ref$tag = _ref.tag,
    tag = _ref$tag === void 0 ? 'label' : _ref$tag,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'sm' : _ref$size,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'neutral' : _ref$variant,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    props = _objectWithoutProperties(_ref, _excluded);
  // Base classes. - Mandatory classes.
  var baseClasses = 'font-medium text-field-label flex items-center gap-0.5';

  // Size classes - Based on the size prop.
  var sizeClasses = {
    xs: 'text-xs [&>*]:text-xs [&>svg]:h-3 [&>svg]:w-3',
    sm: 'text-sm [&>*]:text-sm [&>svg]:h-4 [&>svg]:w-4',
    md: 'text-base [&>*]:text-base [&>svg]:h-5 [&>svg]:w-5'
  };

  // Variant classes - Based on the variant prop.
  var variantClasses = {
    neutral: 'text-field-label [&>*]:text-field-label',
    help: 'text-field-helper [&>*]:text-field-helper',
    error: 'text-support-error [&>*]:text-support-error',
    disabled: 'text-field-color-disabled disabled cursor-not-allowed [&>*]:text-field-color-disabled'
  };
  if (!children) {
    return null;
  }
  var requiredClasses = '';
  if (required) {
    requiredClasses = "after:content-['*'] after:text-field-required after:ml-0.5";
  }
  var Tag = tag;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_0__.cn)(baseClasses, sizeClasses[size], variantClasses[variant], requiredClasses, className)
  }, props), children);
};
/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./src/components/loader/index.js":
/*!****************************************!*\
  !*** ./src/components/loader/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _loader_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _loader_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.jsx */ "./src/components/loader/loader.jsx");


/***/ }),

/***/ "./src/components/loader/loader.jsx":
/*!******************************************!*\
  !*** ./src/components/loader/loader.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility/utils */ "./src/utility/utils.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "../../node_modules/lucide-react/dist/esm/icons/loader-circle.js");


var Loader = function Loader(_ref) {
  var _primary$secondary, _sm$md$lg$xl;
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? null : _ref$icon,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var variantClassNames = (_primary$secondary = {
    primary: 'text-brand-primary-600 bg-background-primary',
    secondary: 'text-background-primary bg-brand-primary-600'
  }) === null || _primary$secondary === void 0 ? void 0 : _primary$secondary[variant];
  var sizeClassNames = (_sm$md$lg$xl = {
    sm: '[&>svg]:h-4 [&>svg]:w-4',
    md: '[&>svg]:h-5 [&>svg]:w-5',
    lg: '[&>svg]:h-6 [&>svg]:w-6',
    xl: '[&>svg]:h-8 [&>svg]:w-8'
  }) === null || _sm$md$lg$xl === void 0 ? void 0 : _sm$md$lg$xl[size];
  return /*#__PURE__*/React.createElement("span", {
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_0__.cn)('flex', sizeClassNames, variantClassNames, className)
  }, icon ? icon : /*#__PURE__*/React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "animate-spin"
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./src/components/progress-bar/index.js":
/*!**********************************************!*\
  !*** ./src/components/progress-bar/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _progress_bar_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _progress_bar_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress-bar.jsx */ "./src/components/progress-bar/progress-bar.jsx");


/***/ }),

/***/ "./src/components/progress-bar/progress-bar.jsx":
/*!******************************************************!*\
  !*** ./src/components/progress-bar/progress-bar.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility/utils */ "./src/utility/utils.js");

var ProgressBar = function ProgressBar(_ref) {
  var _ref$progress = _ref.progress,
    progress = _ref$progress === void 0 ? 0 : _ref$progress,
    _ref$speed = _ref.speed,
    speed = _ref$speed === void 0 ? 200 : _ref$speed,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  if (!progress) {
    return null;
  }
  var percent = progress;
  if (progress < 0) {
    percent = 0;
  }
  if (progress > 100) {
    percent = 100;
  }
  var translateProperty = "translateX(-".concat(100 - percent, "%)");
  var innerClasses = "h-2 rounded-full bg-background-brand absolute left-0 top-0 w-full bottom-0 origin-left transition-transform duration-".concat(speed, " ease-linear");
  return /*#__PURE__*/React.createElement("div", {
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_0__.cn)('h-2 rounded-full bg-misc-progress-background overflow-hidden relative', className),
    role: "progressbar",
    "aria-valuenow": percent,
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }, /*#__PURE__*/React.createElement("div", {
    className: innerClasses,
    style: {
      transform: translateProperty
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./src/components/radio-button/index.js":
/*!**********************************************!*\
  !*** ./src/components/radio-button/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _radio_button_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _radio_button_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-button.jsx */ "./src/components/radio-button/radio-button.jsx");


/***/ }),

/***/ "./src/components/radio-button/radio-button.jsx":
/*!******************************************************!*\
  !*** ./src/components/radio-button/radio-button.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utility/utils */ "./src/utility/utils.js");
var _excluded = ["id", "label", "value", "disabled", "size"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}



var RadioButtonContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var useRadioButton = function useRadioButton() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RadioButtonContext);
};
var RadioButtonGroup = function RadioButtonGroup(_ref) {
  var children = _ref.children,
    name = _ref.name,
    value = _ref.value,
    defaultValue = _ref.defaultValue,
    _ref$by = _ref.by,
    by = _ref$by === void 0 ? 'id' : _ref$by,
    _ref$as = _ref.as,
    AsElement = _ref$as === void 0 ? react__WEBPACK_IMPORTED_MODULE_0__.Fragment : _ref$as,
    onChange = _ref.onChange,
    className = _ref.className,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var isControlled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return typeof value !== 'undefined';
  }, [value]);
  var nameAttr = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return name || "radio-button-group-".concat((0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)());
  }, [name]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isControlled ? value : defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    selectedValue = _useState2[0],
    setSelectedValue = _useState2[1];
  var handleChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var newValue = event.target.value;
    if (!isControlled) {
      setSelectedValue(newValue);
    }
    if (typeof onChange !== 'function') {
      return;
    }
    onChange(newValue);
  }, [onChange]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AsElement, AsElement === react__WEBPACK_IMPORTED_MODULE_0__.Fragment ? {} : {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RadioButtonContext.Provider, {
    value: {
      name: nameAttr,
      value: isControlled ? value : selectedValue,
      by: by,
      onChange: handleChange,
      isControlled: isControlled,
      disableAll: disabled
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, function (child) {
    if (! /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)) {
      return null;
    }
    return child;
  })));
};
var RadioButton = function RadioButton(_ref2, ref) {
  var _sizeClassNames$size;
  var id = _ref2.id,
    label = _ref2.label,
    value = _ref2.value,
    disabled = _ref2.disabled,
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 'md' : _ref2$size,
    props = _objectWithoutProperties(_ref2, _excluded);
  var providerValue = useRadioButton();
  if (!providerValue) {
    throw new Error('RadioButton should be used inside RadioButton Group');
  }
  var name = providerValue.name,
    selectedValue = providerValue.value,
    by = providerValue.by,
    onChange = providerValue.onChange,
    disableAll = providerValue.disableAll,
    checked = providerValue.checked;
  var color = 'primary';
  var radioButtonId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
      return id || "radio-button-".concat((0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)());
    }, [id]),
    isDisabled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
      return disableAll || disabled;
    }, [disableAll, disabled]);
  var checkedValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (typeof checked !== 'undefined') {
      return checked;
    }
    if (_typeof(selectedValue) !== _typeof(value)) {
      return false;
    }
    if (typeof selectedValue === 'string') {
      return selectedValue === value;
    }
    if (Array.isArray(selectedValue)) {
      return selectedValue.includes(value);
    }
    return selectedValue[by] === value[by];
  }, [selectedValue, value, checked]);
  var sizeClassNames = {
    sm: {
      checkbox: 'size-4',
      icon: 'size-1.5'
    },
    md: {
      checkbox: 'size-5',
      icon: 'size-2'
    }
  };
  var colorClassNames = {
    primary: {
      checkbox: 'border-border-strong hover:border-border-interactive checked:border-border-interactive bg-white checked:bg-toggle-on checked:hover:bg-toggle-on-hover checked:hover:border-toggle-on-hover focus:ring-2 focus:ring-offset-4 focus:ring-focus',
      icon: 'text-white'
    }
  };
  var disabledClassNames = {
    checkbox: 'disabled:bg-white checked:disabled:bg-white disabled:border-border-disabled checked:disabled:border-border-disabled',
    icon: 'peer-disabled:text-border-disabled'
  };
  var renderLabel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if ( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(label)) {
      return label;
    }
    if (!label.heading || !label.description) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "space-y-1.5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-text-primary text-base font-medium leading-4 m-0"
    }, label.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-text-secondary text-sm font-normal leading-5 m-0"
    }, label.description));
  }, [label]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)('inline-flex items-center', !!label && 'items-start')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)('relative flex items-center rounded-full', !isDisabled && 'cursor-pointer'),
    htmlFor: radioButtonId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    ref: ref,
    id: radioButtonId,
    type: "radio",
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("peer relative cursor-pointer appearance-none transition-all m-0 before:content-[''] checked:before:content-[''] checked:before:hidden before:hidden !border-1.5 border-solid rounded-full", colorClassNames[color].checkbox, sizeClassNames[size].checkbox, isDisabled && disabledClassNames.checkbox),
    name: name,
    value: value,
    onChange: onChange,
    checked: checkedValue,
    disabled: isDisabled
  }, props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)('pointer-events-none inline-flex items-center absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100', colorClassNames[color].icon, isDisabled && disabledClassNames.icon)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)('rounded-full bg-current', (_sizeClassNames$size = sizeClassNames[size]) === null || _sizeClassNames$size === void 0 ? void 0 : _sizeClassNames$size.icon)
  }))), !!label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)('ml-3', !isDisabled && 'cursor-pointer'),
    htmlFor: radioButtonId
  }, renderLabel()));
};
var exports = {
  Group: RadioButtonGroup,
  Button: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(RadioButton)
};
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/components/switch/index.js":
/*!****************************************!*\
  !*** ./src/components/switch/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _switch_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _switch_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch.jsx */ "./src/components/switch/switch.jsx");


/***/ }),

/***/ "./src/components/switch/switch.jsx":
/*!******************************************!*\
  !*** ./src/components/switch/switch.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utility/utils */ "./src/utility/utils.js");
var _excluded = ["id", "onChange", "value", "defaultValue", "size", "disabled", "label", "name"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}



var SwitchLabel = function SwitchLabel(_ref) {
  var label = _ref.label,
    switchId = _ref.switchId,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    children = _ref.children;
  var isEmptyLabel = !(label !== null && label !== void 0 && label.heading) || !(label !== null && label !== void 0 && label.description);
  var isLabelAComponent = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(label);
  var renderLabel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (isLabelAComponent) {
      return label;
    }
    var _label$heading = label.heading,
      heading = _label$heading === void 0 ? '' : _label$heading,
      _label$description = label.description,
      description = _label$description === void 0 ? '' : _label$description;
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-1.5"
    }, heading && /*#__PURE__*/React.createElement("p", {
      className: "text-text-primary text-base font-medium leading-4 m-0"
    }, heading), description && /*#__PURE__*/React.createElement("p", {
      className: "text-text-secondary text-sm font-normal leading-5 m-0"
    }, description));
  }, [label]);
  if (isEmptyLabel) {
    return children;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)('inline-flex items-center', !isEmptyLabel && 'items-start')
  }, children, /*#__PURE__*/React.createElement("label", {
    htmlFor: switchId,
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)('ml-3', !disabled && 'cursor-pointer')
  }, renderLabel()));
};
var Switch = function Switch(_ref2, ref) {
  var id = _ref2.id,
    onChange = _ref2.onChange,
    value = _ref2.value,
    _ref2$defaultValue = _ref2.defaultValue,
    defaultValue = _ref2$defaultValue === void 0 ? false : _ref2$defaultValue,
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 'lg' : _ref2$size,
    _ref2$disabled = _ref2.disabled,
    disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
    _ref2$label = _ref2.label,
    label = _ref2$label === void 0 ? {
      heading: '',
      description: ''
    } : _ref2$label,
    name = _ref2.name,
    props = _objectWithoutProperties(_ref2, _excluded);
  var isControlled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return typeof value !== 'undefined';
  }, [value]);
  var switchId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return id ? id : "switch-".concat((0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)());
  }, []);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    checked = _useState2[0],
    setChecked = _useState2[1];
  var color = 'primary';
  var getValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return isControlled ? value : checked;
  }, [isControlled, value, checked]);
  var handleChange = function handleChange(event) {
    if (disabled) {
      return;
    }
    var newValue = event.target.checked;
    if (!isControlled) {
      setChecked(newValue);
    }
    if (typeof onChange !== 'function') {
      return;
    }
    onChange(newValue);
  };
  var colorClassNames = {
    primary: {
      input: 'bg-toggle-off hover:bg-toggle-off-hover checked:bg-toggle-on checked:hover:bg-toggle-on-hover focus:ring focus:ring-toggle-on focus:ring-offset-4 border border-solid border-toggle-off-border checked:border-toggle-on-border shadow-toggleContainer focus:outline-none checked:focus:border-toggle-on-border focus:border-toggle-off-border',
      toggleDial: 'bg-toggle-dial-background shadow-toggleDial'
    }
  };
  var sizeClassNames = {
    lg: {
      container: 'w-11 h-6',
      toggleDial: 'size-4 top-2/4 left-1 -translate-y-2/4 peer-checked:translate-x-5 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4'
    },
    sm: {
      container: 'w-9 h-5',
      toggleDial: 'size-3 top-2/4 left-1 -translate-y-2/4 peer-checked:translate-x-4 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4'
    }
  };
  var disabledClassNames = {
    input: 'bg-toggle-off-disabled disabled:border-transparent shadow-none disabled:cursor-not-allowed',
    toggleDial: 'peer-disabled:cursor-not-allowed'
  };
  return /*#__PURE__*/React.createElement(SwitchLabel, {
    label: label,
    switchId: switchId,
    disabled: disabled
  }, /*#__PURE__*/React.createElement("div", {
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)('relative inline-block cursor-pointer rounded-full shrink-0', sizeClassNames[size].container)
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    id: switchId,
    type: "checkbox",
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("peer appearance-none absolute bg-blue-gray-100 rounded-full cursor-pointer transition-colors duration-300 h-full w-full  before:content-[''] checked:before:content-[''] m-0", colorClassNames[color].input, disabled && disabledClassNames.input),
    checked: getValue(),
    onChange: handleChange,
    disabled: disabled,
    name: name
  }, props)), /*#__PURE__*/React.createElement("label", {
    htmlFor: switchId,
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("bg-white border border-blue-gray-100 rounded-full absolute cursor-pointer shadow-md before:content[''] before:transition-opacity before:opacity-0 hover:before:opacity-10 before:hidden border-none transition-all duration-300", sizeClassNames[size].toggleDial, colorClassNames[color].toggleDial, disabled && disabledClassNames.toggleDial)
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Switch));

/***/ }),

/***/ "./src/components/tabs/index.js":
/*!**************************************!*\
  !*** ./src/components/tabs/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _tabs_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _tabs_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.jsx */ "./src/components/tabs/tabs.jsx");


/***/ }),

/***/ "./src/components/tabs/tabs.jsx":
/*!**************************************!*\
  !*** ./src/components/tabs/tabs.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ "../../node_modules/tailwind-merge/dist/bundle-mjs.mjs");
var _excluded = ["slug", "text", "icon", "className", "disabled", "badge"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}



// Context for managing the TabsGroup state.
var TabsGroupContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();

// Hook to use the TabsGroup context.
var useTabsGroup = function useTabsGroup() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TabsGroupContext);
};

// TabsGroup component to wrap Tab components.
var TabsGroup = function TabsGroup(props) {
  var children = props.children,
    _props$activeItem = props.activeItem,
    activeItem = _props$activeItem === void 0 ? null : _props$activeItem,
    onChange = props.onChange,
    className = props.className,
    _props$size = props.size,
    size = _props$size === void 0 ? 'sm' : _props$size,
    _props$orientation = props.orientation,
    orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'pill' : _props$variant,
    _props$iconPosition = props.iconPosition,
    iconPosition = _props$iconPosition === void 0 ? 'left' : _props$iconPosition,
    _props$width = props.width,
    width = _props$width === void 0 ? 'auto' : _props$width;

  // Handle change event.
  var handleChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event, value) {
    if (onChange) {
      onChange({
        event: event,
        value: value
      });
    }
  }, [onChange]);

  // Determine styles based on the variant and orientation.
  var borderRadius = 'rounded-full',
    padding = 'p-1',
    gap = orientation === 'vertical' ? 'gap-0.5' : 'gap-1',
    border = 'border border-tab-border border-solid';
  if (variant === 'rounded' || orientation === 'vertical') {
    borderRadius = 'rounded-md';
  } else if (variant === 'underline') {
    borderRadius = 'rounded-none';
    padding = 'p-0';
    gap = 'gap-0';
    border = 'border-none';
  }

  // Determine width classes.
  var widthClasses = width === 'full' ? 'w-full' : '';
  // Determine orientation classes.
  var orientationClasses = orientation === 'vertical' ? 'flex-col' : '';

  // Base classes for the TabsGroup.
  var baseClasses = "box-border [&>*]:box-border bg-tab-background flex items-center ".concat(widthClasses, " ").concat(orientationClasses);

  // Merge classes.
  var groupClassName = (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)(baseClasses, borderRadius, padding, gap, border, className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: groupClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabsGroupContext.Provider, {
    value: {
      activeItem: activeItem,
      onChange: handleChange,
      size: size,
      variant: variant,
      orientation: orientation,
      iconPosition: iconPosition,
      width: width
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, function (child) {
    if (! /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child);
  })));
};

// Tab component to be used within a TabsGroup.
var Tab = function Tab(props, ref) {
  var providerValue = useTabsGroup();
  var slug = props.slug,
    text = props.text,
    icon = props.icon,
    className = props.className,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$badge = props.badge,
    badge = _props$badge === void 0 ? null : _props$badge,
    rest = _objectWithoutProperties(props, _excluded);
  if (!providerValue) {
    throw new Error('Tab should be used inside Tabs Group');
  }
  var activeItem = providerValue.activeItem,
    onChange = providerValue.onChange,
    size = providerValue.size,
    variant = providerValue.variant,
    orientation = providerValue.orientation,
    iconPosition = providerValue.iconPosition,
    width = providerValue.width;

  // Determine size classes.
  var sizes = {
    sm: 'p-1 text-sm [&>svg]:h-4 [&>svg]:w-4',
    md: 'p-2 text-base [&>svg]:h-5 [&>svg]:w-5',
    lg: 'p-2.5 text-lg [&>svg]:h-6 [&>svg]:w-6'
  }[size];

  // Determine width and orientation classes for tabs.
  var fullWidth = width === 'full' ? 'flex-1' : '';
  var orientationClasses = orientation === 'vertical' ? 'w-full justify-between' : '';

  // Base classes for the Tab.
  var baseClasses = "bg-transparent text-primary cursor-pointer flex items-center justify-center transition-colors duration-200 ".concat(fullWidth, " ").concat(orientationClasses);
  var borderClasses = 'border-none';
  var borderBottomClasses = '';
  var variantClasses = 'rounded-full';
  if (variant === 'rounded') {
    variantClasses = 'rounded-md';
  } else if (variant === 'underline') {
    variantClasses = 'rounded-none';
    borderBottomClasses = 'border-t-0 border-r-0 border-l-0 border-b border-solid border-tab-border';
  }
  var borderActiveInlineClasses = 'border-border-interactive';

  // Additional classes.
  var hoverClasses = 'hover:bg-misc-tab-item-hover';
  var focusClasses = 'focus:outline-none';
  var disabledClasses = disabled ? 'text-text-disabled cursor-not-allowed' : '';
  var activeClasses = activeItem === slug ? 'bg-background-primary' : '';

  // Merge classes.
  var tabClassName = (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)(baseClasses, borderClasses, variantClasses, borderBottomClasses, activeItem === slug && variant === 'underline' ? borderActiveInlineClasses : '', hoverClasses, focusClasses, disabledClasses, sizes, activeClasses, className);
  var iconParentClasses = (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)('flex items-center gap-1');

  // Handle click event.
  var handleClick = function handleClick(event) {
    onChange(event, {
      slug: slug,
      text: text
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
    ref: ref,
    className: tabClassName,
    disabled: disabled,
    onClick: handleClick
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: iconParentClasses
  }, iconPosition === 'left' && icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "mr-1"
  }, icon), text, iconPosition === 'right' && icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ml-1"
  }, icon)), badge && /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(badge) && badge);
};
var exports = {
  Group: TabsGroup,
  Tab: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Tab)
};
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/components/textarea/index.js":
/*!******************************************!*\
  !*** ./src/components/textarea/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _textarea_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _textarea_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textarea.jsx */ "./src/components/textarea/textarea.jsx");


/***/ }),

/***/ "./src/components/textarea/textarea.jsx":
/*!**********************************************!*\
  !*** ./src/components/textarea/textarea.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utility/utils */ "./src/utility/utils.js");
var _excluded = ["id", "defaultValue", "value", "size", "className", "disabled", "onChange", "error", "onError"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}



var TextArea = function TextArea(_ref, ref) {
  var id = _ref.id,
    _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? '' : _ref$defaultValue,
    value = _ref.value,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'sm' : _ref$size,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? false : _ref$error,
    _ref$onError = _ref.onError,
    onError = _ref$onError === void 0 ? function () {} : _ref$onError,
    props = _objectWithoutProperties(_ref, _excluded);
  var inputId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return id || "input-textarea-".concat((0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)());
  }, [id]);
  var isControlled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return typeof value !== 'undefined';
  }, [value]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var getValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return isControlled ? value : inputValue;
  }, [isControlled, value, inputValue]);
  var handleChange = function handleChange(event) {
    if (disabled) {
      return;
    }
    var newValue = event.target.value;
    if (!isControlled) {
      setInputValue(newValue);
    }
    if (typeof onChange !== 'function') {
      return;
    }
    onChange(newValue);
  };
  var baseClasses = 'py-2 rounded border border-solid border-border-subtle bg-field-secondary-background font-normal placeholder-text-tertiary text-text-primary';
  var sizeClasses = {
    sm: 'px-3 rounded text-xs',
    md: 'px-3 rounded-md text-sm',
    lg: 'px-4 rounded-lg text-base'
  };
  var hoverClasses = disabled ? 'hover:border-border-disabled' : 'hover:border-border-strong';
  var focusClasses = 'focus:border-focus-border focus:ring-2 focus:ring-toggle-on focus:ring-offset-2';
  var errorClasses = error ? 'focus:border-focus-error-border focus:ring-field-color-error bg-field-background-error' : '';
  var disabledClasses = disabled ? 'border-border-disabled bg-field-background-disabled cursor-not-allowed text-text-disabled' : '';
  return /*#__PURE__*/React.createElement("textarea", _extends({
    ref: ref,
    id: inputId,
    className: (0,_utility_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(baseClasses, disabledClasses, sizeClasses[size], focusClasses, hoverClasses, errorClasses, className),
    disabled: disabled,
    onChange: handleChange,
    onInvalid: onError,
    value: getValue()
  }, props));
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(TextArea));

/***/ }),

/***/ "./src/utility/utils.js":
/*!******************************!*\
  !*** ./src/utility/utils.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: function() { return /* binding */ cn; },
/* harmony export */   prefix: function() { return /* binding */ prefix; }
/* harmony export */ });
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ "../../node_modules/tailwind-merge/dist/bundle-mjs.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "../../node_modules/clsx/dist/clsx.mjs");


function prefix() {
  return 'force-ui-';
}

/**
 * For Conditional classNames and merging TailwindCSS classes.
 * @param {...any} classNames
 * @return  {string} - Merged TailwindCSS classes.
 */
var cn = function cn() {
  return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)(clsx__WEBPACK_IMPORTED_MODULE_0__.clsx.apply(void 0, arguments));
};

/***/ }),

/***/ "../../node_modules/lucide-react/dist/esm/Icon.js":
/*!********************************************************!*\
  !*** ../../node_modules/lucide-react/dist/esm/Icon.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Icon; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAttributes.js */ "../../node_modules/lucide-react/dist/esm/defaultAttributes.js");
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils.js */ "../../node_modules/lucide-react/dist/esm/shared/src/utils.js");
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
      "svg",
      {
        ref,
        ..._defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);


//# sourceMappingURL=Icon.js.map


/***/ }),

/***/ "../../node_modules/lucide-react/dist/esm/createLucideIcon.js":
/*!********************************************************************!*\
  !*** ../../node_modules/lucide-react/dist/esm/createLucideIcon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createLucideIcon; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils.js */ "../../node_modules/lucide-react/dist/esm/shared/src/utils.js");
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.js */ "../../node_modules/lucide-react/dist/esm/Icon.js");
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const createLucideIcon = (iconName, iconNode) => {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
    ({ className, ...props }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref,
      iconNode,
      className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(`lucide-${(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.toKebabCase)(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};


//# sourceMappingURL=createLucideIcon.js.map


/***/ }),

/***/ "../../node_modules/lucide-react/dist/esm/defaultAttributes.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/lucide-react/dist/esm/defaultAttributes.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ defaultAttributes; }
/* harmony export */ });
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map


/***/ }),

/***/ "../../node_modules/lucide-react/dist/esm/icons/check.js":
/*!***************************************************************!*\
  !*** ../../node_modules/lucide-react/dist/esm/icons/check.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Check; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "../../node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Check = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);


//# sourceMappingURL=check.js.map


/***/ }),

/***/ "../../node_modules/lucide-react/dist/esm/icons/info.js":
/*!**************************************************************!*\
  !*** ../../node_modules/lucide-react/dist/esm/icons/info.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Info; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "../../node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Info = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);


//# sourceMappingURL=info.js.map


/***/ }),

/***/ "../../node_modules/lucide-react/dist/esm/icons/loader-circle.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/lucide-react/dist/esm/icons/loader-circle.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoaderCircle; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "../../node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const LoaderCircle = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);


//# sourceMappingURL=loader-circle.js.map


/***/ }),

/***/ "../../node_modules/lucide-react/dist/esm/icons/minus.js":
/*!***************************************************************!*\
  !*** ../../node_modules/lucide-react/dist/esm/icons/minus.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Minus; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "../../node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const Minus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);


//# sourceMappingURL=minus.js.map


/***/ }),

/***/ "../../node_modules/lucide-react/dist/esm/icons/x.js":
/*!***********************************************************!*\
  !*** ../../node_modules/lucide-react/dist/esm/icons/x.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ X; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "../../node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);


//# sourceMappingURL=x.js.map


/***/ }),

/***/ "../../node_modules/lucide-react/dist/esm/shared/src/utils.js":
/*!********************************************************************!*\
  !*** ../../node_modules/lucide-react/dist/esm/shared/src/utils.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeClasses: function() { return /* binding */ mergeClasses; },
/* harmony export */   toKebabCase: function() { return /* binding */ toKebabCase; }
/* harmony export */ });
/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && array.indexOf(className) === index;
}).join(" ");


//# sourceMappingURL=utils.js.map


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customAlphabet: function() { return /* binding */ customAlphabet; },
/* harmony export */   customRandom: function() { return /* binding */ customRandom; },
/* harmony export */   nanoid: function() { return /* binding */ nanoid; },
/* harmony export */   random: function() { return /* binding */ random; },
/* harmony export */   urlAlphabet: function() { return /* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet; }
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");


let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))
  while (size--) {
    id += _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet[bytes[size] & 63]
  }
  return id
}


/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   urlAlphabet: function() { return /* binding */ urlAlphabet; }
/* harmony export */ });
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


/***/ }),

/***/ "../../node_modules/clsx/dist/clsx.mjs":
/*!*********************************************!*\
  !*** ../../node_modules/clsx/dist/clsx.mjs ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: function() { return /* binding */ clsx; }
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ __webpack_exports__["default"] = (clsx);

/***/ }),

/***/ "../../node_modules/tailwind-merge/dist/bundle-mjs.mjs":
/*!*************************************************************!*\
  !*** ../../node_modules/tailwind-merge/dist/bundle-mjs.mjs ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTailwindMerge: function() { return /* binding */ createTailwindMerge; },
/* harmony export */   extendTailwindMerge: function() { return /* binding */ extendTailwindMerge; },
/* harmony export */   fromTheme: function() { return /* binding */ fromTheme; },
/* harmony export */   getDefaultConfig: function() { return /* binding */ getDefaultConfig; },
/* harmony export */   mergeConfigs: function() { return /* binding */ mergeConfigs; },
/* harmony export */   twJoin: function() { return /* binding */ twJoin; },
/* harmony export */   twMerge: function() { return /* binding */ twMerge; },
/* harmony export */   validators: function() { return /* binding */ validators; }
/* harmony export */ });
const CLASS_PART_SEPARATOR = '-';
function createClassGroupUtils(config) {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  function getClassGroupId(className) {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
    if (classParts[0] === '' && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  }
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return undefined;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(({
    validator
  }) => validator(classRest))?.classGroupId;
}
const arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
    if (property) {
      // I use two dots here because one dot is used as prefix for class groups in plugins
      return 'arbitrary..' + property;
    }
  }
}
/**
 * Exported for testing only
 */
function createClassMap(config) {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach(classDefinition => {
    if (typeof classDefinition === 'string') {
      const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === 'function') {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup]) => {
      processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}
function getPart(classPartObject, path) {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(pathPart => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map(classDefinition => {
      if (typeof classDefinition === 'string') {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === 'object') {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}

// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: () => undefined,
      set: () => {}
    };
  }
  let cacheSize = 0;
  let cache = new Map();
  let previousCache = new Map();
  function update(key, value) {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map();
    }
  }
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}
const IMPORTANT_MODIFIER = '!';
function createParseClassName(config) {
  const {
    separator,
    experimentalParseClassName
  } = config;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  // parseClassName inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
  function parseClassName(className) {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === '/') {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === '[') {
        bracketDepth++;
      } else if (currentCharacter === ']') {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  }
  if (experimentalParseClassName) {
    return function parseClassNameExperimental(className) {
      return experimentalParseClassName({
        className,
        parseClassName
      });
    };
  }
  return parseClassName;
}
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach(modifier => {
    const isArbitraryVariant = modifier[0] === '[';
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
}
function createConfigUtils(config) {
  return {
    cache: createLruCache(config.cacheSize),
    parseClassName: createParseClassName(config),
    ...createClassGroupUtils(config)
  };
}
const SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */
  const classGroupsInConflict = new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map(originalClassName => {
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(':');
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId,
      classGroupId,
      originalClassName,
      hasPostfixModifier
    };
  }).reverse()
  // Last class in conflict wins, so we need to filter conflicting classes in reverse order.
  .filter(parsed => {
    if (!parsed.isTailwindClass) {
      return true;
    }
    const {
      modifierId,
      classGroupId,
      hasPostfixModifier
    } = parsed;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(group => classGroupsInConflict.add(modifierId + group));
    return true;
  }).reverse().map(parsed => parsed.originalClassName).join(' ');
}

/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = '';
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === 'string') {
    return mix;
  }
  let resolvedValue;
  let string = '';
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
function fromTheme(key) {
  const themeGetter = theme => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
}
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /*#__PURE__*/new Set(['px', 'full', 'screen']);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, 'length', isLengthOnly);
}
function isNumber(value) {
  return Boolean(value) && !Number.isNaN(Number(value));
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, 'number', isNumber);
}
function isInteger(value) {
  return Boolean(value) && Number.isInteger(Number(value));
}
function isPercent(value) {
  return value.endsWith('%') && isNumber(value.slice(0, -1));
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
const sizeLabels = /*#__PURE__*/new Set(['length', 'size', 'percentage']);
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, sizeLabels, isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, 'position', isNever);
}
const imageLabels = /*#__PURE__*/new Set(['image', 'url']);
function isArbitraryImage(value) {
  return getIsArbitraryValue(value, imageLabels, isImage);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, '', isShadow);
}
function isAny() {
  return true;
}
function getIsArbitraryValue(value, label, testValue) {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === 'string' ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  return lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
}
function isNever() {
  return false;
}
function isShadow(value) {
  return shadowRegex.test(value);
}
function isImage(value) {
  return imageRegex.test(value);
}
const validators = /*#__PURE__*/Object.defineProperty({
  __proto__: null,
  isAny,
  isArbitraryImage,
  isArbitraryLength,
  isArbitraryNumber,
  isArbitraryPosition,
  isArbitraryShadow,
  isArbitrarySize,
  isArbitraryValue,
  isInteger,
  isLength,
  isNumber,
  isPercent,
  isTshirtSize
}, Symbol.toStringTag, {
  value: 'Module'
});
function getDefaultConfig() {
  const colors = fromTheme('colors');
  const spacing = fromTheme('spacing');
  const blur = fromTheme('blur');
  const brightness = fromTheme('brightness');
  const borderColor = fromTheme('borderColor');
  const borderRadius = fromTheme('borderRadius');
  const borderSpacing = fromTheme('borderSpacing');
  const borderWidth = fromTheme('borderWidth');
  const contrast = fromTheme('contrast');
  const grayscale = fromTheme('grayscale');
  const hueRotate = fromTheme('hueRotate');
  const invert = fromTheme('invert');
  const gap = fromTheme('gap');
  const gradientColorStops = fromTheme('gradientColorStops');
  const gradientColorStopPositions = fromTheme('gradientColorStopPositions');
  const inset = fromTheme('inset');
  const margin = fromTheme('margin');
  const opacity = fromTheme('opacity');
  const padding = fromTheme('padding');
  const saturate = fromTheme('saturate');
  const scale = fromTheme('scale');
  const sepia = fromTheme('sepia');
  const skew = fromTheme('skew');
  const space = fromTheme('space');
  const translate = fromTheme('translate');
  const getOverscroll = () => ['auto', 'contain', 'none'];
  const getOverflow = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  const getSpacingWithAutoAndArbitrary = () => ['auto', isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ['', isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ['auto', isNumber, isArbitraryValue];
  const getPositions = () => ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'];
  const getLineStyles = () => ['solid', 'dashed', 'dotted', 'double', 'none'];
  const getBlendModes = () => ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
  const getAlign = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
  const getZeroAndEmpty = () => ['', '0', isArbitraryValue];
  const getBreaks = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  const getNumber = () => [isNumber, isArbitraryNumber];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ':',
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ['none', '', isTshirtSize, isArbitraryValue],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumber(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', 'video', isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ['container'],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ['right', 'left', 'none', 'start', 'end']
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none', 'start', 'end']
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ['auto', isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['wrap', 'wrap-reverse', 'nowrap']
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ['1', 'auto', 'initial', 'none', isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ['first', 'last', 'none', isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: ['auto', {
          span: ['full', isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: ['auto', {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: ['normal', ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': ['start', 'end', 'center', 'stretch']
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: ['normal', ...getAlign(), 'baseline']
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline']
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': [...getAlign(), 'baseline']
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [{
        'space-x': [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': ['space-x-reverse'],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [{
        'space-y': [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': ['space-y-reverse'],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': [isArbitraryValue, spacing, 'min', 'max', 'fit']
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': [isArbitraryValue, spacing, 'none', 'full', 'min', 'max', 'fit', 'prose', {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit']
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      'line-clamp': [{
        'line-clamp': ['none', isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      'list-image': [{
        'list-image': ['none', isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['none', 'disc', 'decimal', isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [{
        'placeholder-opacity': [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [{
        'text-opacity': [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [...getLineStyles(), 'wavy']
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: ['auto', 'from-font', isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': ['auto', isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      'text-wrap': [{
        text: ['wrap', 'nowrap', 'balance', 'pretty']
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ['normal', 'words', 'all', 'keep']
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ['none', 'manual', 'auto']
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [{
        'bg-opacity': [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: ['no-repeat', {
          repeat: ['', 'x', 'y', 'round', 'space']
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: ['auto', 'cover', 'contain', isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from-pos': [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via-pos': [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to-pos': [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-s': [{
        'rounded-s': [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-e': [{
        'rounded-e': [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ss': [{
        'rounded-ss': [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-se': [{
        'rounded-se': [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ee': [{
        'rounded-ee': [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-es': [{
        'rounded-es': [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-s': [{
        'border-s': [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-e': [{
        'border-e': [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [{
        'border-opacity': [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [...getLineStyles(), 'hidden']
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [{
        'divide-x': [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': ['divide-x-reverse'],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [{
        'divide-y': [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': ['divide-y-reverse'],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [{
        'divide-opacity': [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: ['', ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': ['ring-inset'],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [{
        'ring-opacity': [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [{
        'ring-offset': [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [{
        'ring-offset': [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': [...getBlendModes(), 'plus-lighter', 'plus-darker']
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ['', 'none']
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': ['', 'none']
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ['top', 'bottom']
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', 'spin', 'ping', 'pulse', 'bounce', isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ['', 'gpu', 'none']
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ['auto', colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ['none', 'auto']
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['none', 'auto']
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', 'y', 'x', '']
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ms': [{
        'scroll-ms': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-me': [{
        'scroll-me': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-ps': [{
        'scroll-ps': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pe': [{
        'scroll-pe': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'manipulation']
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-x': [{
        'touch-pan': ['x', 'left', 'right']
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-y': [{
        'touch-pan': ['y', 'up', 'down']
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-pz': ['touch-pinch-zoom'],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, 'none']
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, 'none']
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ['sr-only', 'not-sr-only'],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      'forced-color-adjust': [{
        'forced-color-adjust': ['auto', 'none']
      }]
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      size: ['w', 'h'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      'line-clamp': ['display', 'overflow'],
      rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb'],
      touch: ['touch-x', 'touch-y', 'touch-pz'],
      'touch-x': ['touch'],
      'touch-y': ['touch'],
      'touch-pz': ['touch']
    },
    conflictingClassGroupModifiers: {
      'font-size': ['leading']
    }
  };
}

/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */
function mergeConfigs(baseConfig, {
  cacheSize,
  prefix,
  separator,
  experimentalParseClassName,
  extend = {},
  override = {}
}) {
  overrideProperty(baseConfig, 'cacheSize', cacheSize);
  overrideProperty(baseConfig, 'prefix', prefix);
  overrideProperty(baseConfig, 'separator', separator);
  overrideProperty(baseConfig, 'experimentalParseClassName', experimentalParseClassName);
  for (const configKey in override) {
    overrideConfigProperties(baseConfig[configKey], override[configKey]);
  }
  for (const key in extend) {
    mergeConfigProperties(baseConfig[key], extend[key]);
  }
  return baseConfig;
}
function overrideProperty(baseObject, overrideKey, overrideValue) {
  if (overrideValue !== undefined) {
    baseObject[overrideKey] = overrideValue;
  }
}
function overrideConfigProperties(baseObject, overrideObject) {
  if (overrideObject) {
    for (const key in overrideObject) {
      overrideProperty(baseObject, key, overrideObject[key]);
    }
  }
}
function mergeConfigProperties(baseObject, mergeObject) {
  if (mergeObject) {
    for (const key in mergeObject) {
      const mergeValue = mergeObject[key];
      if (mergeValue !== undefined) {
        baseObject[key] = (baseObject[key] || []).concat(mergeValue);
      }
    }
  }
}
function extendTailwindMerge(configExtension, ...createConfig) {
  return typeof configExtension === 'function' ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
}
const twMerge = /*#__PURE__*/createTailwindMerge(getDefaultConfig);

//# sourceMappingURL=bundle-mjs.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Avatar: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Avatar; },
/* harmony export */   Badge: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Badge; },
/* harmony export */   Button: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Button; },
/* harmony export */   ButtonGroup: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ButtonGroup; },
/* harmony export */   Checkbox: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Checkbox; },
/* harmony export */   Input: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Input; },
/* harmony export */   Label: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Label; },
/* harmony export */   Loader: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Loader; },
/* harmony export */   ProgressBar: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ProgressBar; },
/* harmony export */   RadioButton: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.RadioButton; },
/* harmony export */   Switch: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Switch; },
/* harmony export */   Tabs: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Tabs; },
/* harmony export */   TextArea: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.TextArea; }
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components/index.js");

}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=force-ui.js.map