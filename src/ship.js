function Ship(name, startingPort) {
    this.name = name;
    this.startingPort = startingPort;
    };

    Ship.prototype.setSail = function() {
        this.startingPort = null;
    };



module.exports = Ship;