'use strict';

const events = require('./events.js');

require('./manager.js');
require('./pilot.js');

events.on('NewFlight', (payload) => {
    console.log(`manager new flight ${payload.flightID} to ${payload.destination} has been added`);
    console.log('flight', { event: 'NewFlight', time: new Date(), payload });
}
);

events.on('tookoff', (payload) => {
    // console.log(`manager flight with id ${payload.flightID} to destination ${payload.destination} took off`);
    console.log('flight', { event: 'tookoff', time: new Date(), payload });
}
);

events.on('Arrived', (payload) => {
    console.log('flight', { event: 'Arrived', time: new Date(), payload });
    console.log(`manager flight with id ${payload.flightID} to ${payload.destination} has been arrived`);
}
);

