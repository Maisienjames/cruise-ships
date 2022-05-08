/* globals describe it expect */
const { it, expect } = require('@jest/globals');
const Port = require('../src/port.js');
describe('port', () => {
describe('with ships', () => {
    let port;
    let dover;
    let calais;

    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais');
        });

        it('can be instantiated', () => {
            port = new Port('Dover');
            expect(new Port()).toBeInstanceOf(Object);
        });
    
        it('sets the name property', () => {
            port = new Port('Dover');
            expect(port.name).toEqual('Dover');
        });
    });
    
    it('can add a ship', () => {
        const port = new Port('Dover');
        const ship = jest.fn();
        
        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });
    it('can remove a ship', () => {
        const port = new Port('Dover');
        const titanic = jest.fn();
        const queenMary = jest.fn();

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
    });
});

    module.exports = Port;