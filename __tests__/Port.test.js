/* globals describe it expect */
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
    });

    module.exports = Port;