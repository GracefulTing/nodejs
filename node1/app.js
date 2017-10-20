//引入module.js
var stuff = require("./module");   //取到的是对象

console.log(stuff.counter(['tt','dede']));
console.log(stuff.adder(5,3));
console.log(stuff.pi);