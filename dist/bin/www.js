"use strict";

var _http = _interopRequireDefault(require("http"));

var _app = _interopRequireDefault(require("../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var port = process.env.PORT || 5000;

_app["default"].set('port', port);

var server = _http["default"].createServer(_app["default"]);

server.listen(port);
server.on('listening', function () {
  var addr = server.address();
  var bind = typeof addr === 'string' ? "pipe ".concat(addr) : "port ".concat(addr.port); // eslint-disable-next-line no-console

  console.log("Listening on ".concat(bind));
});