'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000'||'http://localhost:3001');


module.exports = socket;