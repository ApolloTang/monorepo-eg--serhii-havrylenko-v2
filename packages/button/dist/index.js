"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledButton = _styledComponents.default.button`
    background: red;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 300;
    padding: 9px 36px;
`;

const Button = ({
  children
}) => _react.default.createElement("div", null, _react.default.createElement(StyledButton, null, children));

var _default = Button;
exports.default = _default;
//# sourceMappingURL=index.js.map