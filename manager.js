'use strict'

const events = require('./events.js');
var Fakerator = require("fakerator");
var fakerator = Fakerator();

require("./pilot.js");
require("./system.js");

    setInterval(function() {
        events.emit('jordan', {
            airline: 'jordinian',
            flightID: fakerator.misc.uuid(),
            pilotName: fakerator.names.name(),
            destination: fakerator.address.country()
        });
    }
    , 10000);
   
    events.on('jordan', (payload) => {
        console.log(`EVENT new flight ${payload.flightID} to ${payload.destination} has been added`);
        events.emit('NewFlight', payload);
    }
    );
    
    events.on('in-transit', (payload) => {
        console.log('EVENT', { event: 'in-transit', time: new Date(), payload });
    }
    );
 
