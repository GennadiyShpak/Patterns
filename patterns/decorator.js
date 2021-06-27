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
    macbook.cost = () => {
      v + 75;
    };
  };
  const engraving = function (macbook) {
    const v = macbook.cost();
    macbook.cost = () => {
      v + 200;
    };
  };
  const insurance = function (macbook) {
    const v = macbook.cost();
    macbook.cost = () => {
      v + 250;
    };
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

decorator.decorate(macbook);
