'use strict';

const events = require('./events.js');
require('./caps');


events.on('pickedUp', payload => {
  setTimeout(
    function () { driving(payload), 1000; });

});

function driving(payload) {

  console.log(`DRIVER: pickedUp up ${payload.data.id} `);
  events.emit('transit', payload);
  setTimeout(function () { events.emit('delivered', payload); }, 3000);
}



