var mediator = (function () {
  var subscribers = {};
  return {
    subscribe: function (event, callback) {
      subscribers[event] = subscribers[event] || [];
      subscribers[event].push(callback);
    },
    unsubscribe: function (event, callback) {
      var subscribrIndex;
      if (!event) {
        subscribers = {};
      } else if (event && !callback) {
        subscribers[event] = [];
      } else {
        subscribrIndex = subscribers[event].indexOf(callback);
        if (subscribrIndex > -1) {
          subscribers[event].splice(subscribrIndex, 1);
        }
      }
    },
    publish: function (event, data) {
      if (subscribers[event]) {
        subscribers[event].forEach(function (callback) {
          callback(data);
        });
      }
    },
  };
})();

class OfficialDealer {
  constructor() {
    this.customers = [];
  }
  orderAuto(customer, auto, info) {
    const name = customer.getName();
    console.log(`Order name: ${name}. Order auto is ${auto}`);
    console.log(`Additional info: ${info}`);
    this.addToCustomersList(name);
  }
  addToCustomersList(name) {
    this.customers.push(name);
  }
  getCustomerList() {
    return this.customers;
  }
}
class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }
  getName() {
    return this.name;
  }
  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info);
  }
}

const mediators = new OfficialDealer();

const a = new Customer('Jeka', mediators);
const b = new Customer('Serega', mediators);

a.makeOrder('Tesla', 'aaaaa');
b.makeOrder('Moskvich', 'bbbbb');
