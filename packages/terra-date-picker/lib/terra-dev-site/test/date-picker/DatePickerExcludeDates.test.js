'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePicker = require('../../../../lib/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePickerExcludeDates = function DatePickerExcludeDates() {
  return _react2.default.createElement(_DatePicker2.default, {
    name: 'date-input',
    excludeDates: ['2017-04-01', '2017-04-03'],
    selectedDate: '2017-04-02'
  });
};

exports.default = DatePickerExcludeDates;