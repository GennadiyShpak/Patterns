class Macbook {
  constructor() {
    this.price = 1000;
    this.screen = 11.6;
  }
  cost() {
    return this.price;
  }
  screenSize() {
    return this.screen;
  }
}
let decorator = (() => {
  const memory = function (macbook) {
    const v = macbook.cost();
    macbook.cost = () => v + 75;
  };
  const engraving = function (macbook) {
    const v = macbook.cost();
    macbook.cost = () => v + 200;
  };
  const insurance = function (macbook) {
    const v = macbook.cost();
    macbook.cost = () => v + 250;
  };
  return {
    decorate(macbook) {
      memory(macbook);
      engraving(macbook);
      insurance(macbook);
    },
  };
})();

let macbook = new Macbook();
macbook.cost();
console.log('macbook.cost()', macbook.cost());

decorator.decorate(macbook);
console.log('macbook.cost()', macbook.cost());

class Car {
  constructor() {
    this.price = 10000;
    this.model = 'Car';
  }
  getPrice() {
    return this.price;
  }
  getDescription() {
    return this.model;
  }
}

class Tesla extends Car {
  constructor() {
    super();
    this.price = 25000;
    this.model = 'Tesla';
  }
}

class Autopilot {
  constructor(car) {
    this.car = car;
  }
  getPrice() {
    return this.car.getPrice() + 5000;
  }
  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}
class Parctronic {
  constructor(car) {
    this.car = car;
  }
  getPrice() {
    return this.car.getPrice() + 3000;
  }
  getDescription() {
    return `${this.car.getDescription()} with parctronic`;
  }
}

let tesla = new Tesla();
tesla = new Autopilot(tesla);
tesla = new Parctronic(tesla);
console.log(tesla.getPrice());
console.log(tesla.getDescription());
