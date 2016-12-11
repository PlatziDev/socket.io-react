import React, { createElement, PropTypes } from 'react';

function socketConnect(Target) {
  function SocketConnect(props, context) {
    return createElement(Target, Object.assign({}, props, {
      socket: context.socket,
    });
  }

  SocketConnect.contextTypes = {
    socket: PropTypes.oneOfType([
      PropTypes.bool, PropTypes.object
    ]),
  }

  return SocketConnect;
}

export default socketConnect;
