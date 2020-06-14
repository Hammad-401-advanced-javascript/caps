'use strict';

const events = require('./events.js');
// const data=require('./vendor');
require('./caps');


events.on('pickedUp', payload=>{
  setTimeout(
    function(){driving(payload),1000;});
  
});

function driving(payload)
{

  console.log(`DRIVER: pickedUp up ${payload.data.id} `);
  events.emit('transit',payload);
  setTimeout(function(){events.emit('delivered',payload);},3000);
}




// events.on('pickedUp', handlePickedUp);
// events.on('transit', handleTransit);
// events.on('delivered', handlePackage);




// function handlePickedUp(payload) {

    
//     setTimeout(()=>{},1000);
        
//   }

// function handleTransit(payload) {
//   setTimeout(()=>{console.log(`DRIVER: delivered up ${payload.data.orderId} `);},1000);  
// }  



// function handlePackage(payload) {
// //   console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
//   setTimeout(()=>{console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);},3000);
  
// }  


