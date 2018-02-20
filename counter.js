var counter = function(arr){
  return 'The length of arr is '+ arr.length;
};

var adder = function(a,b){
  return `The result of two number is ${a+b}`;//template string
}

var pi =3.15;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
}
