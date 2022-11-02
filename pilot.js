'use strict';

const events = require('./events.js');

require("./manager.js");
require("./system.js");

events.on('NewFlight', (payload) => {
    // console.log(`pilot new flight ${payload.flightID} to ${payload.destination} has been added`);
    setTimeout(() => {
        console.log(`pilot with id ${payload.flightID} to destination ${payload.destination} took off`);
        events.emit('tookoff', payload);
    }, 4000);

    setTimeout(() => {
        console.log(`pilot with id ${payload.flightID} to ${payload.destination} has been arrived`);
        events.emit('Arrived', payload);
    }, 7000);
}
);





