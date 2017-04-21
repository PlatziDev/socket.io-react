'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socketConnect = exports.SocketProvider = undefined;

var _SocketProvider = require('./SocketProvider.js');

var _SocketProvider2 = _interopRequireDefault(_SocketProvider);

var _socketConnect = require('./socket-connect.js');

var _socketConnect2 = _interopRequireDefault(_socketConnect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SocketProvider = _SocketProvider2.default;
exports.socketConnect = _socketConnect2.default;