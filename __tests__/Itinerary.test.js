/* globals describe it expect */
const Itinerary = require('../src/itinerary.js');
const Port = require('../src/port.js');

describe('itinerary', () => {
    it('can be instantiated', () => {
        const itinerary = new Itinerary('Dover');
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
    it('can have ports', () => {
        const dover = jest.fn();
        const calais = jest.fn();

        const itinerary = new Itinerary([dover, calais]);
        expect (itinerary.ports).toEqual([dover, calais]);
    });
    });

    module.exports = Itinerary;