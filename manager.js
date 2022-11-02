'use strict';
const io = require("socket.io-client");
const socket = io("http://localhost:4000");

let Fakerator = require("fakerator");
let fakerator = Fakerator();

setInterval(() => {
    
       const airline = 'jordinian';
       const flightID = fakerator.misc.uuid();
       const pilotName = fakerator.names.name();
       const destination = fakerator.address.country();

       const Details = { airline, flightID, pilotName, destination };
    console.log(`Manager: new flight with ID ${Details.flightID} have been scheduled`);
    socket.emit('NewFlight', Details);
}
, 10000);



socket.on('Arrived', (Details) => {
    console.log(`Manager: we are greatly thankful for the amazing flight, ${Details.pilotName}`);
}
);






