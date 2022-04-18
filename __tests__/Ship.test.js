/* globals describe it expect */
const { isTypedArray } = require('util/types');
const Ship = require('../src/ship.js');

describe('constructor', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
module.exports = Ship;
        const ship = new Ship('Dover');
        expect(ship.startingPort).toBe('Dover');
    });
});