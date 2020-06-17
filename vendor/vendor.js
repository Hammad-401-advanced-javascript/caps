const net = require('net');
// this help with getting the user input from the CLI
const client = new net.Socket();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const faker = require('faker');




/*********read the data from the server**********/

client.connect(PORT, HOST, () => {
  console.log('Client Connected');
});

setInterval(
  function () {
    let obj = {
      storeName: process.env.STORE || 'main-store',
      id: faker.finance.account(),
      customerName: faker.name.findName(),
      address: faker.address.streetAddress(),
    };
    let message = { event: 'pickup', payload: obj };
    let event = JSON.stringify(message);
    client.write(event);
  }, 5000);

/**************read the data from step 3 in the server ***************/

let messages = [];

client.on('data', (data) => {
  // console.log('What we got from the server', data, JSON.parse(data));
  const event = JSON.parse(data);

  if (event.event === 'delivered') {
    console.clear();
    messages.push(event.id);
    messages.forEach((element) => {
      console.log(`Thank you for delivering ${element}`);
    });
    console.log('');
  }
});



