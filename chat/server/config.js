/**
 * Created by slash1990 on 26.10.2014.
 */

var env = require('../../config/environment.json');

var config = function() {
    var node_env = process.env.NODE_ENV ||'development';
    return env[node_env];
}

exports.variables = config();
