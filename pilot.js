'use strict';

const io = require("socket.io-client");

const airlineSocket = io.connect("http://localhost:4000/airline");
const socket = io("http://localhost:4000");

// socket.on('NewFlight', (Details) => {
//     console.log(`manager new flight ${Details.flightID} to ${Details.destination} has been added`);
//     console.log('flight', { event: 'NewFlight', time: new Date(), Details });
// }
// );

socket.on('NewFlight', (Details) => {
    setTimeout(() => {
        console.log(`pilot with id ${Details.flightID} to destination ${Details.destination} takeoff`);
        airlineSocket.emit('takeoff', Details);
    }, 4000);

    setTimeout(() => {
        console.log(`pilot with id ${Details.flightID} to ${Details.destination} has been arrived`);
        airlineSocket.emit('Arrived', Details);
    }, 7000);
});





