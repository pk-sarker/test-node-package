'use strict';
var expect = require('chai').expect;
var should = require('chai').should();
var index = require('../index');

describe('Check Variables', function() {
    it('testPrint should exist', function () {
        should.exist(index);
        //console.log('index: ', index);
        should.exist(index.testPrint);
    });

    it('TestClassA should exist', function () {
        should.exist(index);
        should.exist(index.TestClassA);
    });

    it('TestClassB should exist', function () {
        should.exist(index);
        should.exist(index.TestClassB);
    });

    it('TestClassC should exist', function () {
        should.exist(index);
        should.exist(index.TestClassC);
        var c = new index.TestClassC();
        c.inc(3)
    });

    it('Inc in TestClassC should return 4', function () {
        should.exist(index);
        should.exist(index.TestClassC);
        var c = new index.TestClassC();
        expect(c.inc(3)).to.equal(4);
    });

    it('testEnum should exist', function () {
        should.exist(index);
        should.exist(index.testEnum);
    });
});