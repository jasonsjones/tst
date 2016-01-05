var expect = require('chai').expect;
var TST = require('../');

describe('Ternary Search Tree', function () {
    it('exists when instantiated', function () {
        var tst = new TST();
        expect(tst).to.exist;
    });

    it('puts a string in the search tree', function () {
        var tst = new TST();
        expect(tst.root).to.be.null;
        tst.put('Seattle', 42);
        expect(tst.root).to.not.be.null;
    });

    it('gets the value from the search tree given a string', function () {
        var tst = new TST();
        tst.put('Seattle', 42);
        tst.put('Starbucks', 32);
        expect(tst.get('Seattle')).to.equal(42);
        expect(tst.get('Starbucks')).to.equal(32);
    });

    it('returns the number of nodes in the search tree', function () {
        var tst = new TST();
        tst.put('Seattle', 42);
        expect(tst.size()).to.equal(7);
    });
});
