'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function socketConnect(Target) {
  function SocketConnect(props, context) {
    return (0, _react.createElement)(Target, Object.assign({}, props, {
      socket: context.socket
    }));
  }

  SocketConnect.contextTypes = {
    socket: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object])
  };

  return SocketConnect;
}

exports.default = socketConnect;