/**
 * Long-Polling chat demo with Node.js
 *
 * @author Sascha Feldmann
 */

var http = require('http'),
    router = require('./router');

env = require('./config');

/**
 * Start the server immediatly.
 */
exports.start = function () {
    http.createServer(function (request, response) {
        // delegate request to router
        router.matches(request, response);
    }).listen(env.variables.port, env.variables.host);

    console.log('Server is up and running on ' + env.variables.host + ':' + env.variables.port);
}

exports.setContentCallback = function (contentToSet) {
    displayContent = contentToSet;
}

