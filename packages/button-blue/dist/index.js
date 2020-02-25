"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledButton = _styledComponents["default"].button.withConfig({
  displayName: "src__StyledButton",
  componentId: "sc-8v1471-0"
})(["background:blue;color:#fff;border-radius:4px;cursor:pointer;font-size:1rem;font-weight:300;padding:9px 36px;"]);

var ButtonBlue = function ButtonBlue(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("div", null, _react["default"].createElement(StyledButton, null, children));
};

var _default = ButtonBlue;
exports["default"] = _default;
//# sourceMappingURL=index.js.map