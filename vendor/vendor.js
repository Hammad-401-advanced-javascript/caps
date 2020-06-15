const net = require('net');
// this help with getting the user input from the CLI
const inquirer = require('inquirer');
const client = new net.Socket();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const faker = require('faker');




/*********read the data from the server**********/

client.connect(PORT, HOST, () => {
  console.log('Client Connected');
});

function users() {
  let storeName = process.env.STORE || 'main-store';
  let orderId = faker.finance.account();
  let customerName = faker.name.findName();
  let address = faker.address.streetAddress();

  let data = {
    storeName: storeName,
    orderId: orderId,
    customerName: customerName,
    address: address,
  };
  return data;
}

const messages = [];
let event = JSON.stringify(users());
setInterval(function () { client.write(event) }, 5000);




/**************read the data from step 3 in the server ***************/

let hammad = [];

client.on('data', (data) => {
  // console.log('What we got from the server', data, JSON.parse(data));
  const event = JSON.parse(data);

  if (event.event === 'delivered') {
    console.clear()
    hammad.push(event.id)
    hammad.forEach((element) => {
      console.log(`Thank you for delivering ${element}`)
    });
    console.log('');
  }
});






// client.on('error', (err) => console.log('Client Error ', err.message));



// client.on('data', (data) => {
//   console.log('What we got from the server', data, JSON.parse(data));
//   const event = JSON.parse(data);
//   if (event.event === 'pickedUp') {
//       setTimeout(
//         function(){driving(payload),1000;});
//         function driving(payload)
//         {
//           console.log(`DRIVER: pickedUp up ${payload.data.id} `);
//           client.write('in-transit',payload);
//         }

//         setTimeout(function(){create.write('delivered',payload);},3000);

//     // console.log(event.payload);
//     console.clear();
//     messages.forEach((message) => {
//               console.log(message);
//     });
//     console.log(''); //this will add empty line after the message
//   }
// });


// function sendMessage() {
//   const message = { storeName: 'storeName', orderId: 'orderId', customerName: 'customerName', address: 'address' }
//   const event = JSON.stringify({ event: 'message', payload: message });

//   client.read(event);
// }


// function sendMessage() {
//   // [mahmoud]: hi
//   const input =  inquirer.prompt([{ message:{storeName:'storeName',orderId:'orderId',customerName:'customerName',address:'address'} }]);
//   const Message = `${input}`; //===> [name]: text
//   const event = JSON.stringify({ event: 'in-transit', payload: Message });
//   console.log('event',event);
//   client.write(event);
// }
// async function getData() {
//   sendMessage(input.message);
//   getData();
// }



// function driving(payload)
// {
//   console.log(`DRIVER: pickedUp up ${payload.data.id} `);
//   events.emit('transit',payload);
//   setTimeout(function(){events.emit('delivered',payload);},3000);
// }

//   function sendMessage(text) {
//     // [mahmoud]: hi
//     const message = `[${name}]: ${text}`; //===> [name]: text
//     const event = JSON.stringify({ event: 'message', payload: message });
//     // const event = JSON.stringify({
//     //   event: 'message',
//     //   payload: { message, sender: name },
//     // });
//     client.read(event);
//   }
//   async function getShow() {
//     const input = await inquirer.prompt([{ message:{storeName:'storeName',orderId:'orderId',customerName:'customerName',address:'address'} }]);
//     sendMessage(input.message);
//     getData();
//   }
//   async function getData() {
//     console.clear();
//     const input = await inquirer.prompt([
//       { message:{storeName:'storeName',orderId:'orderId',customerName:'customerName',address:'address'}},
//     ]);
//     message = input.message;
//   }
//   getData();
//   getShow();
// });



//******************************************************************************* */










// async function getName() {
//   console.clear();
//   const input = await inquirer.prompt([
//     { name: 'name', message: 'what is your name?' },
//   ]);
//   name = input.name;
// }
// getName();
// getInput();