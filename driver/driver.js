const net = require('net');
const client = new net.Socket();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;


/******from step 3 in the server, read the data*******/


client.connect(PORT, HOST, () => {

  client.on('data', (data) => {
    const event = JSON.parse(data);
    if (event.event != 'transit') {
      console.log(event.event, event.id);
    }
  });

  client.on('close', function () {
    console.log('Logger Connection got closed');
  });

});




