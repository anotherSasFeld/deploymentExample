/**
 * Long-Polling chat demo with Node.js
 *
 * @author Sascha Feldmann
 */

// constants
global.APP_PATH = './chat/server/';

// dependencies
var server = require('./server');

// start server
server.start();
