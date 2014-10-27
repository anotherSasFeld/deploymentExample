/**
 * NodeUnit Test
 *
 * Run this test by using command 'nodeunit template.js'
 *
 * @author Sascha Feldmann (sascha.feldmann@gmx.de)
 */

require('../../server/app.js');
var template = require('../../server/template.js')


exports.testSimpleRender = function(test) {
    test.expect(1);

    // when simpleRender is called given some template and callback
    template.simpleRender(global.APP_PATH + 'static/404.html', function(readData) {
        test.ok( "string" == (typeof readData));
        test.done();
    });
}

exports.testSimpleRenderNotExisting = function(test) {
    test.expect(1);

    // when simpleRender is called given some not existing template and callback
    test.throws(template.simpleRender(global.APP_PATH + 'static/notexisting.html', function(readData) {
    }));

    test.done();
}