/**
 * NodeUnit Test of config.js
 *
 * Run this test by using command 'nodeunit general.js'
 *
 * @author Sascha Feldmann (sascha.feldmann@gmx.de)
 */
var config = require('../../server/config.js')

exports.testVariables = function(test) {
    test.expect(2);

    // when config variables are fetched, make sure they are not null by default
    test.ok( null !== config.variables.host );
    test.ok( null !== config.variables.port );

    test.done();
}

/**
 * Make sure that an exception is thrown if a config variable does not exist.
 *
 * @param test
 */
exports.testNotExistingVariables = function(test) {
    test.expect(1);

    test.throws(config.variables.not_existing);

    test.done();
}