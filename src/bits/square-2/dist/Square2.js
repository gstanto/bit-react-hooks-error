"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Square2 = function Square2(props) {
  return _react.default.createElement("div", {
    style: {
      width: 100,
      height: 100,
      background: 'red',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "Square ", _react.default.createElement(_Text.default, null));
};

var _default = Square2;
exports.default = _default;

//# sourceMappingURL=Square2.js.map