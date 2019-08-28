var counter = (function() {
  var id;
  return function() {
    if (id != undefined) {
      return "Already invoked";
    }
    var count = 1;
    id = setInterval(function() {
      if (count > 10) {
        clearInterval(id);
        id = undefined;
      } else {
        console.log(count++);
      }
    }, 1000);
  };
})();
