'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

require('github-markdown-css/github-markdown.css');

require('./Markdown.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* github-markdown-css's main entry in package.json resolves to a CSS file and this seems to be causing issues with eslint */
/* eslint-disable import/extensions */
var propTypes = {
  /**
   * Markdown content to parse
   */
  src: _propTypes2.default.string
};
/* eslint-enable import/extensions */


var defaultProps = {
  src: ''
};

/* eslint react/no-danger:0 */
var Markdown = function Markdown(props) {
  return _react2.default.createElement('div', {
    dir: 'ltr',
    className: 'markdown-body',
    style: { listStyle: 'disc outside none' },
    dangerouslySetInnerHTML: { __html: (0, _marked2.default)(props.src) }
  });
};

Markdown.propTypes = propTypes;
Markdown.defaultProps = defaultProps;

exports.default = Markdown;