/**
 * Created by slash1990 on 26.10.2014.
 */

var env = require('../../config/environment.json');

var config = function() {
    var node_env = process.env.NODE_ENV ||'development';

    // force heroku's port
    if ('heroku' == node_env) {
        env[node_env].port = process.env.PORT;
    }

    return env[node_env];
}

exports.variables = config();
