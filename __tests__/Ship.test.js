/* globals describe it expect */
const Ship = require('../src/ship.js');
const Port = require('../src/port.js');

describe('ship', () => {
    it('can be instantiated', () => {
        const port = new Port('Dover');
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('names the current port', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);
        expect(ship.currentPort).toBe(port);
    });
    it('can set sail', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);
    
    });
});

    module.exports = Ship;
    module.exports = Port;