/**
 * Long-Polling chat demo with Node.js
 *
 * @author Sascha Feldmann (sascha.feldmann@gmx.de)
 */

// constants
global.APP_PATH = './chat/server/';

// dependencies
var server = require('./server');

// start server
server.start();
