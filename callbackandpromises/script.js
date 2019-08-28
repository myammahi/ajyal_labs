// USING CALLBACKS

fetch(20, function(result, err) {
  if (err) {
    console.log(err.message);
  } else {
    console.log("fetched " + result.length + " records : ", result);
  }
  fetch(55, function(result, err) {
    if (err) {
      console.log(err.message);
    } else {
      console.log("fetched " + result.length + " records : ", result);
    }
    fetch(10, function(result, err) {
      if (err) {
        console.log(err.message);
      } else {
        console.log("fetched " + result.length + " records : ", result);
      }
    });
  });
});

// USING PROMISES

var logPromiseRecords = function(result) {
  console.log("fetched " + result.length + " records : ", result);
};

var logPromiseError = function(error) {
  console.log(error.message);
};

fetchPromise(20)
  .then(logPromiseRecords, logPromiseError)
  .then(function() {
    return fetchPromise(100);
  })
  .then(logPromiseRecords, logPromiseError)
  .then(function() {
    return fetchPromise(10);
  })
  .then(logPromiseRecords, logPromiseError);


//get value of 14
  var myPromise= fetchPromise(14);
myPromise.then(function(records){console.log(records)});


//get the record if not get error message
var myPromise= fetchPromise(70);
myPromise.then(function(records){console.log(records)},function(error){console.log(error.message)});
