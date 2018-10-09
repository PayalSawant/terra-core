'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Overlay = require('terra-overlay/lib/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _OverlayContainer = require('terra-overlay/lib/OverlayContainer');

var _OverlayContainer2 = _interopRequireDefault(_OverlayContainer);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */


var OverlayExample = function (_React$Component) {
  _inherits(OverlayExample, _React$Component);

  function OverlayExample() {
    _classCallCheck(this, OverlayExample);

    var _this = _possibleConstructorReturn(this, (OverlayExample.__proto__ || Object.getPrototypeOf(OverlayExample)).call(this));

    _this.state = { show: false };
    _this.handleTriggerOverlay = _this.handleTriggerOverlay.bind(_this);
    _this.handleTriggerFullScreenOverlay = _this.handleTriggerFullScreenOverlay.bind(_this);
    _this.handleOnRequestESC = _this.handleOnRequestESC.bind(_this);
    return _this;
  }

  _createClass(OverlayExample, [{
    key: 'handleTriggerOverlay',
    value: function handleTriggerOverlay() {
      this.setState({ show: true, relative: true });
    }
  }, {
    key: 'handleTriggerFullScreenOverlay',
    value: function handleTriggerFullScreenOverlay() {
      this.setState({ show: true, relative: false });
    }
  }, {
    key: 'handleOnRequestESC',
    value: function handleOnRequestESC() {
      this.setState({ show: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _OverlayContainer2.default,
        { style: { height: '100px', width: '100%' } },
        _react2.default.createElement(
          _Overlay2.default,
          { isOpen: this.state.show, isRelativeToContainer: this.state.relative, onRequestClose: this.handleOnRequestESC },
          _react2.default.createElement(
            'p',
            null,
            'Close by clicking the overlay or pressing the ESC key.'
          )
        ),
        _react2.default.createElement(_terraButton2.default, { text: 'Trigger Container Overlay', onClick: this.handleTriggerOverlay }),
        _react2.default.createElement(_terraButton2.default, { text: 'Trigger FullScreen Overlay', onClick: this.handleTriggerFullScreenOverlay })
      );
    }
  }]);

  return OverlayExample;
}(_react2.default.Component);

exports.default = OverlayExample;