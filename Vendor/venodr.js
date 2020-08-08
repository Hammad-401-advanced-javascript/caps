'use strict';
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const faker = require('faker');
const io = require('socket.io-client');
const { address } = require('faker');
const socket = io.connect('http://localhost:300/caps');
const STORENAME = process.env.STORENAME || '1-206-flowers';
socket.emit('join', STORENAME);
socket.on('delivered', (data) => {
  console.log(`Thank you for delivering the ${data.id}`);

});

setInterval(
  function () {
    let obj = {
      storeName: STORENAME,
      id: uuidv4(),
      customerName: faker.name.findName(),
      address: faker.address.streetAddress(),
    };
    socket.emit('pickup', obj);

  }, 5000);