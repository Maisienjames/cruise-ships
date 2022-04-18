/* globals describe it expect */
const Ship = require('../src/ship.js');

describe('constructor', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const ship = new Ship('Merlin', 'Dover');
        expect(ship.name).toEqual('Merlin');
    });
    it('has a starting port', () => {
        const ship = new Ship('Merlin', 'Dover');
        expect(ship.startingPort).toBe('Dover');
    });
    it('can set sail', () => {
        const ship = new Ship('Merlin', 'Dover');
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    });
});

    module.exports = Ship;