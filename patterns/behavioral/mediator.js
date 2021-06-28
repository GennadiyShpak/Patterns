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
