const events=require('./events.js');
require('./caps.js');

const faker=require('faker');

setInterval(() => {
  require('./driver.js');
}, 1000);


function users(){
    
  let storeName = process.env.STORE || 'main-store'; 
  let orderId = faker.finance.account(); 
  let customerName = faker.name.findName(); 
  let address = faker.address.streetAddress(); 

  let data={
    storeName:storeName,
    id:orderId,
    costumer:customerName,
    costumerAddress:address,
  };
  
  return {'data':data};

}
setInterval(function() {
  events.emit('pickedUp',users());
}, 5000);



module.exports=users;



