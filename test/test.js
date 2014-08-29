'use strict';

// testing against codes found at: http://ascii-table.com/ansi-escape-sequences-vt-100.php

var assert = require('assert');
var ansiRegex = require('../');



describe("ANSI Matching", function () {

    it('should match ansi code in a string', function (done) {
        assert.equal(ansiRegex().test('foo\u001b[4mcake\u001b[0m'), true);
        assert.equal(ansiRegex().test('\u001b[4mcake\u001b[0m'), true);
        assert.equal(ansiRegex().test('foo\u001b[4mcake\u001b[0m'), true);
        assert.equal(ansiRegex().test('\u001b[0m\u001b[4m\u001b[42m\u001b[31mfoo\u001b[39m\u001b[49m\u001b[24mfoo\u001b[0m'), true);
        assert.equal(ansiRegex().test('foo\u001b[mfoo'), true);
        done();
    });

    it('should match ansi code from ls command', function (done) {
        assert.equal(ansiRegex().test('\u001b[00;38;5;244m\u001b[m\u001b[00;38;5;33mfoo\u001b[0m'), true);
        done();
    });

    it('should match reset;setfg;setbg;italics;strike;underline sequence in a string', function (done) {
        assert.equal(ansiRegex().test('\u001b[0;33;49;3;9;4mbar\u001b[0m'), true);
        done();
    });

    it('should match clear tabs sequence in a string', function (done) {
        assert.equal(ansiRegex().test('foo\u001b[0gbar'), true);
        done();
    });

    it('should match clear line sequence in a string', function (done) {
        assert.equal(ansiRegex().test('foo\u001b[0gbar'), true);
        done();
    });

    it('should match clear line from cursor right in a string', function (done) {
        assert.equal(ansiRegex().test('foo\u001b[Kbar'), true);
        console.log(ansiRegex().match('foo\u001b[Kbar')[0]);
        assert.equal(ansiRegex().match('foo\u001b[Kbar')[0], '\u001b[K');
        done();
    });

});



