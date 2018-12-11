'use strict';
var enums = require('./enums');
var TestClassA = require('./test-class-a');
var TestClassB = require('./test-class-b');
var TestClassC = require('./test-class-c');

var testPrint = function (st) {
    console.log('> Test Print: ', st);
};

module.exports = {
    testPrint: testPrint,
    testEnum: enums,
    TestClassA: TestClassA,
    TestClassB: TestClassB,
    TestClassC: TestClassC
};