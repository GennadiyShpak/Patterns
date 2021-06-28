class AutoNews {
  constructor() {
    this.news = '';
    this.actions = [];
  }
  setNews(text) {
    this.news = text;
    this.notifyAll();
  }
  notifyAll() {
    return this.actions.forEach(subs => subs.inform(this));
  }
  register(observer) {
    this.actions.push(observer);
  }
  unregister(observer) {
    this.actions = this.actions.filter(el => !(el instanceof observer));
  }
}

class Jack {
  inform(message) {
    console.log(`Jack has been informed about: ${message.news}`);
  }
}
class Max {
  inform(message) {
    console.log(`Max has been informed about: ${message.news}`);
  }
}

const autoNews = new AutoNews();
autoNews.register(new Jack());
autoNews.register(new Max());
autoNews.setNews('New Tesla price is 40000');
console.log(autoNews.actions);

// class Click {
//   constructor() {
//     this.handlers = [];
//   }
//   subscribe(observer) {
//     this.handlers.push(observer);
//     console.log(this.handlers);
//   }
//   unsubscribe(observer) {
//     const index = this.handlers.indexOf(observer);
//     if (index !== -1) {
//       this.handlers.splice(index, 1);
//     }
//   }
//   notify(options) {
//     this.handlers.forEach(observer => {
//       if (typeof observer === 'function') {
//         observer.update.call(observer, options);
//       }
//     });
//   }
// }

// const observer1 = {
//   update: function (args) {
//     console.log('pressed');
//   },
// };
// const observer2 = {
//   update: function (args) {
//     console.log('pressed too');
//   },
// };
// const click = new Click();
// click.subscribe(observer1);
// click.subscribe(observer2);

// click.notify({ some: 'params' });

// click.unsubscribe(observer1);
// click.notify();
