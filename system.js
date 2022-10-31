'use strict';

const events = require('./events.js');

require('./manager.js');
require('./pilot.js');

events.on('NewFlight', (payload) => {
    console.log(`EVENT new flight ${payload.flightID} to ${payload.destination} has been added`);
    console.log('EVENT', { event: 'NewFlight', time: new Date(), payload });
}
);

events.on('tookoff', (payload) => {
    console.log(`EVENT flight with id ${payload.flightID} to destination ${payload.destination} took off`);
    console.log('EVENT', { event: 'tookoff', time: new Date(), payload });
}
);

events.on('Arrived', (payload) => {
    console.log(`EVENT flight with id ${payload.flightID} to ${payload.destination} has been arrived`);
    console.log('EVENT', { event: 'Arrived', time: new Date(), payload });
}
);
