var assert = require('assert');
var Math = require('../math');
describe('Math', function() {

    describe('Add()', function() {

        it('should add two numbers together', function() {

            new Math().add(1, 1);

            console.log('sum, 2', sum, 2);

            assert.equal(sum, 2);
        });
    });
});
