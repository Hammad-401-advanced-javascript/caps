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






// .client.on('data', (data) => {

  //   const event = setInterval(function() {
//     events.emit('pickedUp', JSON.parse(data).users());
//     if (event.event === 'message') {
  //       console.log(event.order.id);}
  //   }, 5000);


  // });
//   console.log('event',event)
//   console.log(new Date().toLocaleString(), event.event, event.payload);
// function users(){

//   let storeName = process.env.STORE || 'main-store'; 
//   let orderId = faker.finance.account(); 
//   let customerName = faker.name.findName(); 
//   let address = faker.address.streetAddress(); 

//   let data={
//     storeName:storeName,
//     id:orderId,
//     costumer:customerName,
//     costumerAddress:address,
//   };

//   return {'data':data};

// }



// const net = require('net');
// const client = new net.Socket();
// const HOST = process.env.HOST || 'localhost';
// const PORT = process.env.PORT || 3000;

// client.connect(PORT, HOST, () => {
//   console.log('connected');
//   client.on('data', (data) => {
//     const event = JSON.parse(data);
//     console.log('event',event)
//     console.log(new Date().toLocaleString(), event.event, event.payload);
//   });
//   client.on('close', () => console.log('Connection Closed'));
// });

// client.on('error', (err) => console.log(`logger Client error ${err.message}`));