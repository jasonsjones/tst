var expect = require('chai').expect;
var TST = require('../');

describe('Ternary Search Tree', function () {
    it('exists when instantiated', function () {
        var tst = new TST();
        expect(tst).to.exist;
    });
});
