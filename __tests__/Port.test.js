/* globals describe it expect */
const { it, expect } = require('@jest/globals');
const Port = require('../src/port.js');

describe('port', () => {
    it('can be instantiated', () => {
        const port = new Port('Dover');
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const port = new Port('Dover');
        expect(port.name).toEqual('Dover');
    });
    it('can add a ship', () => {
        const port = new Port('Dover');
        const ship = {};
        
        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });
    it('can remove a ship', () => {
        const port = new Port('Dover');
        const titanic = {};
        const queenMary = {};

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
    });
    });

    module.exports = Port;