class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class CrossoverFactory {
  create(type) {
    switch (type) {
      case 'X5':
        return new Bmw(type, 108000, 300);

      case 'X6':
        return new Bmw(type, 111000, 320);
    }
  }
}
class SedanFactory {
  create(type) {
    switch (type) {
      case '520':
        return new Bmw(type, 48000, 200);
      case 'M550i':
        return new Bmw(type, 51000, 220);
    }
  }
}
const crossover = new CrossoverFactory();
const sedan = new SedanFactory();

const bmwFactory = (type, model) => {
  switch (type) {
    case 'sedan':
      return sedan.create(model);
    case 'crossover':
      return crossover.create(model);
  }
};

const x5 = bmwFactory('sedan', '520');
const x6 = bmwFactory('crossover', 'X6');
console.log(x6);
console.log(x5);
