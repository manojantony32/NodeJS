var stuff = require('./counter.js');

console.log(stuff.counter(['one','two','three']));
console.log(stuff.adder(stuff.pi, 5));


//Event Emitter
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('someMsg', function(msg){
  console.log('recieved msg: '+msg);
});
eventEmitter.emit('someMsg', 'Hello mano');

//Util with EventEmitter
//var events = require('events');
// var util = require('util');
//
// var person = function(name){
//   this.name = name;
// };
//
// util.inherits(person, events.EventEmitter);
//
// var james = new person('james');
// var ram = new person('ram');
// var mano = new person('mano');
// var people = [james, ram, mano];
//
// people.forEach(function(person){
//   person.on('someEvent', function(msg){
//     console.log(person.name+' said: '+msg);
//   });
// });
//
// james.emit('someEvent', 'welcome dude to our code world');
// mano.emit('someEvent', 'you going good, but need more speed');
