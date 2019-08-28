var getR = () => {
 return new Promise(resolve => {
   setTimeout(() => resolve(records), 2000);
 });
};
var filterRecords = numbers => {
 return numbers.filter(number => {
   return number ;
 });
};
var logFilteredRecords = numbers => {
 console.log(numbers);
};
var GetRecords = () => {
 var numberPromise = getR();
 numberPromise.then(filterRecords).then(logFilteredRecords);
};
GetRecords();



//////////////

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