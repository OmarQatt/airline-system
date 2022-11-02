"use strict";

const io = require("socket.io")(4000);



io.on("connection", (socket) => {
  socket.on("NewFlight", (Details) => {
    io.emit("NewFlight", Details);
    console.log(`Flight {
        event: 'NewFlight',
        time: ${new Date()},
        Details: {
            airLine: ${Details.airline},
            flightID: ${Details.flightID},
            pilot: ${Details.pilotName},
            destination: ${Details.destination}
        }
    }`);
  });
});


const airlineIO = io.of("/airline");
airlineIO.on("connection", (socket) => {
  socket.on("takeoff", (Details) => {
    console.log(`Flight {
        event: 'takeoff',
        time: ${new Date()},
        Details: {
            airLine: ${Details.airline},
            flightID: ${Details.flightID},
            pilot: ${Details.pilotName},
            destination: ${Details.destination}
        }
    }`);
  });
});

airlineIO.on("connection", (socket) => {
    socket.on("Arrived", (Details) => {
      io.emit("Arrived", Details);
      console.log(`Flight {
          event: 'Arrived',
          time: ${new Date()},
          Details: {
              airLine: ${Details.airline},
              flightID: ${Details.flightID},
              pilot: ${Details.pilotName},
              destination: ${Details.destination}
          }
      }`);
    });
  });
  