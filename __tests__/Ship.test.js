/* globals describe it expect */
const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js');
const { it, expect } = require('@jest/globals');
const { describe } = require('yargs');

describe('Ship', () => {
describe('with ports and an itinerary', () => {
    let ship;
    let dover;
    let calais;
    let itinerary;
  
    beforeEach(() => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);
      });
    });

    it('can be instantiated', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        const dover = new Port('Dover');
        const itinerary = new Itinerary([dover]);
        const ship = new Ship(itinerary);
        expect(ship.currentPort).toBe(dover);
    });

    it('can set sail', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(dover.ships).not.toContain(ship);
    });
    
    it('gets added to port on instantiation', () => {
        const dover = new Port ('Dover');
        const itinerary = new Itinerary ([dover]);
        const ship = new Ship (itinerary);
        expect(dover.ships).toContain(ship);
    });
});

    it('can dock at a different port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);
    });

    it('can\'t sail further than its itinerary', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });

    module.exports = Ship;
    module.exports = Port;