'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('terra-form-select/lib/Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisabledExample = function DisabledExample() {
  return _react2.default.createElement(
    _Select2.default,
    { placeholder: 'Select a color', disabled: true, style: { maxWidth: '300px' }, defaultValue: 'blue' },
    _react2.default.createElement(_Select2.default.Option, { value: 'blue', display: 'Blue' }),
    _react2.default.createElement(_Select2.default.Option, { value: 'green', display: 'Green' }),
    _react2.default.createElement(_Select2.default.Option, { value: 'purple', display: 'Purple' }),
    _react2.default.createElement(_Select2.default.Option, { value: 'red', display: 'Red' }),
    _react2.default.createElement(_Select2.default.Option, { value: 'violet', display: 'Violet' })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = DisabledExample;