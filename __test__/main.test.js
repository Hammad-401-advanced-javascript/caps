
'use strict';
require('../caps');
jest.spyOn(global.console, 'log');
const events = require('../events');

describe('test', () => {
  it('console should not been run when emit test', () => {
    events.emit('test', {
      storeName: 'process.env.storeName',
      customerName: 'faker.name.findName()',
      address: 'faker.address.streetAddress()',
      id: 'faker.finance.account()',
    });
    expect(console.log).not.toHaveBeenCalled();
  });
});


describe('transit', () => {
  it('console should be run when emit transit', () => {
    events.emit('transit', {
      storeName: 'process.env.storeName',
      customerName: 'faker.name.findName()',
      address: 'faker.address.streetAddress()',
      id: 'faker.finance.account()',
    });
    expect(console.log).toHaveBeenCalled();
  });

});


