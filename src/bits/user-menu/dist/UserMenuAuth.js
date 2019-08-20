"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _gstantoTreehouse_tech = _interopRequireDefault(require("@bit/gstanto.treehouse_tech.hover-menu"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block\n    align-items: center;\n    position: relative;\n    cursor: pointer;\n    .name {\n        font-size: 12px;\n        color: white;\n    }\n    .email {\n        color: white;\n        font-weight: 400;\n        font-size: 10px;\n    }\n    .user-icon-container {\n        margin-left: 4px;\n        svg {\n            margin-top: 6px;\n            height: 20px;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styled.default.div(_templateObject());

var UserMenuAuth = function UserMenuAuth(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  return _react.default.createElement(Container, {
    "data-cy": "profile-closed",
    onClick: function onClick() {
      return setOpen(true);
    }
  }, _react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, _react.default.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, _react.default.createElement("div", {
    className: "name"
  }, props.name || 'Doc Holiday'), _react.default.createElement("div", {
    className: "email"
  }, props.email || 'dholiday@mail.com')), _react.default.createElement("div", {
    className: "user-icon-container"
  }, "icon")), _react.default.createElement(_gstantoTreehouse_tech.default, {
    open: open,
    close: function close(event) {
      if (event) event.stopPropagation();
      setOpen(false);
    }
  }, props.children));
};

UserMenuAuth.propTypes = {
  name: _propTypes.default.string,
  email: _propTypes.default.string
};
var _default = UserMenuAuth;
exports.default = _default;

//# sourceMappingURL=UserMenuAuth.js.map