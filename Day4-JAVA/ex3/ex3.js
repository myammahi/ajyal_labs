var outer = 10;
function sum() {
  var inner = 10;
  return outer + inner;
}
sum();

var ashish = {
  name: "Ashish",
  color: "Red",
  paint: function() {
    console.log("I can paint");
    console.log(this.color);
  }
};
var sultan = {
  name: "Sultan",
  color: "Blue"
};

function LogContext() {
  console.log(this);
}
console.log(this);
window.LogContext();
