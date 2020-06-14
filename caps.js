'use strict';

const events=require('./events.js');
require('./vendor');

events.on('pickedUp',(payload)=> logIt('pickedUp',payload));
events.on('delivered',(payload)=> delivered('delivered',payload));
events.on('transit',(payload)=> transit('transit',payload));



function logIt(event,payload){
  const time = new Date();
  console.log({event,time,payload});
}

function transit(event,payload){
  console.log({event,payload});
}

function delivered(event,payload){
  console.log({event,payload});
  console.log(`VENDOR: Thank you for delivering ${payload.data.id}`);

}

